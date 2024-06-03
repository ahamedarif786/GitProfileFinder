class UI{
    constructor(){
        this.profile = document.querySelector(".result")
    }
    showprofiles(user){
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" alt="IMAGE" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
                </div>
                <div class="col-md-9 mb-3">
                    <span class="badge bg-success">Public Repos  :  ${user.public_repos}</span>
                    <span class="badge bg-secondary">Public Gists  :  ${user.public_gists}</span>
                    <span class="badge bg-info">Public Followers  :  ${user.followers}</span>
                    <span class="badge bg-warning">Public Following  :  ${user.following}</span>
                    <div class="list-group">
                        <li class="list-group-item">Company  :  ${user.company}</li>
                        <li class="list-group-item">Location  :  ${user.location}</li>
                        <li class="list-group-item">E-mail  :  ${user.email}</li> 
                        <li class="list-group-item">Type  :  ${user.type }</li>
                    </div>
                </div>
            </div>
        </div>
        `
        
    }

    showAlert(msg, cname){
        const div = document.createElement("div")
        div.className = cname;
        div.innerText = msg;
        const container = document.querySelector(".git-container");
        const searchbody = document.querySelector("search-body");
        container.insertBefore(div, searchbody);

    }
    // clearAlert(alertname){
    //     setTimeout(()=>{

    //     },3000)
    // }
}