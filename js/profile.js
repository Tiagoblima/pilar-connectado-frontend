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


function showPilarMemberDetails()
{
  





  getByIdRequest("pilar_member/by/user/", localStorage.getItem("userId")).then(

    (data) => {

      console.log(data);

      document.getElementById("instagram").innerHTML = data.instagram;
      document.getElementById("introduction").innerHTML = data.introduction;

      // <span class="fa fa-star" style="color: goldenrod;"></span>

      const stars = data.evaluation;

      let stars_html =  document.getElementById("stars");


      for(let i = 0; i < stars; i++){


        let star = document.createElement("span");
        star.className = "fa fa-star";
        star.style.color = "goldenrod";
        stars_html.appendChild(star);
        

      }

      showPosters(data.id);


    }

  );

}

function showUserDetails(user_id)
{
    getByIdRequest("user/by/id/", user_id).then(

      (data) => {

        document.getElementById("name").innerHTML = data.name;
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("cpf").innerHTML = data.cpf; 
        document.getElementById("address").innerHTML = data.address;
      
        console.log(data);
      }


    )
}

function showPosters(pilarMemberId){


}


function main(){

  localStorage.setItem("userId", 1)

  showUserDetails(localStorage.getItem("userId"));
  showPilarMemberDetails()
  console.log(localStorage.getItem("userId"));


}
main();