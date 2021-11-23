function fazPost(url,body)
{
  

    /*
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST",url,true)
    request.setRequestHeader("Content-type","application/json")
    request.send(JSON.stringify(body))

    request.onload =  function resposta()
    {
        console.log(this.responseTex)
    }
    return request.responseText*/
}
function cadastrarUsuario()
{
    event.preventDefault()
    let url = 'https://pilar-connectado.herokuapp.com/v1/users'

    let primeiroNome = document.getElementById('firstName').value.toString()
    let ultimoNome = document.getElementById('lastName').value.toString()
    let email = document.getElementById('email').value.toString()
    let senha = document.getElementById('password').value.toString()
    let senha2 = document.getElementById('password2').value.toString()
    let tipoMembro = document.querySelector('input[name="gridCheck1"]:checked').value;
    let endereco = document.getElementById('address').value.toString()
    let cpf = document.getElementById('cpf').value.toString()
    nome = primeiroNome+" "+ultimoNome;

    if(senha != senha2)
    {
        alert("As senhas estão diferentes")
        document.getElementById('password').focus()
    }
    
   let body = {
        "email": email,
        "name": nome,
        "password": senha,
        "address": endereco,
        "cpf": cpf
    }
    fetch('https://pilar-connectado.herokuapp.com/v1/users',{
        method: 'POST',
        body: JSON.stringify(body)
    })
    .then(function(response)
    {
        //console.log(response)
        return response.json()
    })
    .then(function(response){
        alert("ok, cadastrado com sucesso")
    })
   // fazPost(url,body)

   /*  var dados = "&tipo="+tipoMembro+
                "&name="+nome.toString()+
                "&email="+email.toString()+
                "&address="+endereco.toString()+
                "&cpf="+cpf;
    RedirecionaPaginaPopUp("formsPilarMember.html",dados) */
} 



function RedirecionaPaginaPopUp(URL, Parametros)
{
    var form = document.createElement('form');
    form.setAttribute('method',"post");
    form.setAttribute('action',URL);
    form.setAttribute("target", "popUp");
    form.acceptCharset="UTF-8";

    if(typeof Parametros != "undefined")
    {
        var ParametrosQueb = Parametros.split('&');
        for(var x = 0; x < ParametrosQueb.length; x++)
        {
            var input = document.createElement('input');
            var Param = ParametrosQueb[x].split('=');

            input.setAttribute('type','hidden');
            input.setAttribute('name',Param[0]);
            input.setAttribute('value',Param[1]);

            form.appendChild(input);
        }
    }

    try//No mozila precisa disso entretanto no Chrome da Erro
    {
        document.body.appendChild(form);
    }
    catch(e)
    {
    }

    //var largura = screen.width;
    //var altura = screen.height;

    var largura = screen.width;
    var altura = screen.height;

    var esquerda = 0;
    var topo = 0;
    
    window.open("about:blank", "popUp", 'height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda + ',menubar=1,toolbar=0,status=NO,scrollbars=YES,location=0,resizable=no');			
    form.submit();

    try
    {
        document.body.removeChild(form);
    }
    catch(e)
    {
    }
}