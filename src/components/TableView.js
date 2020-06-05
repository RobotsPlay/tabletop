import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TableView = () => {
    const scene = useRef(new THREE.Scene());
    const camera = useRef(new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 ));
    const renderer = useRef(new THREE.WebGLRenderer());
    const container_ref  = useRef();

    useEffect(() => {
        renderer.current.setSize( container_ref.current.offsetWidth, container_ref.current.offsetHeight );
        container_ref.current.appendChild(renderer.current.domElement);

        camera.current.aspect = container_ref.current.offsetWidth / container_ref.current.offsetHeight;
        camera.current.updateProjectionMatrix();

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.current.add( cube );
        camera.current.position.z = 5;
        
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.current.render( scene.current, camera.current );
        };
        animate();
    }, [scene, camera, renderer])

    return (
        <div className="table-view-canvas" ref={container_ref} />
    );
}

export default TableView;