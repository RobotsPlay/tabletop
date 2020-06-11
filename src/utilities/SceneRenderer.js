import * as THREE from 'three';

class SceneRenderer {
    constructor(scene_tree = null) {
        this.scene_tree = scene_tree;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 25, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();

        this.current_zoom = 5;
        this.max_zoom = 2;
        this.min_zoom = 14;

        this.onScrollzoomCamera = (e) => {
            this.zoomCamera(e.deltaY);          
        }
    }

    zoomCamera(zoom_delta) {
        this.camera.position.z = Math.min(Math.max(this.camera.position.z + (zoom_delta * -0.0025), this.max_zoom), this.min_zoom);
        this.current_zoom = this.camera.position.z;
    }

    addLayerToScene(layer) {
        if(layer.backgroundImage) {
            var texture = new THREE.TextureLoader().load(layer.backgroundImage, () => {
                var geometry = new THREE.PlaneGeometry( layer.width, layer.height );
                var material = new THREE.MeshLambertMaterial({ map : texture });
                var plane = new THREE.Mesh( geometry, material );
                plane.material.side = THREE.DoubleSide;
                this.scene.add( plane );
            });
        }
    }

    removeLayerFromScene() {

    }

    setupScene() {
        this.camera.position.z = this.current_zoom;

        var pointofLight = new THREE.PointLight( 0xffffff );
        pointofLight.position.x = 50;
        pointofLight.position.y = 50;
        pointofLight.position.z = 130;
        pointofLight.opacity = 300;

        this.scene.add(pointofLight);

        this.renderer.render( this.scene, this.camera );
        
        var animate = () => {
            requestAnimationFrame( animate );
            this.renderer.render( this.scene, this.camera );
        };
        animate();

        for(let i = 0, length = this.scene_tree.layers.length; i < length; i++) {
            this.addLayerToScene(this.scene_tree.layers[i]);
        }
    }
}

export default SceneRenderer;