// Função para adicionar pontos
function adicionarPonto(time) {
  if (time === 1) {
    pontosTime1++;
    document.getElementById('pontosTime1').textContent = pontosTime1;
  } else {
    pontosTime2++;
    document.getElementById('pontosTime2').textContent = pontosTime2;
  }
  verificarVitoria();
}

// Função para remover pontos
function removerPonto(time) {
  if (time === 1 && pontosTime1 > 0) {
    pontosTime1--; // Só remove se os pontos forem maiores que zero
    document.getElementById('pontosTime1').textContent = pontosTime1;
  } else if (time === 2 && pontosTime2 > 0) {
    pontosTime2--; // Só remove se os pontos forem maiores que zero
    document.getElementById('pontosTime2').textContent = pontosTime2;
  }
  verificarVitoria();
}

// Função para adicionar pontos por TRUCO
function adicionarTruco(time) {
  if (time === 1) {
    pontosTime1 += 3;
    document.getElementById('pontosTime1').textContent = pontosTime1;
  } else {
    pontosTime2 += 3;
    document.getElementById('pontosTime2').textContent = pontosTime2;
  }
  verificarVitoria();
}

// Função para verificar vitória
function verificarVitoria() {
  if (pontosTime1 >= 12) {
    document.getElementById('mensagem').textContent = 'PATOS!';
    historico.push(`${nomeTime1} venceu com ${pontosTime1} pontos`);
    resetarJogo();
  } else if (pontosTime2 >= 12) {
    document.getElementById('mensagem').textContent = 'PATOS!';
    historico.push(`${nomeTime2} venceu com ${pontosTime2} pontos`);
    resetarJogo();
  }
}
