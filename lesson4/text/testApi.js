let p = document.getElementById("para");

let words = p.textContent.split(" ");

for (let i = 0; i < words.length ; i++){
    if (words[i].length >= 8){
        words[i] = "<mark>" + words[i] + "</mark>"
    }

    if(words[i].charAt(0) == 'e'){
        words[i] = "🙂" + words[i].substring(1);
    }
}

p.innerHTML = words.join(" ");

document.title = words.length;


// click event
const square = document.getElementById("square");
var click = false;
square.onclick = function getfocus(){
    square.style.background = click? "red" : "aquamarine";
    click = !click;
}



