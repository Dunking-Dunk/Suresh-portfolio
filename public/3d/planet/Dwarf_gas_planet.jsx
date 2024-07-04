/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 dwarf_gas_planet.gltf --transform 
Files: dwarf_gas_planet.gltf [249.79KB] > E:\coding\web development\completed_project\suresh-portfolio\public\3d\planet\dwarf_gas_planet-transformed.glb [20.38KB] (92%)
*/

import React, { useRef } from 'react'
import { useGLTF, OrthographicCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/dwarf_gas_planet-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <directionalLight intensity={1.179} decay={2} rotation={[-0.048, 0.26, 0.185]} scale={0.01} />
      <OrthographicCamera makeDefault={false} far={100000} near={0} position={[-1.124, 6.776, -14.817]} rotation={[-2.417, -0.143, -3.016]} scale={0.01} />
      <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-0.18, 0.33, -9.705]} rotation={[2.8, -0.473, Math.PI]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/dwarf_gas_planet-transformed.glb')
