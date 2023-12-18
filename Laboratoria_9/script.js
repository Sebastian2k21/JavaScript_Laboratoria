const RADIUS = 10
const CIRCLE_COUNT = 30
const SPEED = 3
const MIN_DISTANCE = 100

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

function distance(c1, c2) {
    var a = c1.x - c2.x;
    var b = c1.y - c2.y;
    return Math.sqrt( a*a + b*b );
}


function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, RADIUS, 0, 2 * Math.PI)
    ctx.stroke()
}

function drawConnections(circle, circles) {
    circle.connetions.forEach(index => {
        const c2 = circles[index]

        ctx.beginPath();
        ctx.moveTo(circle.x, circle.y);
        ctx.lineTo(c2.x, c2.y);
        ctx.stroke();
    })
}

function drawCircles(circles) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(c => {
        drawCircle(c.x, c.y)
        drawConnections(c, circles)
    })
}

function moveCircles(circles) {
    circles.forEach(c => {
        c.x += c.move_x * SPEED
        c.y += c.move_y * SPEED
        if(c.x - RADIUS <= 0 || c.x + RADIUS >= canvas.width) {
            c.move_x = c.move_x == 1 ? -1 : 1
        }
        if(c.y - RADIUS <= 0 || c.y + RADIUS >= canvas.height) {
            c.move_y = c.move_y == 1 ? -1 : 1
        }
    })

    for(let i = 0; i < circles.length; i++) {
        const c1 = circles[i]
        c1.connetions = []
        for(let j = 0; j < circles.length; j++) {
            if(i != j) {
                const c2 = circles[j]
                const d = distance(c1, c2)
                if(d < MIN_DISTANCE) {
                    c1.connetions.push(j)
                }
            }
        }
    }
}

function initCircles() {
    const citcles = []
    for(let i = 0; i < CIRCLE_COUNT; i++) {
        const x = RADIUS + Math.random() * (canvas.width-2*RADIUS)
        const y = RADIUS + Math.random() * (canvas.height-2*RADIUS)
        const move_x = Math.random() > 0.5 ? 1 : -1
        const move_y = Math.random() > 0.5 ? 1 : -1
        citcles.push({x: x, y: y, move_x: move_x, move_y: move_y, connetions: []})
    }
    return citcles
}

function start() {
    const circles = initCircles()
    setInterval(() => drawCircles(circles), 50)
    setInterval(() => moveCircles(circles), 50)
}
