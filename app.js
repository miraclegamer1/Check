let name = document.getElementById("name");
let img = document.getElementById("img");
let repos = document.getElementById("repos");
let followers = document.getElementById("follower");
let followingCount = document.getElementById("Following");
let locationElement = document.getElementById("location");
let createdElement = document.getElementById("created");
let typeElement = document.getElementById("type");
let btn = document.getElementById("btn");
let gitRes;

async function getinform() {
  let ism = document.getElementById("ism").value;
  let fetchRes = await fetch(`https://api.github.com/users/${ism}`);
  if (fetchRes.ok) {
    gitRes = await fetchRes.json();
    console.log(gitRes);
    name.textContent = gitRes.login;
    img.src = gitRes.avatar_url;
    repos.textContent = gitRes.public_repos;
    followers.textContent = gitRes.followers;
    followingCount.textContent = gitRes.following;
    if (gitRes.location == null) {
      locationElement.textContent = `Location: Haven't shared yet`;
    } else {
      locationElement.textContent = `Location: ${gitRes.location}`;
    }
    createdElement.textContent = `Created: ${gitRes.created_at}`;
    typeElement.textContent = `User_Type: ${gitRes.type}`;
  } else {
    console.log('User not found');
  }
}

btn.addEventListener("click", () => {
  if (gitRes) {
    window.open(gitRes.html_url);
  }
});

