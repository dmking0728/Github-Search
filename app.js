//initialize Github from hithub.js
const github = new Github;

//init UI
const ui = new UI;

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
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //show alert
          ui.showProfile(data.profile);
        }
      })
  } else {
    //clear profile
    ui.clearProfile();
  }
});