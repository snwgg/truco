let pontosTime1 = 0;
let pontosTime2 = 0;
let nomeTime1 = 'Time 1';
let nomeTime2 = 'Time 2';
const historico = [];

document.getElementById('time1').addEventListener('input', (e) => {
  nomeTime1 = e.target.value || 'Time 1';
  document.getElementById('nomeTime1').textContent = nomeTime1;
  toggleNomeVisivel();
});

document.getElementById('time2').addEventListener('input', (e) => {
  nomeTime2 = e.target.value || 'Time 2';
  document.getElementById('nomeTime2').textContent = nomeTime2;
  toggleNomeVisivel();
});

function toggleNomeVisivel() {
  const nomeConfig = document.querySelector('.config');
  if (nomeTime1 && nomeTime2) {
    nomeConfig.style.display = 'none'; // Oculta a configuração de nomes quando os dois estiverem preenchidos
  } else {
    nomeConfig.style.display = 'flex'; // Exibe a configuração de nomes se não estiverem preenchidos
  }
}

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

function resetarJogo() {
  pontosTime1 = 0;
  pontosTime2 = 0;
  document.getElementById('pontosTime1').textContent = pontosTime1;
  document.getElementById('pontosTime2').textContent = pontosTime2;

  // Atualiza o histórico
  atualizarHistorico();

  setTimeout(() => {
    document.getElementById('mensagem').textContent = '';
  }, 2000);
}

function atualizarHistorico() {
  const historicoList = document.getElementById('historicoList');
  historicoList.innerHTML = '';
  historico.forEach((registro) => {
    const li = document.createElement('li');
    li.textContent = registro;
    historicoList.appendChild(li);
  });
}