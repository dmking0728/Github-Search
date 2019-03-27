//initialize Github from hithub.js
const github = new Github;

//search input
const searchUser = document.getElementById('searchUser');

//search inout event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  if(userText !== ''){
    //make http call locatged in github.js
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //show alert

        } else {
          //show alert

        }
      })
  } else {
    //clear profile
    
  }
});