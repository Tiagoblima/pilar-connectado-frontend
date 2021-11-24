
BASE_URL = 'https://pilar-connectado.herokuapp.com/v1/'
getSkillsList = async function() {


    let headers = new Headers();
    
    headers.append("Content-type","application/json");

    await fetch(BASE_URL+'skill/', {
        method: 'GET',
        headers: headers,
    }).then(response => response.json().then(data => {
        console.log(data);
        let selectDOM = document.getElementById("selectSkill")
        data.forEach(element => {

            let option = document.createElement("option");
            option.value = element.id;
            option.text = element.name;
            selectDOM.appendChild(option);
        }
        )
    })).catch(error => console.error('Error:', error));


}
getSkillsList();