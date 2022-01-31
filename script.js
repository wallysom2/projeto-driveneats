let pratoEsc = 0;
let valorPratoEsc;
let bebidaEsc = 0;
let valorBebidaEsc;
let doceEsc = 0;
let valorDoceEsc;



function selecionarPrato (prato, nomePrato , valorPrato){
    desmarcarAPrato ()
    const pratoSelecionado = document.querySelector ("." + prato)
    pratoSelecionado.classList.add ("alimento-selecionado")

    function desmarcarAPrato (){
        const desmaAlimento = document.querySelector(".alimento-selecionado")
        if (desmaAlimento !== null){
        desmaAlimento.classList.remove("alimento-selecionado")
        }
    }
    pratoEsc = nomePrato
    valorPratoEsc = valorPrato
    finalizarPedido ()
}

function selecionarBebida (bebida, nomeBebida , valorBebida){
    desmarcarBebida ()
    const bebidaSelecionado = document.querySelector ("." + bebida)
    bebidaSelecionado.classList.add ("bebida-selecionada")

    function desmarcarBebida (){
        const desmaBebida = document.querySelector(".bebida-selecionada")
        if (desmaBebida !== null){
            desmaBebida.classList.remove("bebida-selecionada")
        }
    }
    bebidaEsc = nomeBebida
    valorBebidaEsc = valorBebida
    finalizarPedido ()
}
function selecionarDoce (doce, nomeDoce, valorDoce){
    desmarcarDoce()
    const doceSelecionado = document.querySelector ("." + doce)
    doceSelecionado.classList.add ("doce-selecionado")

    function desmarcarDoce (){
        const desmarcarDoce = document.querySelector(".doce-selecionado")
        if (desmarcarDoce !== null){
            desmarcarDoce.classList.remove("doce-selecionado")
        }
    }
    doceEsc = nomeDoce
    valorDoceEsc = valorDoce
    finalizarPedido ()
}
function finalizarPedido () {
    const termPedido = document.querySelector (".finalizar-pedido")
    if (pratoEsc!== 0 && bebidaEsc !== 0 && doceEsc !== 0){
        termPedido.classList.add ("botao-selecionado")
        termPedido.innerText = "Finalizar Pedido"
        termPedido.classList.add ("text-final")
    }
}