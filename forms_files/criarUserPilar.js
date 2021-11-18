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