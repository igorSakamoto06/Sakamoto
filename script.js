let trator;
let graos = [];
let graosColetados = 0;
let jogoFinalizado = false;

function setup() {
  createCanvas(800, 600);
  trator = createVector(width / 2, height / 2);

  // Cria 10 grãos de soja em posições aleatórias
  for (let i = 0; i < 10; i++) {
    graos.push(createVector(random(50, width - 50), random(50, height - 50)));
  }
}

function draw() {
  background(100, 200, 100); // verde campo

  if (jogoFinalizado) {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text("Você ganhou uma viagem para a cidade!", width / 2, height / 2);
    return;
  }

  // Desenha trator
  fill(255, 0, 0);
  rect(trator.x, trator.y, 40, 40);

  // Desenha grãos de soja
  fill(255, 255, 0);
  for (let i = 0; i < graos.length; i++) {
    if (graos[i]) {
      ellipse(graos[i].x, graos[i].y, 20, 20);
    }
  }

  // Movimento do trator
  if (keyIsDown(LEFT_ARROW)) trator.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) trator.x += 5;
  if (keyIsDown(UP_ARROW)) trator.y -= 5;
  if (keyIsDown(DOWN_ARROW)) trator.y += 5;

  // Verifica colisão com grãos
  for (let i = 0; i < graos.length; i++) {
    if (graos[i] && dist(trator.x, trator.y, graos[i].x, graos[i].y) < 30) {
      graos[i] = null;
      graosColetados++;
    }
  }

  // Verifica se todos foram coletados
  if (graosColetados === graos.length) {
    jogoFinalizado = true;
  }
}
