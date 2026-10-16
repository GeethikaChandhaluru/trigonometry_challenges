const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 600;
    const windowHeight = 400;
    const world = {
        x: 50,
        y: 200,
        radius: 2,
    };
    r.InitWindow(windowWidth, windowHeight, "Waves");
    r.SetTargetFPS(60);
    return world;
}

function calculateY(angle, y, ratio) {
    return y - ratio((angle * Math.PI) / 180) * 100;
}

function drawWave(world, ratio, color) {
    const { x, y, radius } = world;

    for (let angle = 0; angle <= r.GetScreenWidth(); angle++) {
        r.DrawCircle(angle + x, calculateY(angle, y, ratio), radius, color);
    }
}

function drawLines(x, y) {
    r.DrawLine(x, 0, x, r.GetScreenHeight(), r.BLUE);
    r.DrawLine(0, y, r.GetScreenWidth(), y, r.BLUE);
}

function draw(world) {
    r.BeginDrawing();

    drawLines(world.x, world.y);

    r.DrawText(`RED : SinWave   ORANGE : CosWave`, 100, 10, 15, r.WHITE);

    drawWave(world, Math.sin, r.RED);
    drawWave(world, Math.cos, r.ORANGE);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        // no update!
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}
main();
