import * as THREE from 'three';

class SceneRenderer {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();

        this.zoomCamera = (e, camera = this.camera) => {
            camera.position.z = Math.min(Math.max(camera.position.z + (e.deltaY * -0.0025), 2), 20);
        }
    }

    setupScene() {
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0xFFA500 } );
        // var cube = new THREE.Mesh( geometry, material );
        // this.scene.add( cube );

        var texture = new THREE.TextureLoader().load( '/img/texture.jpg', () => {
            var geometry = new THREE.PlaneGeometry( 3, 2 );
            var material = new THREE.MeshLambertMaterial({ map : texture });
            var plane = new THREE.Mesh( geometry, material );
            plane.material.side = THREE.DoubleSide;
            this.scene.add( plane );

            this.camera.position.z = 5;

            var pointofLight = new THREE.PointLight( 0xffffff );
            pointofLight.position.x = 50;
            pointofLight.position.y = 50;
            pointofLight.position.z = 130;
            pointofLight.opacity = 300;

            this.scene.add(pointofLight);

            this.renderer.render( this.scene, this.camera );
            
            var animate = () => {
                requestAnimationFrame( animate );
                // cube.rotation.x += 0.01;
                // cube.rotation.y += 0.01;
                this.renderer.render( this.scene, this.camera );
            };
            animate();
        });
    }
}

export default SceneRenderer;