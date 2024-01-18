export class Circle {
    constructor(x, y, move_x, move_y) {
        this.x = x;
        this.y = y;
        this.move_x = move_x;
        this.move_y = move_y;
        this.connections = [];
    }

    draw(ctx, RADIUS) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, RADIUS, 0, 2 * Math.PI);
        ctx.stroke();
    }

    updatePosition(canvas, RADIUS, SPEED) {
        this.x += this.move_x * SPEED;
        this.y += this.move_y * SPEED;

        if (this.x - RADIUS <= 0 || this.x + RADIUS >= canvas.width) {
            this.move_x = this.move_x === 1 ? -1 : 1;
        }

        if (this.y - RADIUS <= 0 || this.y + RADIUS >= canvas.height) {
            this.move_y = this.move_y === 1 ? -1 : 1;
        }
    }

    calculateConnections(circles, MIN_DISTANCE) {
        this.connections = [];
        for (let i = 0; i < circles.length; i++) {
            if (this !== circles[i]) {
                const otherCircle = circles[i];
                const distance = this.distanceTo(otherCircle);
                if (distance < MIN_DISTANCE) {
                    this.connections.push(i);
                }
            }
        }
    }

    distanceTo(otherCircle) {
        const a = this.x - otherCircle.x;
        const b = this.y - otherCircle.y;
        return Math.sqrt(a * a + b * b);
    }
}
