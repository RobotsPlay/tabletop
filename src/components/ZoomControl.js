import React from 'react';

const ZoomControl = ({scene_renderer}) => {
    if(!scene_renderer) {
        return null;
    }

    return (
        <div>
            <button onClick={() => {scene_renderer.zoomCamera(-200)}}>Zoom Out</button>    
            
            Zoom Control (<strong>{scene_renderer.current_zoom}</strong>)

            <button onClick={() => {scene_renderer.zoomCamera(200)}}>Zoom In</button>    
        </div>
    );
}

export default ZoomControl;