class SceneTree {
    constructor() {
        this.layers = [];
    }

    addLayer(options) {
        let layer = {...options};

        this.layers.push(layer);
    }
}

export default SceneTree;