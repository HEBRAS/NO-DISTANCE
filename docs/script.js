window.onload = () => {
    const bg = document.body;
    const paper = document.body.querySelector("body::before");
    const content = document.querySelector(".content");
    const logo = document.querySelector(".logo");
    const subtitle = document.querySelector(".subtitle");

    // خلفية الورق تظهر بشكل ناعم
    setTimeout(() => {
        document.body.style.setProperty("--paper-opacity", 1);
        document.body.style.setProperty("--paper-blur", "0px");
        document.body.classList.add("paper-ready");
        document.body.style.setProperty("filter", "blur(0px)");
        document.body.style.setProperty("opacity", "1");

        document.querySelector("body::before")?.classList?.add("show");
    }, 100);

    // ظهور المحتوى
    setTimeout(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0) scale(1)";
        content.style.filter = "blur(0)";
    }, 600);

    // حركة اللوقو (مستوحة من Movie Titles)
    setTimeout(() => {
        logo.animate(
            [
                { letterSpacing: "0.6em", opacity: 0 },
                { letterSpacing: "0.35em", opacity: 1 }
            ],
            {
                duration: 900,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }, 900);

    // ظهور السطر الثاني
    setTimeout(() => {
        subtitle.animate(
            [
                { opacity: 0, filter: "blur(4px)", transform: "translateY(6px)" },
                { opacity: 1, filter: "blur(0)", transform: "translateY(0)" }
            ],
            {
                duration: 800,
                easing: "ease-out",
                fill: "forwards"
            }
        );
    }, 1500);
};


window.onload = () => {

    const content = document.querySelector(".content");
    const subtitle = document.querySelector(".subtitle");

    // خلفية الورق تتحسن تدريجياً
    setTimeout(() => {
        document.body.style.setProperty("opacity", "1");
        document.body.querySelector("body::before");
    }, 100);

    // دخول المحتوى
    setTimeout(() => {
        content.style.opacity = "1";
        content.style.filter = "blur(0)";
        content.style.transform = "translateY(0)";
    }, 800);

    // ظهور السطر الثاني
    setTimeout(() => {
        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
        subtitle.style.filter = "blur(0)";
    }, 1500);
};


// انفجار قلب Old Money عند الضغط على الشاشة
document.addEventListener("click", (e) => {

    // إنشاء القلب
    const heart = document.createElement("div");
    heart.classList.add("heart-burst");
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    document.body.appendChild(heart);

    // إنشاء الوميض الذهبي
    const flash = document.createElement("div");
    flash.classList.add("gold-flash");
    flash.style.left = `${e.clientX - 45}px`;
    flash.style.top = `${e.clientY - 45}px`;
    document.body.appendChild(flash);

    // حذف العناصر بعد الانيميشن
    setTimeout(() => {
        heart.remove();
        flash.remove();

        // 🔥 انتقال للصفحة التالية (اختياري)
        // window.location.href = "next.html";

    }, 1500);
});
