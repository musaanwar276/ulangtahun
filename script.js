function showMsg(){
    document.getElementById("msg").innerHTML =
    "Semoga panjang umur dan bahagia selalu ❤️";
}

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration =
    Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,300);