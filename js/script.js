// selecionando elementos do DOM
const form = document.querySelector("#subscribe-form");
const emailInput = document.querySelector("#email-input");
const submitButton = document.querySelector("#submit-button");

// adicionando um ouvinte de eventos de clique no botão de envio
submitButton.addEventListener("click", (event) => {
  // evitando que o formulário seja enviado e a página seja recarregada
  event.preventDefault();

  // verificando se o campo de e-mail está vazio
  if (emailInput.value === "") {
    alert("Por favor, insira um endereço de e-mail válido!");
  } else {
    // exibindo uma mensagem de sucesso e limpando o campo de entrada
    alert(`Obrigado por se inscrever com o e-mail ${emailInput.value}!`);
    emailInput.value = "";
  }
});
