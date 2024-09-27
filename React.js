class Meu Componente extends React.Component {
  render() {
    return <h1>Olá Brasil!</h1>;
  }
}

let botao = document.getElementById("meuBotao");
botao.addEventListener("click", function() {
  alert("Bem vindos!");
});
