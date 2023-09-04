import { useCallback, useState } from 'react';
import * as THREE from 'three';
import './HomePage.css';

const initThreeJsScene = (node: HTMLDivElement) => {
  const w = node.clientWidth;
  const h = node.clientHeight;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setClearColor(0xffffff);
  renderer.setSize(w,h);
  node.appendChild(renderer.domElement);

  camera.position.z = 5;

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
};

// callback hook: prevent unecessary re-render of child components
// initialized: is the dependencies/

// ref atrribute of div html element: enhanced by react
// threeDivRef can acess the div node.
export const HomePage = () => {
  const [initialized, setInitialized] = useState(false);

  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        initThreeJsScene(node);
        setInitialized(true);
      }
    },
    [initialized],
  );

  return <div className="canvas" ref={threeDivRef}></div>;
};
