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


function showSkills(pilarMemberId)
{

  getByIdRequest("skill/by/pilar_member/", pilarMemberId).then(

    (data) => {

      /**
       * <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Habilidade</span>
                <span id="skillName"></span>
              </div>
              <div>
                <span class="input-group-text" id="basic-addon3">Nível</span>
                <span id="skillLevel"></span>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Descrição</label>
              <textarea class="form-control" disabled id="skillsDescription" rows="5"></textarea>
            </div>
          </div>
        </div>
* 
       */
      let skills = document.getElementById("skills");

      for(let i = 0; i < data.length; i++){

        let skill = document.createElement("li");
        skill.innerHTML = data[i].name;
        skills.appendChild(skill);

      }

    }

  );

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