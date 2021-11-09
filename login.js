

function fazPost(url,body)
{
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
   // request.setRequestHeader("Content-type","application/json")
    request.setRequestHeader('Accept','application/json')
    request.withCredentials = 'same-origin';
    request.send(JSON.stringify(body))

    request.onload = function resposta()
    {
        console.log(this.responseText)
        alert("usuario Conectado")
        window.location.href('ListarUsuarios.html')
    }

    return request.responseText
}

function Logar()
{
    event.preventDefault()
    let url = 'https://pilar-connectado.herokuapp.com/users/me'

    let email = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    //console.log(email)
    console.log(senha)

    body = 
    {
        "email": email,
        "password": senha
    }
    fazPost(url,body)
}