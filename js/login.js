let usu;

function  fazPost(url,body)
{
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("GET", url, true)
    //request.setRequestHeader("Content-type","application/json")
    request.setRequestHeader('Accept','application/json')
    request.withCredentials = 'same-origin';
    request.send(JSON.stringify(body))

    request.onload = async function resposta()
    {
        usu = JSON.parse(request.responseText)
       console.log(usu)
       return usu
    }
    return usu
    
}
function Logar()
{
    event.preventDefault()
    let url = 'https://pilar-connectado.herokuapp.com/v1/users/me'

    let email = document.getElementById('login').value
    let senha = document.getElementById('senha').value
  
    senha = senha.toString()
    body = 
    {
        "email": email,
        "password": senha
    }
    fazPost(url,body) 
}

