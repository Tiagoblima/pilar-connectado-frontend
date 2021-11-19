function fazGet(url)
{
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario)
{
    
    linha  = document.createElement("tr");
    tdId   = document.createElement("td");
    tdNome = document.createElement("td");
    tdEmail = document.createElement("td");
    tdEnd = document.createElement("td");
    
    tdId.innerHTML    = usuario.id
    tdNome.innerHTML  = usuario.name
    tdEmail.innerHTML = usuario.email
    tdEnd.innerHTML   = usuario.address
 

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdEnd);
   // linha.appendChild(tdpas);


    return linha;
}


function main()
{
   let  data = fazGet('https://pilar-connectado.herokuapp.com/v1/users')
   let usuario = JSON.parse(data)

   let user = document.getElementById('pas').value


   let tabela = document.getElementById('tabela')
   //let senha = document.getElementById("pas").value
   
    //document.getElementById('pas').value = ""
    usuario.forEach(element =>{
       
            let linha = criaLinha(element)
            tabela.appendChild(linha)  

    });
}

