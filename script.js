var adviceNumber = document.getElementById("number");
var advice = document.getElementById("advice");
var newBtn = document.getElementById("new-advice");

var api = 'https://api.adviceslip.com/advice?timestamp=' + new Date().getTime();

async function getData() {
    var apiResponse = await fetch(api + '&cacheBuster=' + new Date().getTime());
    var apiData = await apiResponse.json();
    adviceNumber.textContent = apiData.slip.id;
    advice.textContent = apiData.slip.advice;
    console.log(apiData);
}

newBtn.addEventListener("click", function() {
    getData();
});

getData();