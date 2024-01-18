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
    camera.position.set(400, 300, 300);
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


    // spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/4gIEYz82ppIhAvDH/scene.splinecode',
      (splineScene) => {
        splineScene.position.set(0, 0, 0);
        scene.add(splineScene);
      }
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);

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
    controls.enableRotate = false;
    controls.enableRotateUp = false;
    controls.enableRotateLeft = true;
    controls.enableRotateRight = true;
    controls.enableRotateUp = false;
    controls.enableRotateDown = false;

    controls.target.set(0, 20, 0);

    controls.enablePan = false;
    controls.enableKeys = false;

    function handleMouseMove(event) {
      const sensitivity = 0.010; // Adjust the sensitivity to control the movement intensity
      camera.position.x -= event.movementX * sensitivity;
      camera.position.y += event.movementY * sensitivity;
    }
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      const newAspect = containerRef.current.clientWidth / containerRef.current.clientHeight;

      camera.aspect = newAspect;
      camera.updateProjectionMatrix();

      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }
    

    function animate(time) {
      onWindowResize();
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
