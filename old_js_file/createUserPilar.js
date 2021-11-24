
function fazGet(url)
{
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(usu)
{
   let  data = fazGet('https://pilar-connectado.herokuapp.com/v1/users')
   let usuario = JSON.parse(data)

    usuario.forEach(element =>{

       if(element.cpf == usu.cpf)
       {
           console.log(element.id)
           return element.id
       }

    });
}


var query = location.search.slice(1);
var partes = query.split('?');
var usuarioCad = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    usuarioCad[chave] = valor;
});
console.log(usuarioCad)

main(usuarioCad)

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