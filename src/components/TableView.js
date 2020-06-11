import React, { useEffect, useRef } from 'react';
import SceneRenderer from '../utilities/SceneRenderer';
import ZoomControl from './ZoomControl';

const TableView = ({scene_tree}) => {
    const scene_renderer = useRef(new SceneRenderer(scene_tree));
    const container_ref  = useRef();

    useEffect(() => {
        if(!scene_tree) {
            return;
        }

        let sr = scene_renderer.current;

        sr.renderer.setSize( container_ref.current.offsetWidth, container_ref.current.offsetHeight );
        container_ref.current.appendChild(sr.renderer.domElement);

        sr.camera.aspect = container_ref.current.offsetWidth / container_ref.current.offsetHeight;
        sr.camera.updateProjectionMatrix();

        sr.setupScene();

    }, [scene_renderer, scene_tree])

    if(!scene_tree) {
        return (<strong>No Scene Found</strong>);
    }

    return (
        <div className="table-view-canvas" ref={container_ref} onWheel={scene_renderer.current.onScrollzoomCamera}>
            <ZoomControl scene_renderer={scene_renderer.current} />
        </div>
    );
}

export default TableView;