const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;
    const world = {
        sides: 50,
        centerX: windowWidth / 2,
        centerY: windowHeight / 2,
        hr: 200,
        vr: 100,
    };
    r.InitWindow(windowWidth, windowHeight, "Ellipse");
    r.SetTargetFPS(60);
    return world;
}

function drawSide(sides, centerX, centerY, hr, vr) {
    for (
        let angle = 0;
        angle <= Math.PI * sides;
        angle += Math.PI / (sides / 2)
    ) {
        r.DrawLine(
            centerX + hr * Math.sin(angle),
            centerY + vr * Math.cos(angle),
            centerX + hr * Math.sin(angle + Math.PI / (sides / 2)),
            centerY + vr * Math.cos(angle + Math.PI / (sides / 2)),
            r.WHITE,
        );
    }
}

function draw(world) {
    const { sides, centerX, centerY, hr, vr } = world;
    r.BeginDrawing();

    drawSide(sides, centerX, centerY, hr, vr);

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
