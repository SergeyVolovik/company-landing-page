(function ($) {
    "use strict";

    $(function () {

        let MainStage = function () {


            let $window = $(window),
                windowWidth = window.innerWidth,
                windowHeight = window.innerHeight,
                rendererCanvasID = 'intro__canvas';

            let renderer,
                scene,
                camera,
                particles,
                clock = new THREE.Clock(),
                mouseX = 0,
                mouseY = 0,
                isMouseDown = true,
                lastMousePos = {
                    x: 0,
                    y: 0
                },
                windowHalfX = windowWidth / 2,
                windowHalfY = windowHeight / 2;




            //particle rotation
            let particleRotation;

            let centerVector = new THREE.Vector3(0, 0, 0);
            let previousTime = 0;



            function init() {

                //WebGL Renderer		
                renderer = new THREE.WebGLRenderer({
                    canvas: document.getElementById(rendererCanvasID), //canvas
                    alpha: true,
                    antialias: true
                });

                renderer.setSize(windowWidth, windowHeight);


                //Scene
                scene = new THREE.Scene();

                //camera
                camera = new THREE.PerspectiveCamera(50, windowWidth / windowHeight, 0.1, 10000);
                camera.position.set(-100, 0, 600);
                camera.lookAt(centerVector);
                scene.add(camera);

                // add particle rotation
                particleRotation = new THREE.Object3D();
                scene.add(particleRotation);
                let geometryPR = new THREE.TetrahedronGeometry(2, 0),
                    materialPR = new THREE.MeshPhongMaterial({
                        // color: 0x404040,
                        flatShading: THREE.FlatShading
                    });

                let ambientLight = new THREE.AmbientLight(0x999999);
                scene.add(ambientLight);

                let lights = [];
                lights[0] = new THREE.DirectionalLight(0x404040, 1);
                lights[0].position.set(1, 0, 0);
                scene.add(lights[0]);

                for (let i = 0; i < 1000; i++) {
                    let mesh = new THREE.Mesh(geometryPR, materialPR);
                    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
                    mesh.position.multiplyScalar(90 + (Math.random() * 700));
                    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                    particleRotation.add(mesh);
                }

                //----
                document.addEventListener('mousemove', onDocumentMouseMove, false);
                document.addEventListener('touchstart', onDocumentTouchStart, false);
                document.addEventListener('touchmove', onDocumentTouchMove, false);

                document.addEventListener('mousedown', onDocumentMouseDown, false);
                document.addEventListener('mouseup', onDocumentMouseUp, false);



                // Fires when the window changes
                window.addEventListener('resize', onWindowResize, false);
            }





            function render() {
                requestAnimationFrame(render);

                let delta = clock.getDelta(),
                    thickness = 100;


                //Need to add judgment to avoid Cannot read property 'geometry' of undefined
                if (typeof particles != typeof undefined) {

                    for (let i = 0, j = particles.geometry.vertices.length; i < j; i++) {
                        let particle = particles.geometry.vertices[i];
                        particle.x += (particle.destination.x - particle.x) * particle.speed;
                        particle.y += (particle.destination.y - particle.y) * particle.speed;
                        particle.z += (particle.destination.z - particle.z) * particle.speed;
                    }


                    if (delta - previousTime > thickness) {
                        let index = Math.floor(Math.random() * particles.geometry.vertices.length);
                        let particle1 = particles.geometry.vertices[index];
                        let particle2 = particles.geometry.vertices[particles.geometry.vertices.length - index];

                        TweenMax.to(particle, Math.random() * 2 + 1, {
                            x: particle2.x,
                            y: particle2.y,
                            ease: Power2.easeInOut
                        });



                        TweenMax.to(particle2, Math.random() * 2 + 1, {
                            x: particle1.x,
                            y: particle1.y,
                            ease: Power2.easeInOut
                        });

                        previousTime = delta;
                    }


                    particles.geometry.verticesNeedUpdate = true;
                }


                if (!isMouseDown) {
                    camera.position.x += (0 - camera.position.x) * 0.06;
                    camera.position.y += (0 - camera.position.y) * 0.06;
                }


                camera.position.x += (mouseX - camera.position.x) * 0.09;
                camera.position.y += (-mouseY - camera.position.y) * 0.09;
                camera.lookAt(centerVector);


                //particle rotation
                particleRotation.rotation.x += 0.0000;
                particleRotation.rotation.y -= 0.0040;


                renderer.render(scene, camera);

            }



            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }


            function onDocumentMouseMove(event) {

                mouseX = event.clientX - windowHalfX;
                mouseY = event.clientY - windowHalfY;

                if (isMouseDown) {
                    camera.position.x += (event.clientX - lastMousePos.x) / 100;
                    camera.position.y -= (event.clientY - lastMousePos.y) / 100;
                    camera.lookAt(centerVector);
                    lastMousePos = {
                        x: event.clientX,
                        y: event.clientY
                    };
                }


            }


            function onDocumentTouchStart(event) {

                if (event.touches.length == 1) {

                    event.preventDefault();

                    mouseX = event.touches[0].pageX - windowHalfX;
                    mouseY = event.touches[0].pageY - windowHalfY;
                }
            }

            function onDocumentTouchMove(event) {

                if (event.touches.length == 1) {

                    event.preventDefault();

                    mouseX = event.touches[0].pageX - windowHalfX;
                    mouseY = event.touches[0].pageY - windowHalfY;

                }
            }


            function onDocumentMouseUp() {
                isMouseDown = false;
            }

            function onDocumentMouseDown(event) {
                isMouseDown = true;
                lastMousePos = {
                    x: event.clientX,
                    y: event.clientY
                };


            }

            return {
                init: init,
                render: render,
                getScene: function () {
                    return scene;
                },
                getCamera: function () {
                    return camera;
                }
            };


        }();

        MainStage.init();
        MainStage.render();



    });


})(jQuery);