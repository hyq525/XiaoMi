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

}
//
// banner效果
// },3000);
//      setInterval(function () {
// 单品效果
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


// 选项卡打包效果
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




//推荐效果
{
    const prev = document.querySelector(".mingxing_anniu3");
    const next = document.querySelector(".mingxing_anniu4");
    const inner = document.querySelector(".tuijianbeijing");
    console.log(prev, next);
    console.log(inner);
    let n = 0;
    next.onclick = (function () {
        n++;
        prev.classList.remove("disable");
        if (n === 3) {
            this.classList.add("disable");
        }
        if (n === 4) {
            n = 3;
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



//内容效果
{
    // console.log(prev,next,inner,pag);
    function contmove(father) {
        let  prev=father.querySelector(".prev1");
        let  next=father.querySelector(".next1");
        let  inner=father.querySelector(".dabawang");
        let  content=father.querySelectorAll(".imgbox-content");
        let pag=father.querySelectorAll(".pager2");
        let  n=0;

        next.onclick=function () {
            n++;
            if (n===content.length){
                n=content.length-1;
                return;
            }
            inner.style.marginLeft=n*-296+"px";
            pag[n].classList.add("active2");
            pag[n-1].classList.remove("active2");
        };
        prev.onclick=function () {
            n--;
            if (n<0){
                n=0;
            }
            inner.style.marginLeft=n*-296+"px";
            pag[n].classList.add("active2");
            pag[n+1].classList.remove("active2");
        };
        let obj=pag[0];
        pag.forEach(function (ele,index){
            ele.onclick=function () {
                obj.classList.remove("active2");
                ele.classList.add("active2");
                obj=ele;
                inner.style.marginLeft=index*-296+"px";
                n=index;
            }
        })
    }

    var neirong1=document.querySelectorAll(".neirong1");
    neirong1.forEach(function (ele) {
        contmove(ele);
    })
}






//导航效果
{
    let daomore=document.querySelector(".wenzimore");
    let daotitle=document.querySelector(".wenzi");
    // let dao=document.querySelector(".daohang")
    // console.log(daomore,daotitle)
    daotitle.onmouseenter=function () {
        daomore.style.height=300+"px";

    };
    daotitle.onmouseleave=function () {
        daomore.style.height=0;
    };
    daomore.onmouseleave=function () {
        daomore.style.height=0;
    };
        //


    let listmin = document.querySelectorAll(".wenzi span");
    let listcont = document.querySelectorAll(".wenzimoree");
    // console.log(listmin, listcont);
    listmin.forEach(function (val,index) {
        console.log(val)
        val.onmouseenter=function () {
            for (i=0;i<listcont.length;i++){
                listmin[i].classList.remove("active44");
                listcont[i].classList.remove("active44");
            }
            this.classList.add("active44");
            listcont[index].classList.add("active44");
        }
    })
}

//BANNER导航栏效果
{
    let ulist = document.querySelectorAll(".banner_daohang li");
    let listmore = document.querySelectorAll(".listmore");
    // console.log(ulist, listmore);
    ulist.forEach(function (val,index) {
        val.onmouseenter=function () {
            for (i=0;i<listmore.length;i++){
                ulist[i].classList.remove("active33");
                listmore[i].classList.remove("active333");
            }
            this.classList.add("active33");
            listmore[index].classList.add("active333")
        }
        val.onmouseleave=function () {
            this.classList.remove("active33");
            listmore[index].classList.remove("active333");
        }
    })
    // ulist.onmouseenter = function () {
    //     listmore.style.display = "block";
    //     listmore.style.zIndex = 9999999;
    // };
    // ulist.onmouseleave = function () {
    //     listmore.style.display = "none";
    //     listmore.style.zIndex = 0;
    // };

    //

}
