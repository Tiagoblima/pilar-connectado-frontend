const BASE_URL = "https://pilar-connectado.herokuapp.com/v1/";

const getByIdRequest = async(url, id) =>
{   
  //fetch(url).then(response => response.json).then(console.log);
  
  return await (await fetch(BASE_URL + url +`${id}/`)).json();
  //showOpportunityDetails(await opportunity.json());
  //const portoMember = await fetch(BASE_URL + "opportunity/by/id/2/");
  //showPortoMemberDetails(portoMember);
  //return await data.json();
}


function showPilarMemberDetails(pilarMember)
{


}

function showUserDetails(user)
{
    
}

function showPosters(pilarMemberId){


}