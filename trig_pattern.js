const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 600;
    const windowHeight = 400;
    const world = {
        x: windowWidth / 2,
        y: windowHeight / 2,
        radius: 3,
        addRadius: 3,
    };
    r.InitWindow(windowWidth, windowHeight, "Pattern");
    r.SetTargetFPS(60);
    return world;
}

function calculateSinY(angle, y) {
    return y - Math.sin((angle * Math.PI) / 180) * 50;
}

function drawSpiral(world) {
    const { x, y, radius, addRadius } = world;

    r.DrawCircle(x, y, radius, r.ORANGE);
    r.DrawCircle(x + 1, calculateSinY(x + 1, addRadius), radius, r.ORANGE);
    r.DrawCircle(x + 2, y, radius, r.ORANGE);
}

function draw(world) {
    r.BeginDrawing();

    drawSpiral(world);

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
