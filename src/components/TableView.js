import React, { useEffect, useRef } from 'react';
import SceneRenderer from '../utilities/SceneRenderer';

const TableView = () => {
    const scene_renderer = useRef(new SceneRenderer());
    const container_ref  = useRef();

    useEffect(() => {
        let sr = scene_renderer.current;

        sr.renderer.setSize( container_ref.current.offsetWidth, container_ref.current.offsetHeight );
        container_ref.current.appendChild(sr.renderer.domElement);

        sr.camera.aspect = container_ref.current.offsetWidth / container_ref.current.offsetHeight;
        sr.camera.updateProjectionMatrix();

        sr.setupScene();

    }, [scene_renderer])

    return (
        <div className="table-view-canvas" ref={container_ref} onWheel={scene_renderer.current.zoomCamera} />
    );
}

export default TableView;