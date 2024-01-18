export function drawCircle(ctx, x, y, RADIUS) {
    ctx.beginPath();
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();
}

export function drawConnections(ctx, circle, circles) {
    circle.connections.forEach(index => {
        const connectedCircle = circles[index];

        ctx.beginPath();
        ctx.moveTo(circle.x, circle.y);
        ctx.lineTo(connectedCircle.x, connectedCircle.y);
        ctx.stroke();
    });
}

export function drawCircles(ctx, circles, RADIUS) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    circles.forEach(c => {
        drawCircle(ctx, c.x, c.y, RADIUS);
        drawConnections(ctx, c, circles);
    });
}
