// Lightweight 3D tooth for the "Why choose us" section: the clinic's tooth
// logo outline extruded into a soft solid, turning slowly inside one thin ring.
// Uses only basic three.js parts (shared with the OPD clock) and is loaded lazily.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Group,
  Mesh,
  Shape,
  ExtrudeGeometry,
  TorusGeometry,
  MeshStandardMaterial,
  AmbientLight,
  DirectionalLight,
} from 'three';

const SKY = 0x1a9bd7;

// Same outline as public/favicon.svg (64-unit grid), flipped so y points up.
function toothShape() {
  const p = (x, y) => [(x - 32) / 10, (36 - y) / 10];
  const s = new Shape();
  s.moveTo(...p(20, 18));
  const c = (a, b, e) => s.bezierCurveTo(...p(...a), ...p(...b), ...p(...e));
  c([15, 18], [12, 22], [12, 28]);
  c([12, 37], [16, 40], [18, 48]);
  c([19, 52], [21, 54], [23, 54]);
  c([26, 54], [26, 50], [27, 45]);
  c([28, 41], [29, 39], [32, 39]);
  c([35, 39], [36, 41], [37, 45]);
  c([38, 50], [38, 54], [41, 54]);
  c([43, 54], [45, 52], [46, 48]);
  c([48, 40], [52, 37], [52, 28]);
  c([52, 22], [49, 18], [44, 18]);
  c([40, 18], [37, 20], [32, 20]);
  c([27, 20], [24, 18], [20, 18]);
  return s;
}

export function mountTooth(el) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch {
    return false; // No WebGL: the line-drawn tooth stays.
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.domElement.setAttribute('aria-hidden', 'true');
  Object.assign(renderer.domElement.style, { position: 'absolute', inset: '0', width: '100%', height: '100%' });
  el.appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0, 13);
  scene.add(new AmbientLight(0xffffff, 1.5));
  const light = new DirectionalLight(0xffffff, 2.2);
  light.position.set(3, 4, 6);
  scene.add(light);

  const geo = new ExtrudeGeometry(toothShape(), {
    depth: 0.9,
    bevelEnabled: true,
    bevelThickness: 0.45,
    bevelSize: 0.35,
    bevelSegments: 4,
    curveSegments: 14,
  });
  geo.center();
  const tooth = new Mesh(geo, new MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }));

  const ring = new Mesh(
    new TorusGeometry(3.1, 0.035, 8, 96),
    new MeshStandardMaterial({ color: SKY, roughness: 0.5 }),
  );
  ring.rotation.x = 1.25;

  const group = new Group();
  group.add(tooth, ring);
  scene.add(group);

  const size = () => {
    const w = el.clientWidth || 1;
    const h = el.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  size();
  window.addEventListener('resize', size);

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  let visible = true;
  const frame = (t) => {
    // Sway rather than spin, so the tooth outline always faces the viewer
    tooth.rotation.y = Math.sin(t * 0.0008) * 0.55;
    ring.rotation.z = t * 0.0002;
    group.position.y = Math.sin(t * 0.0012) * 0.12;
    renderer.render(scene, camera);
    if (visible) raf = requestAnimationFrame(frame);
  };
  if (still) {
    tooth.rotation.y = 0.5;
    renderer.render(scene, camera);
  } else raf = requestAnimationFrame(frame);

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible && !still) raf = requestAnimationFrame(frame);
  }).observe(el);

  return true;
}
