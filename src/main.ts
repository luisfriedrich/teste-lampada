import "./style.css"

// Seleciono a imagem da lâmpada e o botão pelo ID
const lampada = document.querySelector<HTMLImageElement>("#lampada")
const botaolampada = document.querySelector("#botao-lampada")

// Utilizo o "enum" para definir os estados da lâmpada
enum EstadoLampada {
  Desligada,
  Ligada
}

// Inicializa o estado da lâmpada como desligada
let estado: EstadoLampada = EstadoLampada.Desligada

// Variável que indica se a lâmpada está quebrada
let quebrada = false

// Número que representa a condição para quebrar a lâmpada
const quebrarLampada = 10

// Função que retorna um número aleatório entre um mínimo e um máximo
function getNumeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica se os elementos da lâmpada e do botão foram encontrados
if (lampada && botaolampada) {

  // Adiciona um evento de clique no botão
  botaolampada.addEventListener('click', () => {

    // Se a lâmpada estiver quebrada, não faz nada
    if (quebrada) return

    // Gera um número aleatório entre 1 e 10
    const numeroAleatorio = getNumeroAleatorio(1, 10)
    console.log(numeroAleatorio)

    // Se o número aleatório for igual ao número que quebra a lâmpada a imagem é alterada.
    if (numeroAleatorio === quebrarLampada) {
      lampada.src = "/lampada-quebrada.png"
      quebrada = true
      return alert("VISH, vai ter que comprar outra lâmpada!!")
    }

    // Alterna entre a lâmpada ligada e desligada usando o enum
    if (estado === EstadoLampada.Desligada) {
      lampada.src = "/lampada-ligada.png"
      estado = EstadoLampada.Ligada;
    } else {
      lampada.src = "/lampada-desligada.png"
      estado = EstadoLampada.Desligada;
    }
  })
}