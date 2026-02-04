"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      const rect = canvas.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio;
    ctx.scale(dpr, dpr);

    // Initialize nodes
    const nodeCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 25000), 40);
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 2,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Create connections
    connectionsRef.current = [];
    const connectionDistance = Math.min(dimensions.width, dimensions.height) * 0.25;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      time += 0.01;

      const nodes = nodesRef.current;

      // Update node positions
      nodes.forEach((node) => {
        // Add subtle mouse influence
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.vx += (dx / dist) * force * 0.01;
          node.vy += (dy / dist) * force * 0.01;
        }

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Bounce off edges
        if (node.x < 0 || node.x > dimensions.width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(dimensions.width, node.x));
        }
        if (node.y < 0 || node.y > dimensions.height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(dimensions.height, node.y));
        }

        // Update pulse phase
        node.pulsePhase += 0.02;
      });

      // Draw connections
      ctx.lineCap = "round";

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.5;

            // Create gradient for connection
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );

            const pulseIntensity =
              0.5 + 0.5 * Math.sin(time * 2 + nodes[i].pulsePhase);

            gradient.addColorStop(
              0,
              `rgba(106, 76, 255, ${opacity * pulseIntensity})`
            );
            gradient.addColorStop(
              1,
              `rgba(0, 212, 255, ${opacity * pulseIntensity})`
            );

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulseIntensity = 0.6 + 0.4 * Math.sin(node.pulsePhase);
        const radius = node.radius * (0.8 + 0.2 * pulseIntensity);

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 4
        );
        gradient.addColorStop(0, `rgba(106, 76, 255, ${0.3 * pulseIntensity})`);
        gradient.addColorStop(0.5, `rgba(0, 212, 255, ${0.1 * pulseIntensity})`);
        gradient.addColorStop(1, "rgba(0, 212, 255, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + 0.2 * pulseIntensity})`;
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
