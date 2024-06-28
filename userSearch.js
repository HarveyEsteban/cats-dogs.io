let urlGit = 'https://api.github.com/users/';
let userInput = document.getElementById('username');
let btn = document.getElementById('btn-submit');

 function getUser(){
        return new Promise(async function(resolve, reject){

            let inputValue = userInput.value;
            let url = `${urlGit}${inputValue}`; // Construct the URL with the username
    
            if(inputValue !== "")
            {
                const response = await fetch(url);
                const data = await response.json();
    
                if(response.status === 200)
                {
                    console.log(data);
                    resolve(data);
                }
                else{
                    reject(data);
                }
                
            }
            else{
                reject('Please Enter a Username');
            }
    


        });
}

    async function buildUser(){
        try{
        
        let user = await getUser();

        let nameDom = document.getElementById('name');
        let bioDom = document.getElementById('bio');
        let imgDom = document.getElementById('profile-pic');

        imgDom.src = user.avatar_url;
        nameDom.innerText = user.name !== null ? user.name : user.login;
        bioDom.innerText = user.bio !== null ? user.bio : 'Bio not available';

        }
        catch(err){
            console.error(err);
        }

        
        // let nameDom = document.getElementById('name');
        // let bioDom = document.getElementById('bio');
        // let imgDom = document.getElementById('profile-pic');

        // imgDom.src = userImg;
        // nameDom.innerText = data.name;
        // bioDom.innerText = data.bio !== null ? data.bio : 'Bio not available';
    }

btn.addEventListener('click', () =>{
    buildUser();
});
