function fazPost(url,body)
{
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))

    request.onload =  function resposta()
    {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastrarUsuario()
{
    event.preventDefault()
    let url = ' https://pilar-connectado.herokuapp.com/v1/users'

    let nome = document.getElementById('nome').value.toString()
    let email = document.getElementById('email').value.toString()
    let senha = document.getElementById('senha').value
    let endereco = document.getElementById('endereco').value.toString()
    let cpf = document.getElementById('cpf').value.toString()

    body = {
        "email": email,
        "name": nome,
        "password": senha,
        "address": endereco,
        "cpf": cpf

    }
    fazPost(url,body)
}