import { World } from "wasm-game-of-life";

const canvas = document.getElementById("game-of-life-canvas");
const world = World.new();

const renderLoop = () => {
    canvas.textContent = world.render();
    world.tick();

    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
