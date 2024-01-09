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
    camera.position.set(500, 300, 400);
    camera.rotation.set(0, 30, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    // scene
    const scene = new THREE.Scene();

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    ambientLight.position.set(0, 100, 0); // Set initial position
    scene.add(ambientLight);



    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 500, 0); // Set initial position
    scene.add(directionalLight);

    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5); // 5 is the size of the helper
    scene.add(directionalLightHelper);



    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 100, 0);
    scene.add(pointLight);

    // Create a point light helper
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1); // 1 is the size of the helper
    scene.add(pointLightHelper);

    // const geometry = new THREE.BoxGeometry(100, 100, 100);
    // const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(0, 100, 0); // Position the cube to be affected by the ambient light
    // scene.add(cube);


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
    <div className="tv-canvas-container" ref={containerRef}>
    </div>
  );
};

export default TV;
