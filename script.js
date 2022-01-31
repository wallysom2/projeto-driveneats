let pratoEsc = 0;
let valorPratoEsc = 0;
let bebidaEsc = 0;
let valorBebidaEsc = 0;
let doceEsc = 0;
let valorDoceEsc = 0;
let valorTotal = 0;

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
function fazerPedidoClique (){
    const fazerPedido = document.querySelector(".conf-pedido")
    fazerPedido.classList.remove ("esconder")

    const pratoConf = document.querySelector(".prato-conf")
    pratoConf.innerHTML = (`${pratoEsc}`)
    const bebidaConf = document.querySelector(".bebida-conf")
    bebidaConf.innerHTML = (`${bebidaEsc}`)
    const doceConf = document.querySelector(".doce-conf")
    doceConf.innerHTML = (`${doceEsc}`)

    const precoPratoConf = document.querySelector(".preco-prato-conf")
    precoPratoConf.innerHTML = (`${valorPratoEsc}`)
    const precoBebidaConf = document.querySelector(".preco-bebida-conf")
    precoBebidaConf.innerHTML = (`${valorBebidaEsc}`)
    const precoDoceConf = document.querySelector(".preco-doce-conf")
    precoDoceConf.innerHTML = (`${valorDoceEsc}`)  
    const precoTotalConf = document.querySelector(".preco-total-conf")
    precoTotalConf.innerHTML = (`R$ ${valorDoceEsc+valorBebidaEsc+valorPratoEsc}`) 

}
function cancelarConf (){
    const cancelarConfi = document.querySelector (".conf-pedido")
    cancelarConfi.classList.add ("esconder")
}
function whatsapp(){
    let mensagem;
    mensagem = `Olá, gostaria de fazer o pedido:\n
    - Prato: ${pratoEsc}\n
    - Bebida: ${bebidaEsc}\n
    - Sobremesa: ${doceEsc}\n
    Total: R$ ${valorDoceEsc+valorBebidaEsc+valorPratoEsc}\n`

    window.open("https://wa.me/5584981353185?text=" + mensagem)
}

