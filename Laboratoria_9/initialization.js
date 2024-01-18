import { Circle } from './circle.js';

export function initCircles(count, canvas, RADIUS) {
    const circles = [];
    for (let i = 0; i < count; i++) {
        const x = RADIUS + Math.random() * (canvas.width - 2 * RADIUS);
        const y = RADIUS + Math.random() * (canvas.height - 2 * RADIUS);
        const move_x = Math.random() > 0.5 ? 1 : -1;
        const move_y = Math.random() > 0.5 ? 1 : -1;
        circles.push(new Circle(x, y, move_x, move_y));
    }
    return circles;
}
