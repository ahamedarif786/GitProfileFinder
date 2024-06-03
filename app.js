const github = new Github();
const ui = new UI();

const inputs = document.querySelector(".inputs");
const form = document.querySelector("#form-git");

form.addEventListener("click", (e)=>{
    e.preventDefault();
    var value = inputs.value;
    if(value !==""){
        github.getDetails(value).then((data)=>{
            if(data.profile.message === "Not Found"){
                ui.showAlert("The username you have entered is invalid", "alert alert-danger")
            }else{
                ui.showprofiles(data.profile)
            }
        }) 
    }
})
