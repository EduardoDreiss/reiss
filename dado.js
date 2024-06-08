function rollDice() {
  let sides = document.getElementById("dado").value;
  let resultado = Math.floor(Math.random() * sides) + 1;
  document.getElementById("resultado").innerHTML = `Dado sorteado: D${sides}<br>Numero sorteado: ${resultado}`;
}
