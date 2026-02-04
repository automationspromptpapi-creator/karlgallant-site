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

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const nodesRef = useRef<Node[]>([]);
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

    // Initialize nodes - more nodes for richer effect
    const nodeCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 20000), 50);
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1.5,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const connectionDistance = Math.min(dimensions.width, dimensions.height) * 0.22;

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
      time += 0.008;

      const nodes = nodesRef.current;

      // Update node positions
      nodes.forEach((node) => {
        // Add subtle mouse influence
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          node.vx += (dx / dist) * force * 0.008;
          node.vy += (dy / dist) * force * 0.008;
        }

        // Apply velocity
        node.x += node.vx;
        node.y += node.vy;

        // Damping
        node.vx *= 0.995;
        node.vy *= 0.995;

        // Bounce off edges with padding
        const padding = 20;
        if (node.x < padding || node.x > dimensions.width - padding) {
          node.vx *= -1;
          node.x = Math.max(padding, Math.min(dimensions.width - padding, node.x));
        }
        if (node.y < padding || node.y > dimensions.height - padding) {
          node.vy *= -1;
          node.y = Math.max(padding, Math.min(dimensions.height - padding, node.y));
        }

        // Update pulse phase
        node.pulsePhase += 0.015;
      });

      // Draw connections with new colors
      ctx.lineCap = "round";

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;

            // Create gradient for connection - purple to cyan
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );

            const pulseIntensity =
              0.5 + 0.5 * Math.sin(time * 2.5 + nodes[i].pulsePhase);

            // Purple (#6A4CFF) to Cyan (#00e5cc)
            gradient.addColorStop(
              0,
              `rgba(106, 76, 255, ${opacity * pulseIntensity})`
            );
            gradient.addColorStop(
              1,
              `rgba(0, 229, 204, ${opacity * pulseIntensity})`
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

        // Outer glow - more atmospheric
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          radius * 6
        );
        gradient.addColorStop(0, `rgba(106, 76, 255, ${0.35 * pulseIntensity})`);
        gradient.addColorStop(0.4, `rgba(0, 229, 204, ${0.15 * pulseIntensity})`);
        gradient.addColorStop(1, "rgba(0, 229, 204, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, radius * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core - slightly cyan tinted
        ctx.beginPath();
        ctx.fillStyle = `rgba(240, 244, 255, ${0.85 + 0.15 * pulseIntensity})`;
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
      style={{ opacity: 0.85 }}
    />
  );
}
