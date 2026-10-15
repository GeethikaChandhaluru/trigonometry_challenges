const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;
    const world = {
        startX: 10,
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
    for (let x = startX; x <= startY; x++) {
        // for (j = 100; j <= 360; j++) {
        let y = calculateY(x, startY);
        r.DrawCircle(x, y, 2, r.BLUE);
        // console.log(x, y);
    }
}

function draw(world) {
    r.BeginDrawing();

    drawSinWave(world.startX, world.startY);

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
