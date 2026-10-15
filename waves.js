const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 600;
    const windowHeight = 400;
    const world = {
        startX: 50,
        startY: 200,
        radius: 5,
    };
    r.InitWindow(windowWidth, windowHeight, "Waves");
    r.SetTargetFPS(60);
    return world;
}

function calculateY(i, startY) {
    return Math.sin(Math.PI / i) * 100 + startY;
}

function drawSinWave(startX, startY) {
    for (let x = startX; x <= r.GetScreenWidth(); x++) {
        const y = Math.sin((x * Math.PI) / 180) * 100 + startY;
        r.DrawCircle(x, y, 2, r.BLUE);
    }
}

function draw(world) {
    r.BeginDrawing();

    drawSinWave(world.startX, world.startY);

    r.EndDrawing();
}

function loop(world) {
    // no update!
    // draw(world);
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
    r.CloseWindow();
}
main();
