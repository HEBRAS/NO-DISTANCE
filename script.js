// انيميشن انفجار القلب عند الضغط
document.addEventListener("click", (e) => {
    const container = document.getElementById("heart-container");
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // ضبط مكان ظهور القلب
    heart.style.left = e.clientX - 10 + "px";
    heart.style.top = e.clientY - 10 + "px";

    container.appendChild(heart);

    // إزالة القلب بعد الانيميشن
    setTimeout(() => {
        heart.remove();
    }, 1600);
});
