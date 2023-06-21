import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const Background = ({ sceneRef, children }) => {
  const canvasRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const sceneElement = sceneRef.current;
    if (!sceneElement) {
      return children;
    }

    // Create a canvas element and obtain a reference
    const canvas = document.createElement("canvas");
    canvasRef.current = canvas; // Assign the canvas reference to canvasRef

    // Set the canvas size to match the container element
    const { offsetWidth, offsetHeight } = sceneElement;
    canvas.width = offsetWidth;
    canvas.height = offsetHeight;

    // Obtain the 2D rendering context of the canvas
    const context = canvas.getContext("2d");

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(offsetWidth, offsetHeight);

    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      // offsetWidth / offsetHeight,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 5);

    // Create a render target
    sceneRef.current = new THREE.WebGLRenderTarget(offsetWidth, offsetHeight);
    const waterTexture = new THREE.CanvasTexture(canvas);

    // Create a plane geometry for the pool water surface
    const planeGeometry = new THREE.PlaneGeometry(
      (offsetWidth / offsetHeight) * 10,
      10,
      1,
      1
    );

    // Create a material for the pool water surface with the canvas texture
    const material = new THREE.MeshStandardMaterial({
      color: 0x0088ff,
      metalness: 1,
      roughness: 0,
      envMapIntensity: 1,
      envMap: waterTexture,
    });

    // Create a mesh for the pool water surface
    const mesh = new THREE.Mesh(planeGeometry, material);
    mesh.rotation.x = -Math.PI / 2;
    scene.add(mesh);

    function resizeHandler() {
      const { clientWidth, clientHeight } = sceneElement;
      setWidth(clientWidth);
      setHeight(clientHeight);
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }

    resizeHandler(); // Initial sizing

    // Render the scene and update the water texture
    function animate() {
      // requestAnimationFrame(animate);
      // Update the water texture with a new pattern
      // const imageData = context.createImageData(offsetWidth, offsetHeight);
      // for (let i = 0; i < imageData.data.length; i += 4) {
      //   const x = (i / 4) % canvas.width;
      //   const y = Math.floor(i / (4 * canvas.width));
      //   const alpha = Math.sin(x / 30) * Math.sin(y / 30);
      //   imageData.data[i] = 0x00;
      //   imageData.data[i + 1] = 0x88;
      //   imageData.data[i + 2] = 0xff;
      //   imageData.data[i + 3] = Math.floor(alpha * 255);
      // }
      // context.putImageData(imageData, 0, 0);
      // waterTexture.needsUpdate = true;
      //
      // // Rotate the pool water surface
      // mesh.rotation.z += 0.001;
      //
      // renderer.render(scene, camera);
    }
    animate();

    return () => {
      // Clean up the scene when the component unmounts
      renderer.dispose();
      scene.remove(...scene.children);
    };
  }, [sceneRef.current]);
  return <div ref={sceneRef}>{children}</div>;
};
