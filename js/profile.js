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


function showPilarMemberDetails(user_id)
{
  
  getByIdRequest("pilar_member/by/user/", user_id).then(

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

    }

  );

}

function showPortoMemberDetails(user_id){

  getByIdRequest("porto_member/by/user/", user_id).then(

    (data) => {
      
      console.log(data);
      document.getElementById("workaddress").innerHTML = data.workaddress;
      document.getElementById("company").innerHTML = data.company_name;
    
    }


  )
    


}


function showUserDetails(user_id)
{
    getByIdRequest("user/by/id/", user_id).then(

      (data) => {
        
        console.log(data);
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
function showPosters(user_id){

  getByIdRequest("posts/", user_id).then(

    (data) => {

      console.log(data);

      let posts = document.getElementById("posts");

      for(let i = 0; i < data.length; i++){

        /* <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="input-group mb-3">
                           
                            <h3 id="posterTitle">Title</span>
                          </div>
                          <div class="form-group">
                            <label for="posterDescription">Descrição</label>
                            <textarea class="form-control" disabled id="posterDescription" rows="5"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="text-center">
                            <img src="./images/person_computer.svg" class="rounded" alt="..." width="200px" height="200px">
                          </div>
                        </div>
                      </div>
                    </div>**/



        let poster = document.createElement("div");
        poster.className = "row";
        let col1 = document.createElement("div");
        col1.className = "col-md-8";


        let div1 = document.createElement("div");
        div1.className = "form-group";
        let div2 = document.createElement("div");
        div2.className = "input-group mb-3";
        let title = document.createElement("h3");
        title.id = "posterTitle";
        if (data[i].title == null){
          title.innerHTML = "Sem título";
        }else{
          title.innerHTML = data[i].title;
        }
       
        div2.appendChild(title);
        div1.appendChild(div2);
        col1.appendChild(div1);
        

        let div3 = document.createElement("div");
        div3.className = "form-group";
       
        let textarea = document.createElement("div");
        textarea.className = "font-weight-light";
     
        textarea.id = "posterDescription";
       
        textarea.innerHTML = data[i].description;
      
        div3.appendChild(textarea);
        div1.appendChild(div3);

        poster.appendChild(col1);
        

        let col2 = document.createElement("div");
        col2.className = "col-md-4";

        poster.appendChild(col2);

        posts.appendChild(poster);

      }

     
    }
  )

}


function main(){

 
  let user_id = localStorage.getItem("userId")
  showUserDetails(localStorage.getItem("userId"));
  console.log(localStorage.getItem("isPilarMember"))
  if(localStorage.getItem("isPilarMember") == "true"){

    showPilarMemberDetails(user_id);
    showPosters(user_id)

  }else{
    showPortoMemberDetails(user_id);
  }

}
main();