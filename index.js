//button get Details got clicked 
let card=document.getElementById("Details");
let repos=document.getElementById("RepoDetails")
let two=document.getElementById("three")
let goforhide=document.getElementById("goforhide");
let remove=document.getElementById("removed")
let gotcha = async () => {
  document.body.classList.add("dynamicDesign")
  
      let userName=document.getElementById("username").value;
      goforhide.textContent=`${userName}`
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    // console.log(data)
    profile(data);
    repo(userName);


  };
  let profile=async (datas)=>{
    remove.remove();
    card.innerHTML=`<div  class="card" style="width: 18rem;">
    <img class="card-img-top" src="${datas.avatar_url}" alt="Profile photo">
    <div class="card-body">
      <h5 class="card-title">${datas.login}</h5>
      
    </div>
    <ul class="list-group list-group-flush">
    <p class="card-text"> <i class="fa-solid fa-people-group"></i> ${datas.followers}</p>
    <p class="card-text"><i class="fa-solid fa-location-dot" style="color: #000000;"></i> ${datas.location}</p>
    
    
    </ul>
    <div class="card-body">
      <a href="${datas.html_url}" target="_blank" class="card-link"><button class="button-6" role="button">Interested visit Profile</button></a>
    </div>
  </div>`
  }
  let repo= async (userName)=>{

    const res = await fetch(`https://api.github.com/users/${userName}/repos`); 
    let result= await res.json();
    result.forEach((val)=>{
    let samples=document.createElement("div")
    samples.classList.add('col');
    samples.innerHTML = `
        <div  class="card" style="width: 18rem">
          <h5 class="card-header">${val.name}</h5>
          <div class="card-body">
            <p class="card-text">Posted: ${val.created_at}</p>
            <p class="card-text">${val.language}</p>
            <a href="${val.html_url}" target="_blank" ><button class="button-6" role="button">Repo Link</button></a>
          </div>
        </div>
      `;
      two.appendChild(samples)
    console.log(val)
      console.log(val.name)
      console.log(val.language)
      console.log(val.html_url)

    })
    
  }