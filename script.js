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
 
 function nome(){
    const nome = document.getElementById("nome").value
    alert(nome)
    document.getElementById("exibirnome").innerHTML = nome
 }