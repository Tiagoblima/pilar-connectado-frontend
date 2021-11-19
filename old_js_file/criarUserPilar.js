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

function cadastrarUsuarioPilar()
{
    event.preventDefault()
    let url = 'https://pilar-connectado.herokuapp.com/v1/pilar_member/'

    let resumo = document.getElementById('resumo').value
    let instagram = document.getElementById('instagram').value


    body = {
        "introduction": resumo,
        "instagram": instagram

    }
    fazPost(url,body)
}