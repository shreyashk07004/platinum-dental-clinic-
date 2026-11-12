// Small 3D wall clock for the OPD hours card, showing the current time in the
// clinic's timezone. Loaded lazily so three.js never blocks the first paint.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  CylinderGeometry,
  TorusGeometry,
  BoxGeometry,
  SphereGeometry,
  MeshStandardMaterial,
  AmbientLight,
  DirectionalLight,
} from 'three';

const NAVY = 0x13294b;
const BLUE = 0x0b6fa8;
const SKY = 0x1a9bd7;

export function mountClock(el, getTime) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return false; // No WebGL: the plain clock icon stays in place.
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%' });
  el.appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0, 9);
  scene.add(new AmbientLight(0xffffff, 1.6));
  const light = new DirectionalLight(0xffffff, 2);
  light.position.set(2, 3, 6);
  scene.add(light);

  const clock = new Group();
  scene.add(clock);

  // Face (a short cylinder turned to face the camera) and rim
  const face = new Mesh(
    new CylinderGeometry(1.9, 1.9, 0.3, 64),
    new MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }),
  );
  face.rotation.x = Math.PI / 2;
  clock.add(face);
  clock.add(new Mesh(new TorusGeometry(1.95, 0.14, 24, 96), new MeshStandardMaterial({ color: SKY, metalness: 0.3, roughness: 0.3 })));

  // Hour marks
  const markMat = new MeshStandardMaterial({ color: NAVY });
  for (let i = 0; i < 12; i++) {
    const big = i % 3 === 0;
    const mark = new Mesh(new BoxGeometry(big ? 0.12 : 0.07, big ? 0.34 : 0.2, 0.05), markMat);
    const a = (i / 12) * Math.PI * 2;
    const r = big ? 1.5 : 1.56;
    mark.position.set(Math.sin(a) * r, Math.cos(a) * r, 0.17);
    mark.rotation.z = -a;
    clock.add(mark);
  }

  // Hands pivot at the centre: geometry is shifted up so rotation.z sweeps around it.
  const hand = (len, width, color, z) => {
    const g = new BoxGeometry(width, len, 0.06);
    g.translate(0, len / 2 - 0.15, 0);
    const m = new Mesh(g, new MeshStandardMaterial({ color, roughness: 0.4 }));
    m.position.z = z;
    clock.add(m);
    return m;
  };
  const hourHand = hand(1.0, 0.16, NAVY, 0.22);
  const minuteHand = hand(1.45, 0.1, BLUE, 0.28);
  const cap = new Mesh(new SphereGeometry(0.14, 24, 24), new MeshStandardMaterial({ color: SKY }));
  cap.position.z = 0.32;
  clock.add(cap);

  const setHands = () => {
    const { minutes } = getTime();
    minuteHand.rotation.z = -((minutes % 60) / 60) * Math.PI * 2;
    hourHand.rotation.z = -(((minutes / 60) % 12) / 12) * Math.PI * 2;
  };
  setHands();

  const size = () => {
    const w = el.clientWidth || 1;
    const h = el.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  size();

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  let visible = true;
  const frame = (t) => {
    // Gentle sway so it reads as a real object, not a flat icon.
    clock.rotation.y = Math.sin(t * 0.0008) * 0.35;
    clock.rotation.x = Math.sin(t * 0.0006) * 0.12;
    renderer.render(scene, camera);
    if (visible) raf = requestAnimationFrame(frame);
  };
  if (still) renderer.render(scene, camera);
  else raf = requestAnimationFrame(frame);

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible && !still) raf = requestAnimationFrame(frame);
  }).observe(el);

  setInterval(() => {
    setHands();
    if (still) renderer.render(scene, camera);
  }, 30000);

  return true;
}
