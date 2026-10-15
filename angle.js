const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const windowWidth = 500;
    const windowHeight = 500;

    const world = {
        pointA: { x: 100, y: 300 },
        pointB: { x: 350, y: 150 },
    };
    world.pointC = { x: world.pointB.x, y: world.pointA.y };

    r.InitWindow(windowWidth, windowHeight, "Angle");
    r.SetTargetFPS(60);
    return world;
}

function calculateDistance(world) {
    const { pointA, pointB, pointC } = world;

    const hypotenuse = r.Vector2Distance(pointA, pointB);
    const opposite = r.Vector2Distance(pointB, pointC);

    return { hypotenuse, opposite };
}

function drawSide(world) {
    const { pointA, pointB, pointC } = world;

    r.DrawLineV(pointA, pointB, r.WHITE);
    r.DrawLineV(pointA, pointC, r.WHITE);
    r.DrawLineV(pointB, pointC, r.WHITE);
}

function draw(world) {
    r.BeginDrawing();

    const { opposite, hypotenuse } = calculateDistance(world);
    const angle = opposite / hypotenuse;

    drawSide(world);

    r.DrawText(
        `Angle : ${Math.floor((Math.asin(angle) * 180) / Math.PI)}`,
        20,
        20,
        20,
        r.WHITE,
    );

    r.EndDrawing();
}
function loop(world) {
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
