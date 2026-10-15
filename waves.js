const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;
    const world = {
        x: 10,
        y: 200,
        radius: 5,
    };
    r.InitWindow(windowWidth, windowHeight, "Waves");
    r.SetTargetFPS(60);
    return world;
}

function calculateY(i) {
    return Math.sin(Math.PI / i);
}

function drawSinWave(world) {
    for (i = 10; i <= 100; i++) {
        // for (j = 100; j <= 360; j++) {
        r.DrawCircle(i, calculateY(i) * 100 + 200, 2, r.BLUE);
        // }
    }

    // r.DrawCircle(10, 200, 2, r.BLUE);
    // r.DrawCircle(11, Math.sin(Math.PI / 11) * 100 + 200, 2, r.BLUE);
    // r.DrawCircle(12, Math.sin(Math.PI / 12) * 100 + 200, 2, r.BLUE);
    // r.DrawCircle(13, Math.sin(Math.PI / 13) * 100 + 200, 2, r.BLUE);
    // r.DrawCircle(14, Math.sin(Math.PI / 14) * 100 + 200, 2, r.BLUE);
    // r.DrawCircle(15, Math.sin(Math.PI / 15) * 100 + 200, 2, r.BLUE);
    // r.DrawCircle(16, Math.sin(Math.PI / 16) * 100 + 200, 2, r.BLUE);
}

function draw(world) {
    r.BeginDrawing();

    drawSinWave(world);

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
