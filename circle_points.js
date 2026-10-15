const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;
    const world = {
        points: 12,
        centerX: windowWidth / 2,
        centerY: windowHeight / 2,
        radius: 100,
    };
    r.InitWindow(windowWidth, windowHeight, "Circle Points");
    r.SetTargetFPS(60);
    return world;
}

function drawPoint(points, centerX, centerY, radius) {
    for (
        let angle = 0;
        angle <= Math.PI * points;
        angle += Math.PI / (points / 2)
    ) {
        r.DrawCircle(
            centerX + radius * Math.sin(angle),
            centerY + radius * Math.cos(angle),
            radius / (points * 2),
            r.WHITE,
        );
    }
}

function draw(world) {
    const { points, centerX, centerY, radius } = world;
    r.BeginDrawing();

    r.DrawCircleLines(centerX, centerY, radius, r.BLUE);
    drawPoint(points, centerX, centerY, radius);

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
