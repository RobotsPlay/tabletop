import React from 'react';

const SceneTreeView = ({scene_tree}) => {

    if(!scene_tree) {
        return (<strong>No Scene Found</strong>);
    }

    return (
        <div className="scene-tree-view">
            {scene_tree.layers.length ? null : <strong>No layers</strong>}
            {scene_tree.layers.map((layer, i) => (
                <div key={i}>
                    <div><strong>{layer.name}</strong></div>
                    <dl>
                        <dt>Background</dt>
                        <dd>{layer.backgroundImage}</dd>
                    </dl>

                    <dl>
                        <dt>Width</dt>
                        <dd>{layer.width}</dd>
                    </dl>

                    <dl>
                        <dt>Height</dt>
                        <dd>{layer.height}</dd>
                    </dl>
                </div>
            ))}
        </div>
    );
}

export default SceneTreeView;