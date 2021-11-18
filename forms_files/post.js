
async function sendRequest(method,url,body, keyStorange=null)
{
    let headers = new Headers();
    
    headers.append("Content-type","application/json");

    await fetch(url, {method:method,
            headers: headers,

            body: JSON.stringify(body)
        })
    .then(response => {
        

        if(response.status == 200){
            if(keyStorange != null){

                response.json().then(user =>{
                    window.localStorage.setItem(keyStorange, user.id)
                    console.log(window.localStorage.getItem('isPilarMember'))

                    if(window.localStorage.getItem('isPilarMember')=="true"){
                      window.location.replace("./formsPilarMember.html")

                       console.log("entrou aqui")
                       //window.location.href = './formsPilarMember.html'
                       
                    }else{
                        console.log("nao é pilar member")
                        window.location.replace("./formsPortoMember.html")
                        //window.location.href = "./formsPortoMember.html"
                    }

                   

                })
                
            }
         
        }else{
            response.json().then(error =>{
                alert("Email já existe")
            })
        }
    }).catch(error => {
        alert("Erro ao cadastrar usuário, provavelmente CPF já cadastrado")
    })
  
}

function cadastrarUsuario()
{
    event.preventDefault()
    let url = ' https://pilar-connectado.herokuapp.com/v1/users/'

    let firstName = document.getElementById('firstName').value.toString()
    let lastName = document.getElementById('lastName').value.toString()

    let email = document.getElementById('email').value.toString()
    let password = document.getElementById('password').value.toString()
    let password2 = document.getElementById('password2').value.toString()
    let address = document.getElementById('address').value.toString()
    let cpf = document.getElementById('cpf').value.toString()

    let gridCheckPilarMember = document.getElementById('gridCheckPilarMember').checked

    window.localStorage.setItem('isPilarMember', gridCheckPilarMember)
    console.log(window.localStorage.getItem('isPilarMember'))
    console.log(password,password2)
    if (password != password2){
        alert("Senhas não conferem")
        
    }

    body = {
        "email": email,
        "name": firstName+" "+lastName,
        "password": password,
        "address": address,
        "cpf": cpf

    }

    console.log(body)
    sendRequest("POST",url,body, 'user')
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