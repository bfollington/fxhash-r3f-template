import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Sky } from "@react-three/drei";
import { fxhash, fxrand, registerFeatures } from "./fxhash";
import * as THREE from "three";

function App() {
  console.log(fxhash());
  console.log(fxrand());

  // WARNING: do not include meaningless or testing features in your release build
  registerFeatures({ hello: "world" });

  return (
    <div className="App">
      <Canvas camera={{ position: [4, 4, 4] }}>
        <Sky azimuth={1} inclination={0.3} distance={1000} />
        <pointLight
          position={[-3, 4, 3]}
          color={new THREE.Color(fxrand(), fxrand(), fxrand())}
          intensity={25 * fxrand()}
        />
        <Suspense fallback={null}>
          <Box scale={fxrand() + 0.5}>
            <meshStandardMaterial
              color={new THREE.Color(fxrand(), fxrand(), fxrand())}
            />
          </Box>
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 10}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

export default App;
