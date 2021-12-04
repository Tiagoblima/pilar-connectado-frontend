
BASE_URL = 'https://pilar-connectado.herokuapp.com/v1/'

getSkillsList = async function() {


    let headers = new Headers();
    
    headers.append("Content-type","application/json");

    await fetch(BASE_URL+'skill/', {
        method: 'GET',
        headers: headers,
    }).then(response => response.json().then(data => {
        console.log(data);
        let selectDOM = document.getElementById("skillList")
        data.forEach(element => {


            /**
             *  <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
             */
            let div = document.createElement("div");
            div.className = "form-check mr-3 ml-3"
            let input = document.createElement("input");
            input.className = "form-check-input"
            input.type = "checkbox"
            input.id = element.id
            input.value = element.id
            
            input.onclick = function(){

              if(input.checked==true){
                console.log(input.id);
                getByIdRequest("opportunity/by/skill/", input.id).then(data => {

                  data.forEach(element => {
                    let divRow = createCard(element);
                    document.getElementById("opportunityList").appendChild(divRow);
                  });
                })
              }
              else{
                getByIdRequest("opportunity/by/skill/", input.id).then(data => {

                  data.forEach(element => {
                    let divRow = createCard(element);
                    document.getElementById("opportunityList").removeChild(divRow);
                  });
                })
              }

            }

            let label = document.createElement("label")
            label.className = "form-check-label"
            label.innerHTML = element.name
            label.setAttribute("for",element.id)
            div.appendChild(input)
            div.appendChild(label)
            selectDOM.appendChild(div)
        }
        )
    })).catch(error => console.error('Error:', error));


}
getSkillsList();



let data = {"info":{}}
async function getOpportunity(url)
{
  return await (await fetch(BASE_URL + url)).json();
    
}


const getByIdRequest = async(url, id) =>
{   
  //fetch(url).then(response => response.json).then(console.log);
  
  return await (await fetch(BASE_URL + url +`${id}/`)).json();
  //showOpportunityDetails(await opportunity.json());
  //const portoMember = await fetch(BASE_URL + "opportunity/by/id/2/");
  //showPortoMemberDetails(portoMember);
  //return await data.json();
}

function createCard(opportunity)
{
   //<span class="badge badge-pill badge-primary">Primary</span>
  divRow = document.createElement("div");
  divRow.id = opportunity.id;
 
  divCol = document.createElement("div");
  h2 = document.createElement("h2");
  p0 = document.createElement("p");
  p1 = document.createElement("p");
  p2 = document.createElement("p");
  p3 = document.createElement("p");
  p4 = document.createElement("p");
  bt = document.createElement("button");
 

  divRow.className = "card row mr-3 ml-3 mb-3";
  divCol.className = "col-md-8 card-body";
  h2.className = "card-title";
  h2.className = "card-text";
  h2.className = "card-text";
  h2.className = "card-text";
  h2.className = "card-text";
  bt.className = "btn btn-primary";
  bt.innerHTML =  "Detalhe"
  
 


  bt.onclick =  function (){
      localStorage.setItem("id_Opoortunity", opportunity.id);
      location.href = "./opportunityDetails.html";
  }
 
  h2.innerHTML =  opportunity.description
  p1.innerHTML = 'Date Inicio: '+ opportunity.startDate
  p2.innerHTML = 'Data Fim: '+ opportunity.endDate
  p0.innerHTML = 'Valor R$: '+ opportunity.value

 

  divCol.appendChild(h2);
  divCol.appendChild(p1);
  divCol.appendChild(p2);
  divCol.appendChild(p3);
  divCol.appendChild(p4);
  divCol.appendChild(p0);
 
  divCol.appendChild(bt);
  divRow.appendChild(divCol);
  return divRow;
   

 

}


async function getPortoMember(url)
{
  return await fetch(BASE_URL + url).then(response => response.json());
}

async function getPilarMember(url)
{
  return await fetch(BASE_URL + url).then(response => response.json());
}



const testIfPilarMember = async(id) =>
{   
  //fetch(url).then(response => response.json).then(console.log);
  
  try{
     await fetch(BASE_URL + "pilar_member/by/user/" +`${id}/`).then(response =>
      
      {
        console.log(response);
        if(response.status == 200)
        {
          localStorage.setItem("isPilarMember", true);
         
          profileLink.href = "./profilePilarMember.html";
          profileLink.innerHTML = "Pilar Member";
          response.json().then(data => {
          localStorage.setItem("id_PilarMember", data.id);
          })
        }
        else
        {
          localStorage.setItem("isPilarMember", false);
          profileLink.href = "./profilePortoMember.html";
          profileLink.innerHTML = "Porto Member";
          response.json().then(data => {
            localStorage.setItem("id_PortoMember", data.id);
          })
        }
      } 
      )
     
  }catch(error){ localStorage.setItem("isPilarMember", false)
   profileLink.href = "./profilePortoMember.html" 
  }


  //showOpportunityDetails(await opportunity.json());
  //const portoMember = await fetch(BASE_URL + "opportunity/by/id/2/");
  //showPortoMemberDetails(portoMember);
  //return await data.json();
}


function main()
{
  

  //let opportunity = JSON.parse(localStorage.getItem("opportunity"));
  //console.log(opportunity);
  //user_id = 86;
  //localStorage.setItem("userId", 1);
  let user_id = localStorage.getItem("userId");
  profileLink = document.getElementById("profileLink");
 
  localStorage.setItem("isPilarMember", true);
  
  testIfPilarMember( user_id)


  console.log(data);
  let divRow = document.getElementById('div')

   
  childNodes = document.getElementById('skillList').childNodes
                
 


 
  
}

main()