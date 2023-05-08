    'use strict';

    const btn = document.querySelector("header a")
    const h1 = document.querySelector("headera h1")
    const h1Text = h1.innerHTML;

    btn.addEventListener('click' , () => {
        h1.innerHTML = "Będzie pan zadowlony ;)"
    });