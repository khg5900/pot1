
    const jaButton = document.getElementById("jp-change");
    const koButton = document.getElementById("ko-change");

    const koContent1 = document.getElementById("ko1");
    const jaContent1 = document.getElementById("jp1");

    const koContent2 = document.getElementById("ko2");
    const jaContent2 = document.getElementById("jp2");

    const koContent3 = document.getElementById("ko3");
    const jaContent3 = document.getElementById("jp3");

    const koContent4 = document.getElementById("ko4");
    const jaContent4 = document.getElementById("jp4");
  
    // function changeLanguage(lang) {
    //   if (lang === "ko") {
    //     koContent1.classList.remove("hidden1");
    //     jaContent1.classList.add("hidden1");

    //     koContent2.classList.remove("hidden2");
    //     jaContent2.classList.add("hidden2");

    //     koContent3.classList.remove("hidden3");
    //     jaContent3.classList.add("hidden3");

    //     koContent4.classList.remove("hidden4");
    //     jaContent4.classList.add("hidden4");
    //   } else {
    //     koContent1.classList.add("hidden1");
    //     jaContent1.classList.remove("hidden1");

    //     koContent2.classList.add("hidden2");
    //     jaContent2.classList.remove("hidden2");

    //     koContent3.classList.add("hidden3");
    //     jaContent3.classList.remove("hidden3");

    //     koContent4.classList.add("hidden4");
    //     jaContent4.classList.remove("hidden4");
    //   }
    // }
  
    koButton.addEventListener("click", function () {
        //   changeLanguage("ko");
        koContent1.classList.remove("hidden1");
        jaContent1.classList.add("hidden1");

        koContent2.classList.remove("hidden2");
        jaContent2.classList.add("hidden2");

        koContent3.classList.remove("hidden3");
        jaContent3.classList.add("hidden3");

        koContent4.classList.remove("hidden4");
        jaContent4.classList.add("hidden4");
    });
  
    jaButton.addEventListener("click", function () {
    //   changeLanguage("ja");
    koContent1.classList.add("hidden1");
    jaContent1.classList.remove("hidden1");

    koContent2.classList.add("hidden2");
    jaContent2.classList.remove("hidden2");

    koContent3.classList.add("hidden3");
    jaContent3.classList.remove("hidden3");

    koContent4.classList.add("hidden4");
    jaContent4.classList.remove("hidden4");
    });
  
  