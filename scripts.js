// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Toda vez que qualquer conteúdo entrar nesse input, esse evento será acionado
amount.oninput = () => {
  console.log("Novo conteúdo")
}