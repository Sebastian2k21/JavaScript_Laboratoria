export function moveCircles(circles, canvas, RADIUS, SPEED, MIN_DISTANCE) {
    circles.forEach(c => {
        c.updatePosition(canvas, RADIUS, SPEED);
    });

    for (let i = 0; i < circles.length; i++) {
        const c1 = circles[i];
        c1.connections = [];
        for (let j = 0; j < circles.length; j++) {
            if (i !== j) {
                const c2 = circles[j];
                const d = c1.distanceTo(c2);
                if (d < MIN_DISTANCE) {
                    c1.connections.push(j);
                }
            }
        }
    }
}
