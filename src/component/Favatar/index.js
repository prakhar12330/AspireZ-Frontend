import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "../Experience";
import { UI } from "../UI";

function Favatar() {
    return (
        <>
            <Loader />
            <Leva hidden />
            <UI />
            <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
                <Experience />
            </Canvas>
        </>
    );
}

export default Favatar;