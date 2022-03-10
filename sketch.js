var orientAngle = 0;
var p0, p1;
var angle;
var dx, dy, distance, unit;
// var count = 0;
var slider;
function setup() {
  createCanvas(700, 700);
  slider = createSlider(0, 5, 3, 1);
}

function draw() {
  console.log(slider.value());
  (p0 = {
    x: 0,
    y: -321,
  }),
    (p1 = {
      x: 278,
      y: 160,
    }),
    (p2 = {
      x: -278,
      y: 160,
    });
  background(220);
  translate(width / 2, height / 2);
  koch(p0, p1, slider.value());
  koch(p1, p2, slider.value());
  koch(p2, p0, slider.value());

  //   noLoop();
}

function koch(P0, P1, limit) {
    noFill()
  // fill(random(255),random(255),random(255))
  dx = P1.x - P0.x;
  dy = P1.y - P0.y;
  distance = sqrt(dx * dx + dy * dy);
  unit = distance / 3;
  angle = atan2(dy, dx);
  var pA = {
      x: P0.x + dx / 3,
      y: P0.y + dy / 3,
    },
    pC = {
      x: P1.x - dx / 3,
      y: P1.y - dy / 3,
    },
    pB = {
      x: pA.x + cos(angle - PI / 3) * unit,
      y: pA.y + sin(angle - PI / 3) * unit,
    };
  if (limit > 0) {
    koch(P0, pA, limit - 1);
    koch(pA, pB, limit - 1);
    koch(pB, pC, limit - 1);
    koch(pC, P1, limit - 1);
  } else {
    beginShape();
    vertex(P0.x, P0.y);
    vertex(pA.x, pA.y);
    vertex(pB.x, pB.y);
    vertex(pC.x, pC.y);
    vertex(P1.x, P1.y);
    endShape();
  }
}
