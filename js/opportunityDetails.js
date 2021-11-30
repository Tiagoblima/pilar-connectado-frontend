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

function showOpportunityDetails(opportunity)
{ 
  document.getElementById("fromDate").innerHTML = opportunity.startDate;
  document.getElementById("toDate").innerHTML = opportunity.endDate;
  document.getElementById("description").innerHTML = opportunity.description;
}

function showPortoMemberDetails(portoMemberId)
{
  response = getByIdRequest("porto_member/by/id/", portoMemberId);
  response.then(portoMember => {

    document.getElementById("workaddress").innerHTML = portoMember.workaddress;
    console.log(portoMember);
    
     getByIdRequest("phone/by/user/",  portoMember.id_user).then(phone => {

      for(let i = 0; i < phone.length; i++)
      {

        phoneHolder = document.getElementById("phoneHolder")
        label = document.createElement("label");
        span = document.createElement("span");
        
        label.innerHTML += phone[i].type;
        span.innerHTML += phone[i].number;
      
      }
     });

     getByIdRequest("user/by/id/", portoMember.id_user).then(user => {
      console.log(user);
      document.getElementById("name").innerHTML = user.name;
      document.getElementById("email").innerHTML = user.email;
      
    })
  });
}


function showSkill(skillId){

  getByIdRequest("skill/by/id/", skillId).then(skill => {
    document.getElementById("skill").innerHTML = skill.name;
  })

}

function main() {
  
  response = getByIdRequest("opportunity/by/id/", localStorage.getItem("id_Opoortunity"));
  
  response.then(data => {
    showOpportunityDetails(data);
    console.log(data);

    showPortoMemberDetails(data.id_portomember);

    showSkill(data.id_skill);
    
    
  })



  //getByIdRequest("opportunity/by/porto_member_id/", localStorage.getItem("id_Opoortunity"));
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