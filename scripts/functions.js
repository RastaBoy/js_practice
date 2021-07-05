console.log('Hello, world! I am ready to work:)');

function showModaleWindow() {
    let modale = document.getElementById('modale_test');

    if(modale.style.display === "") {
        modale.style.display = "flex";
    } else {
        modale.style.display = "";
    }

    return false;
}

function goodBoy() {
    let modale_title = document.getElementById('modale_test').getElementsByTagName('h2')[0];

    console.log(modale_title);
    modale_title.innerHTML = "Ты лучший человек на планете земля!";
    modale_title.style.fontSize = 30;
    modale_title.style.color = "green";

    return false;
}
