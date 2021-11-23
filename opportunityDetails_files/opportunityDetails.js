const getRequest = async(baseUrl) =>
{   
  //fetch(url).then(response => response.json).then(console.log);
  const id = localStorage.getItem("id_Opoortunity");
  const opportunity = await fetch(baseUrl + "opportunity/by/id/" +`${id}/`);
  showOpportunityDetails(await opportunity.json());
  //const portoMember = await fetch(baseUrl + "opportunity/by/id/2/");
  //showPortoMemberDetails(portoMember);
  //return await data.json();
}

function showOpportunityDetails(opportunity)
{ 
  document.getElementById("fromDate").innerHTML = opportunity.startDate;
  document.getElementById("toDate").innerHTML = opportunity.endDate;
  document.getElementById("description").innerHTML = opportunity.description;
}

function showPortoMemberDetails(portoMember)
{
  
}


function main() {
  const baseUrl = "https://pilar-connectado.herokuapp.com/v1/";
  getRequest(baseUrl);
  //console.log(opportunityPromisse.value);
  //showOpportunityDetails(opportunity);
  //let portoMember = getRequest("https://pilar-connectado.herokuapp.com/v1/opportunity/by/id/2/");
  //showPortoMemberDetails(portoMember); 
}

main();

/*
function getRequest()
{   
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
      showOpportunityDetails(data);
    }).catch(function() {
      console.log("there was some problem");
    });
}
*/