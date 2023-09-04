function login(){
    var email = document.getElementById('uname').value
    var senha = document.getElementById('upassword').value
    const emailcorreto = "soumaiseu@gmail.com"
    const senhacorreta = "soumaiseu"
    if(email == emailcorreto && senha == senhacorreta){
        alert("Login concluido com sucesso!")
    }
    else{
        alert("Login não concluido com sucesso!")
    }
 }
 
 function somar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 + n2)
 }

 function subtrair(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 - n2)
 }

 function multiplicar(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 * n2)
 }

 function dividir(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 / n2)
 }

 function potencia(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    var n2 = parseFloat(prompt("Digite o segundo número: "))
    alert(n1 ** n2)
 }

 function raiz(){
    var n1 = parseFloat(prompt("Digite o primeiro número: "))
    alert(Math.sqrt(n1))
 }
 
 function exibir_list(){
   const nome = document.getElementById("nome").value
   const lista = document.getElementById("ul");
   const novoelemento = document.createElement("li");
   novoelemento.innerHTML = nome;
   lista.appendChild(novoelemento);

}

function array_exemplo(){
  let n = [3, 4, 5, 6, 2, 1]
  console.log("Esse console log mostra o array completo")
  console.log(n)
  console.log("Esse console log mostra o valor no índice 0 do array")
  console.log(n)
  console.log("Esse console log mostra o valor no índice 6 do array: " + n[6] + " Legal!")
  n[6] = 7
  console.log("Esse console log mostra o valor no índice 6 do array" + n[6])
  console.log("Esse console log mostra o array completo")
  console.log(n)
  n.push(50)
  n.push(32)
  n.push(33)
  console.log("Esse console log mostra o array completo")
  console.log(n)
  n.pop()
}

function objeto(){
  //Produtos
  let carrinho_de_compras = []
  let nome = "Arroz"
  let preco = 9.99
  let marca = "Tio João"

  let produto = {
     nome_prod: "Arroz",
     preco_prod: 9.99,
     marca_prod: "Tio João",
  }

  carrinho_de_compras.push(produto)

  let produto2 = {
     nome_prod: "Feijão",
     preco_prod: 7.35,
     marca_prod: "Namorado",
  }

  carrinho_de_compras.push(produto)
  carrinho_de_compras.push(carrinho_de_compras[0].nome_prod)
}