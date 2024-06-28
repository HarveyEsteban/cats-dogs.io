let url = 'https://api.github.com/users/';
let btn = document.getElementById('btn');
let userInfo = document.getElementById('username');

function getUser(){

    return new Promise(async function(resolve, reject){
        
        let userValue = userInfo.value;
        let newUrl = `${url}${userValue}`;
        const response = await fetch(newUrl);
        const data = await response.json();

        if(response.status === 200)
            {
                resolve(data);
            }
            else{
                reject('User not found');
            }
    });

}


async function createUser(){
    
    try{
        let user = await getUser();

        let imgDom = document.getElementById('profile');
        let nameDom = document.getElementById('name');
        let bioDom = document.getElementById('bio');

        imgDom.src = user.avatar_url;
        nameDom.innerText = user.name !== null ? user.name : user.login;
        bioDom.innerText = user.bio !== null ? user.bio : "No bio Available";

    }
    catch(error){
        console.error(error);
    }
}

btn.addEventListener('click', () =>{
    createUser();
});