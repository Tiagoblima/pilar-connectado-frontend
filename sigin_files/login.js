



/*function  fazPost(url,body)
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
    }
    return usu
}


const sendHttpRequest = (method, url, data) =>{
    console.log(data)
    return fetch(url, {
        method:method,
        credentials: 'same-origin',
        redirect: 'follow',
        agent: null,
        headers: {
            "Content-Type": "text/plain",
            'Authorization': 'Basic ' + btoa(`${body["email"]}:body["senha"]`),
        },
        timeout: 5000
    }).then(response => {
        return response.json()
    });
}

*/


user = {"info":{}}

// Example POST method implementation:
async function credentialsRequest(url = '', data = {}) {
    
  
    let username = data["email"];
    let password = data["password"];

    let headers = new Headers();
    
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

    await fetch(url, {method:'GET',
            headers: headers,
            //credentials: 'user:passwd'
        })
    .then(response => response.json())
    .then(json => user["info"] = json);
  }
  
  

  

function Logar()
{
    event.preventDefault()
    let url = 'https://pilar-connectado.herokuapp.com/v1/users/me'

    let email = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    
    body = 
    {
        "email": email,
        "password": senha
    }
    credentialsRequest(url, body)

    console.log(user)
}