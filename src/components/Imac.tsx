import { useState, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import Spinner from "./Spinner";

type IOptions = {
  receiveShadow: boolean;
  castShadow: boolean;
};

const loadGLTFModel = (
  scene: THREE.Scene,
  glbPath: string,
  options: IOptions
) => {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "Imac";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        // tyep https://stackoverflow.com/questions/53230986/three-js-object3d-missing-ismesh-material-and-geometry-properties
        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        console.log(error);
        reject(error);
      }
    );
  });
};

const Imac = ({ screenShow = null }: { screenShow: null | number }) => {
  const refContainer = useRef<HTMLDivElement | null>(null);
  const refScene = useRef<THREE.Scene | null>(null);
  const refControl = useRef<OrbitControls | null>(null);
  const refTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const { current: container } = refContainer;

    const imgArray = [
      "assets/imac/textures/image0.jpg",
      "assets/imac/textures/image1.jpg",
      "assets/imac/textures/image2.jpg",
      "assets/imac/textures/image3.jpg",
      "assets/imac/textures/image4.jpg",
      "assets/imac/textures/image5.jpg",
    ];
    const changeScreen = () => {
      if (refTimer.current) {
        clearInterval(refTimer.current);
      }
      if (screenShow === null) {
        refTimer.current = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * imgArray.length);
          const textureLoader = new THREE.TextureLoader();
          const texture = textureLoader.load(imgArray[randomIndex]);
          texture.flipY = true;
          texture.encoding = THREE.sRGBEncoding;
          if (refScene.current) {
            const meshObj = refScene.current.children[3].children[0].children[0]
              .children[2].children[7].children[1] as THREE.Mesh;
            (meshObj.material as THREE.MeshStandardMaterial).emissiveMap =
              texture;
          }
        }, 3000);
      } else {
        if (refControl.current) {
          refControl.current.autoRotate = false;
        }
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(imgArray[screenShow]);
        texture.flipY = true;
        texture.encoding = THREE.sRGBEncoding;
        if (refScene.current) {
          const meshObj = refScene.current.children[3].children[0].children[0]
            .children[2].children[7].children[1] as THREE.Mesh;
          (meshObj.material as THREE.MeshStandardMaterial).emissiveMap =
            texture;
        }
      }
    };

    if (container && !renderer && !refScene.current) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, scW / scH, 0.1, 10);
      const target = new THREE.Vector3(0, 0, 0);

      camera.position.set(0.3, 0.2, 0.75);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xffffff, 10);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xefefff, 3.5);
      dirLight.position.set(10, 10, 10);
      scene.add(dirLight);

      const dirLight2 = new THREE.DirectionalLight(0xefefff, 0.5);
      dirLight2.position.set(0, 0, -10);
      scene.add(dirLight2);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      refScene.current = scene;
      refControl.current = controls;

      loadGLTFModel(scene, "assets/imac/scene.gltf", {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
        changeScreen();
      });

      let req: null | ReturnType<typeof requestAnimationFrame> = null;
      const animate = () => {
        req = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      return () => {
        if (req) cancelAnimationFrame(req);
        renderer.dispose();
        if (refTimer.current) clearInterval(refTimer.current);
      };
    } else {
      changeScreen();
    }
  }, [renderer, screenShow]);

  return (
    <div
      className="h-[300px] w-full md:h-[540px] md:w-[540px] xl:w-[700px] relative"
      ref={refContainer}
    >
      {loading && (
        <span style={{ top: "50%", left: "50%", position: "relative" }}>
          <Spinner />
        </span>
      )}
    </div>
  );
};

export default Imac;
