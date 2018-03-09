" Use strict"
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagerbox li");
    let banners = document.querySelector("#banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    pagers.forEach(function (val, index) {
        val.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this val pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });

    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        // n=n%5;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }

        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        pagers[n].classList.add("active");
        imgs[n].classList.add("active");
    }

    banners.onmouseenter = function () {
        clearInterval(t);
    };
    banners.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    let flag = true;
    next.onclick = function () {

        if (flag) {
            flag = false;
            move();
        }
    };
    prev.onclick = function () {

        if (flag) {
            flag = false;
            n -= 2;
            move()
        }

    };
    imgs.forEach(function (val, index) {
        val.addEventListener("transitionend", function () {
            flag = true;
        })
    });
    //      setInterval(function () {
//
// },3000);
}
// banner效果


//单品效果
{
    const prev = document.querySelector(".mingxing_anniu1");
    const next = document.querySelector(".mingxing_anniu2");
    const inner = document.querySelector(".danpinbeijing");
    console.log(prev, next);
    console.log(inner);
    let n = 0;
    next.onclick = (function () {
        n++;
        prev.classList.remove("disable");
        if (n === 2) {
            this.classList.add("disable");
        }
        if (n === 3) {
            n = 2;
            return;
        }
        inner.style.marginLeft = -1226 * n + "px";
    });
    prev.onclick = function () {
        n--;
        next.classList.remove("disable");
        if (n === 0) {
            prev.classList.add("disable");
        }
        if (n === -1) {
            n = 0;
            return;
        }
        inner.style.marginLeft = -1226 * n + "px";
    }
}


//选项卡打包效果
{
    function content(parent) {
        const types = parent.querySelectorAll(".types");
        const goods = parent.querySelectorAll(".good");
         console.log(types, goods);
        types.forEach(function (val, index) {
            val.onmouseenter = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("active");
                    goods[i].classList.remove("active");

                }
                this.classList.add("active");
                goods[index].classList.add("active")
            }
        });
    }
        const contentList = document.querySelectorAll(".content");
        console.log(contentList);
        // content(contentList[0]);
        // content(contentList[1]);
        // content(contentList[2]);
        // content(contentList[3]);
        // // content(contentList[4]);
        contentList.forEach(function (val) {
            content(val);
        });


}

// const types=document.querySelectorAll(".dapeibeijing");
// console.log(types);
// const goods=document.querySelectorAll(".good-list");
// const contents=document.querySelectorAll(".content");
// const active=document.querySelectorAll(".active");
// console.log(types);
// console.log(goods);
// console.log(contents);
// console.log(active);

// {
//     const types=document.querySelectorAll(".types");
//     const goods=document.querySelectorAll(".good");
//     console.log(types,goods);
//     types.forEach(function (val,index) {
//         val.onmouseenter=function () {
//             for (i=0;i<types.length;i++){
//                 types[i].classList.remove("active");
//                 goods[i].classList.remove("active");
//             }
//             this.classList.add("active");
//             goods[index].classList.add("active");
//         }
//     });
//     const contentList = document.querySelectorAll(".dapeibeijing");
//         console.log(contentList);
//
// }
