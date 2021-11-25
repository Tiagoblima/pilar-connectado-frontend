
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
function getOpportunity(url)
{
    fetch(url).then(function(response)
    {
     return response.json();
    }).then(function(data)
    {
      //console.log(data)
      localStorage.setItem("opportunity", JSON.stringify(data));
     
    }).catch(function()
    {
      console.log("houve algum Erro");
    });
    
}

function criaLinha(opportunity)
{
  divRow = document.createElement("div");
  divCol = document.createElement("div");
  h2 = document.createElement("h2");
  p0 = document.createElement("p");
  p1 = document.createElement("p");
  p2 = document.createElement("p");
  p3 = document.createElement("p");
  bt = document.createElement("button");

  divRow.className = "card mb-3 ml-3";
  divCol.className = "col-md-8 card-body";
  h2.className = "card-title";
  h2.className = "card-text";
  h2.className = "card-text";
  h2.className = "card-text";
  h2.className = "card-text";
  bt.className = "btn btn-primary";

 
  h2.innerHTML =  opportunity.description
  p1.innerHTML = 'Date Inicio: '+ opportunity.startDate
  p2.innerHTML = 'Data Fim: '+ opportunity.endDate
  p0.innerHTML = 'Valor R$: '+ opportunity.value
  bt.innerHTML =  "Detalhe"
  bt.onclick =  function (){
      localStorage.setItem("id_Opoortunity", opportunity.id);
      location.href = "./opportunityDetails.html";
  }
  
  
  divRow.appendChild(divCol);
  divCol.appendChild(h2);
  divCol.appendChild(p1);
  divCol.appendChild(p2);
  divCol.appendChild(p3);
  divCol.appendChild(p0);
  divCol.appendChild(bt);

  return divRow;


}

function main()
{
  data = getOpportunity("https://pilar-connectado.herokuapp.com/v1/opportunity")

  let opportunity = JSON.parse(localStorage.getItem("opportunity"));
  //console.log(opportunity);
  
  let divRow = document.getElementById('div')
  opportunity.forEach(element =>
  {
 
   /*  let divRow = criaLinha(element)
    divRow.appendChild(divCol)   */
    let divCol = criaLinha(element)
    divRow.appendChild(divCol) 
    divRow.className = "row"; 

  
  })
}

main()