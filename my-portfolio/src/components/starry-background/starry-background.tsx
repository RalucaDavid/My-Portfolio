import { useEffect, useRef } from "react";
import * as THREE from "three";
import classes from './starry-background.module.css';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const rootStyle = getComputedStyle(document.documentElement);
    const blackColor = rootStyle.getPropertyValue('--black').trim();

    scene.background = new THREE.Color(blackColor);

    const purpleColor = rootStyle.getPropertyValue('--purple').trim();
    const whiteColor = rootStyle.getPropertyValue('--white').trim();
    const grayLightColor = rootStyle.getPropertyValue('--gray-light').trim();

    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const colors: number[] = [];

    const colorArray = [purpleColor, whiteColor, grayLightColor];

    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;

      vertices.push(x, y, z);

      const color = colorArray[Math.floor(Math.random() * colorArray.length)];
      const rgb = new THREE.Color(color).toArray();
      colors.push(...rgb);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 4, 
        vertexColors: true, 
        transparent: true, 
        opacity: 0.8,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      points.rotation.x += 0.001;
      points.rotation.y += 0.001;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (canvasRef.current) {
        document.body.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <canvas className={classes.canvas} ref={canvasRef}></canvas>;
};

export default StarryBackground;
