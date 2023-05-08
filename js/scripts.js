    'use strict';

    const btn = document.querySelector("header a");
    const h1 = document.querySelector("headera h1");
    const h1Text = h1.innerHTML;
    let counetr = 0;
    btn.addEventListener('click' , () => {

        counetr++;
        // if(counetr % 2 === 0)
        //     h1.innerHTML = h1Text;
        // else
        //     h1.innerHTML = "Będzie pan zadowlony ;)"

        counetr % 2 === 0 ? h1.innerHTML = h1Text :  h1.innerHTML = ("Będzie pan zadowlony")
    });