import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AgentNode = ({ position, color, isHovered, onHover }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // 4s breathing pulse
      const scale = isHovered ? 1.1 : 1 + Math.sin(clock.elapsedTime * (Math.PI / 2)) * 0.02;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Sphere 
      ref={meshRef}
      args={[1, 32, 32]} 
      position={position}
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
    >
      <meshStandardMaterial 
        color={color} 
        roughness={0.7} 
        metalness={0.2}
        emissive={color}
        emissiveIntensity={isHovered ? 0.5 : 0.1}
      />
    </Sphere>
  );
};

const ConnectionLine = ({ start, end, opacity }: any) => {
  const points = useMemo(() => [start, end].map(p => new THREE.Vector3(...p)), [start, end]);
  return (
    <Line
      points={points}
      color="white"
      lineWidth={1}
      transparent
      opacity={opacity}
    />
  );
};

export const CausalGraph = () => {
  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);

  const nodes = useMemo(() => [
    { id: 0, pos: [0, 0, 0], color: '#006FCF' }, // Servicing Agent (Safe)
    { id: 1, pos: [-4, 2, -2], color: '#635BFF' }, // Borderline Agent
    { id: 2, pos: [4, -1, 1], color: '#FF3B30' }, // Fraud Agent (Danger)
    { id: 3, pos: [-2, -3, 3], color: '#006FCF' },
    { id: 4, pos: [3, 3, -3], color: '#006FCF' },
  ], []);

  const edges = useMemo(() => [
    [0, 1], [0, 2], [1, 3], [2, 4], [1, 4]
  ], []);

  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[-10, 10, 5]} intensity={1.5} color="#006FCF" />
        <directionalLight position={[10, -10, 5]} intensity={0.5} color="#635BFF" />
        
        {edges.map((edge, i) => (
          <ConnectionLine 
            key={i} 
            start={nodes[edge[0]].pos} 
            end={nodes[edge[1]].pos} 
            opacity={hoveredNode === null ? 0.3 : (hoveredNode === edge[0] || hoveredNode === edge[1] ? 0.8 : 0.1)}
          />
        ))}

        {nodes.map((node) => (
          <AgentNode 
            key={node.id}
            position={node.pos}
            color={node.color}
            isHovered={hoveredNode === node.id}
            onHover={(state: boolean) => setHoveredNode(state ? node.id : null)}
          />
        ))}

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
