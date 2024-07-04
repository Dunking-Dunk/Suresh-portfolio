//@ts-ignore
"use client"

import React, { useMemo } from 'react'
import { useGLTF, OrthographicCamera, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { RepeatWrapping } from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Planet(props: GroupProps) {
    const { nodes, materials } = useGLTF('/3d/planet/dwarf_gas_planet-transformed.glb')
    const url = '/3d/planet/mercury.jpg'
    const planetTexture = useTexture(url)

    return (
        <group {...props} dispose={null}>
            <directionalLight intensity={1.179} decay={2} rotation={[-0.048, 0.26, 0.185]} scale={0.1} />
            <OrthographicCamera makeDefault={true} far={100000} near={0} position={[-1.124, 6.776, -14.817]} rotation={[-2.417, -0.143, -3.016]} scale={0.01} />
            <mesh position={[-0.18, 0.33, -9.705]} rotation={[2.8, -0.473, Math.PI]} scale={0.03} >
                <sphereGeometry args={[180, 32, 64]} />
                <meshStandardMaterial map={planetTexture} roughness={0.6} metalness={0.9} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/3d/planet/dwarf_gas_planet-transformed.glb')

export default Planet