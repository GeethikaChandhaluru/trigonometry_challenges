const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 600;
    const windowHeight = 400;
    const world = {
        x: 50,
        y: 200,
        radius: 3,
    };
    r.InitWindow(windowWidth, windowHeight, "Waves");
    r.SetTargetFPS(60);
    return world;
}

function calculateSinY(angle, y) {
    return y - Math.sin((angle * Math.PI) / 180) * 50;
}

function calculateCosY(angle, y) {
    return y - Math.cos((angle * Math.PI) / 180) * 50;
}

function drawSinWave(world) {
    const { x, y, radius } = world;

    for (let angle = 0; angle <= r.GetScreenWidth(); angle++) {
        r.DrawCircle(angle + x, calculateSinY(angle, y), radius, r.RED);
    }
}

function drawCosWave(world) {
    const { x, y, radius } = world;

    for (let angle = 0; angle <= r.GetScreenWidth(); angle++) {
        r.DrawCircle(angle + x, calculateCosY(angle, y), radius, r.ORANGE);
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

    drawSinWave(world);
    drawCosWave(world);

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
