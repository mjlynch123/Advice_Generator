var advice = document.getElementById("advice");
var newBtn = document.getElementById("new-advice");

var api = 'https://api.adviceslip.com/advice?timestamp=' + new Date().getTime();

async function getData() {
    var dataResponse = await fetch(api);
    var apiData = await dataResponse.json();
    advice.textContent = apiData.slip.advice;
}

newBtn.addEventListener("click", function() {
    window.location.reload();
});

getData();