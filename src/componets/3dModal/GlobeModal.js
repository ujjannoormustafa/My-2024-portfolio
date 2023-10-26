import React from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


const GlobeModal = () => {
    const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");

    return (
        <>
            <primitive object={gltf.scene} scale={0.04}/>
        </>
    )
}

export default GlobeModal;