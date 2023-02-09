//screen loading for 5 seconds after list-container is clicked or active

//screen change to final transition with layer
function containerClick() {
const boxContainer = document.getElementsByClassName("box-container");
for(let i = 0; i < boxContainer.length; i++) {
    var listContainer = boxContainer[i];
    listContainer.addEventListener('click', ScreenLoading);
};
}

const ScreenLoading = function(){
    const plainScreen = document.getElementById("plain");
    const TVbg = document.getElementById("TV");
    if(TVbg.firstElementChild.id === 'screen') {
    TVbg.firstElementChild.remove();
    } plainScreen.style.display = "flex";
    const loadingScreen = document.getElementById('layer');
    loadingScreen.style.display = "inline-flex";
};

containerClick();
/*screen changes based on which box is clicked (add svg transparent screen 
from figma with z-index:2 as a layer)*/
const ScreenClicked = function(){
    const plainScreen = document.getElementById("plain");
    const TVbg = document.getElementById("TV");
    if(TVbg.firstElementChild.id === 'screen') {
    TVbg.firstElementChild.remove();
    } plainScreen.style.display = "flex";
    const loadingScreen = document.getElementById('layer');
    loadingScreen.style.display = "inline-block";
}

//add animation using greensock for frame-2, frame-3 frame-4

//formspree email
var form = document.getElementById("message-form");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thank you for the message, I will reach out to you soon!";
    form.reset()
  } else {
    response.json().then(data => {
    if (Object.hasOwn(data, 'errors')) {
      status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
    } else {
      status.innerHTML = "Oops! There was a problem submitting your form"
    }
  })
}
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)