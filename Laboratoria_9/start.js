import { initCircles } from './initialization.js';
import { drawCircles } from './drawing.js';
import { moveCircles } from './movement.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const RADIUS = 10;
const CIRCLE_COUNT = 30;
const SPEED = 3;
const MIN_DISTANCE = 100;

const circles = initCircles(CIRCLE_COUNT, canvas, RADIUS);

setInterval(() => drawCircles(ctx, circles, RADIUS), 50);
setInterval(() => moveCircles(circles, canvas, RADIUS, SPEED, MIN_DISTANCE), 50);
