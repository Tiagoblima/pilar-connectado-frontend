
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