const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;
    const world = {
        sides: 8,
        centerX: windowWidth / 2,
        centerY: windowHeight / 2,
        radius: 80,
    };
    r.InitWindow(windowWidth, windowHeight, "Polygon");
    r.SetTargetFPS(60);
    return world;
}

function drawSide(sides, centerX, centerY, radius) {
    for (
        let angle = 0;
        angle <= Math.PI * sides;
        angle += Math.PI / (sides / 2)
    ) {
        r.DrawLine(
            centerX + radius * Math.sin(angle),
            centerY + radius * Math.cos(angle),
            centerX + radius * Math.sin(angle + Math.PI / (sides / 2)),
            centerY + radius * Math.cos(angle + Math.PI / (sides / 2)),
            r.WHITE,
        );
    }
}

function draw(world) {
    const { sides, centerX, centerY, radius } = world;
    r.BeginDrawing();

    drawSide(sides, centerX, centerY, radius);

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
