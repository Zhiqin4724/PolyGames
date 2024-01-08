import React, { useEffect, useRef } from 'react';
import './tv.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const TV = () => {
  const containerRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    camera.position.set(800, 500, 600);
    camera.rotation.set(0, 30, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // scene
    const scene = new THREE.Scene();

    // spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/vbyd8W3Qp2hr5FnI/scene.splinecode',
      (splineScene) => {
        splineScene.position.set(0, 0, 0);
        scene.add(splineScene);
      }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // scene settings
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setClearColor(0x000000, 0);

    // orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;
    controls.enableRotate = true;
    controls.enableRotateUp = false;
    controls.enableRotateLeft = true;
    controls.enableRotateRight = true;
    controls.enableRotateUp = false;
    controls.enableRotateDown = false;

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Create a container element
    container.current = containerRef.current;
    if (container.current) {
      container.current.appendChild(renderer.domElement);
    }

    // Clean up function
    return () => {
      console.log("Cleanup function is running");
      // Dispose of resources (e.g., event listeners) when the component is unmounted
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div className="tv-canvas-container" ref={containerRef}></div>
  );
}

export default TV;
