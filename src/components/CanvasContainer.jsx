import {Canvas} from "@react-three/fiber";
import Model from "./Model.jsx";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

export default function CanvasContainer({count = 23, depth = 65, z}){

    return(
        <>
        <div className="title">
            <h1>Lord of the Rings</h1>
            <h2>Welcome to the Middle Earth</h2>
        </div>
        <div className="quote">
            <p><q>All we have to decide is what to do with the time that is given us.</q><br/><strong>- Gandalf -</strong></p>
        </div>
        <Canvas className="canvas" camera={{near: 0.01, far:100, fov:24}} dpr={1}>
            <Suspense fallback={null}>
                <color attach ={"background"} args={["#afb77a"]}/>
                <ambientLight intensity={0.5}/>
                {Array.from({length:count}, (_, i) =>(
                    <Model key={i} z={-i / count * depth}/>
                ))}
                <Environment preset={"forest"} blur={1}/> 
                {/* change lumiere ext. = reflet sur l'anneau*/}
                {/* <EffectComposer>
                    <DepthOfField target={[0, 0, depth /2]} focalLenght={0.4} bokehScale={12} height={800}/>
                </EffectComposer> */}
            </Suspense>
        </Canvas>
        </>
    )
}

