document.getElementById('contato-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('contato').value;

  const tabela = document.getElementById('contato-tabela').getElementsByTagName('tbody')[0];
  const novaLinha = tabela.insertRow();
  const celula1 = novaLinha.insertCell(0);
  const celula2 = novaLinha.insertCell(1);

  celula1.textContent = nome;
  celula2.textContent = telefone;

  document.getElementById('nome').value = ''
  document.getElementById('contato').value = ''
});