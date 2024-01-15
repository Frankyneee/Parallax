document.addEventListener("DOMContentLoaded", function () {
    const bigText = document.querySelector(".parallaxText");
    const background = document.querySelector(".background");
    const totoro = document.getElementById("totoro");
    const popupTotoro = document.querySelector(".popupTotoro");
    const activeIndicator = document.querySelectorAll(".element");
    const activeSideBar = document.querySelector(".sideBarArrow");
    const sideBarMenu = document.querySelector(".sideBarMenu");
    const sideBarMenuElement = document.querySelectorAll(".sideBarMenu ul li p");
    const sideBarMenuSeacrch = document.querySelector(".sideBarMenu ul li input");
    const insideBorderToggle = document.querySelector(".insideBorderToggle");
    const outsideBorderToggle = document.querySelector(".outsideBorderToggle");
    const dateTime = document.querySelector(".dateTime");
    const onTop=document.querySelector(".onTop");


            //SCROLL - ON - TOP
    onTop.addEventListener("click",()=>{
            window.scrollTo(0,0);
    })

    //SCROLL PARALLAX
    window.addEventListener("scroll", () => {
        background.style.backgroundSize = `${(window.scrollY * 1.8 + 1600)}px`
        bigText.style.opacity = `${(-window.scrollY + 300) + .004}`
        totoro.style.opacity = `${(-window.scrollY + 300) + .004}`
        totoro.style.transition = ".4s";
        popupTotoro.style.opacity = `${(-window.scrollY + 300) + .004}`
        // sideBarMenu.style.opacity = `${(-window.scrollY + 300) + .004}`
    });

    //ACTIVE SIDEBAR
    activeSideBar.addEventListener("click", function () {
        sideBarMenu.classList.toggle("active");
        activeSideBar.classList.toggle("active");
        for (var i = 0; i < sideBarMenuElement.length; i++) {
            sideBarMenuElement[i].classList.toggle("active")
        }
        sideBarMenuSeacrch.classList.toggle("active");
        outsideBorderToggle.classList.toggle("active");

    })

    //DARK MODE
    insideBorderToggle.addEventListener("click", () => {
        insideBorderToggle.classList.toggle("active");
        console.log("da kich");
    })


    window.setInterval(() => {
        var HoursDisplay = document.getElementById("hoursDisplay");
        var MinsDisplay = document.getElementById("minsDisplay");
        var SecsDisplay = document.getElementById("secsDisplay");

        var now = new Date();
        hours = now.getHours();
        mins = now.getMinutes();
        secs = now.getSeconds();
        HoursDisplay.innerHTML = hours;
        MinsDisplay.innerHTML = mins;
        SecsDisplay.innerHTML = secs;

        const secsValidate = function secsCount(secs) {
            if (secs < 10) {
                SecsDisplay.innerHTML = `0${secs}`;
            }
        }
        const minsValidate = function secsCount(mins) {
            if (mins < 10) {
                MinsDisplay.innerHTML = `0${mins}`;
            }
        }
        const hoursValidate = function secsCount(hours) {
            if (hours < 10) {
                HoursDisplay.innerHTML = `0${hours}`;
            }
        }
        hoursValidate(hours); minsValidate(mins); secsValidate(secs);
    }, 1000)

        
                                                    //TASK-TODO-LIST
        const addTaskButton=document.querySelector(".plus");
        addTaskButton.addEventListener("click",function(){
    const todoInput=document.getElementById("todoInput");
    const taskList=document.querySelector(".taskList");
    if(todoInput.value.trim()=== ""){
        alert("Please Enter Task!")
        return;
    }

    const newLi = document.createElement("li");
    newLi.textContent=todoInput.value;
    taskList.appendChild(newLi);


    const deleteLi=document.createElement("button");
    deleteLi.textContent="DEL";
    taskList.appendChild(deleteLi);
    deleteLi.addEventListener("click",function(){
        taskList.removeChild(newLi);
        taskList.removeChild(deleteLi);
    })
    
    todoInput.value="";
})


                                                                //CACULATOR
 const caculatorHeadForm=document.querySelector(".caculatorHeadForm");
const btn = document.querySelectorAll(".btn");
    for(var number of btn){
        number.addEventListener("click",function(){
            caculatorHeadForm.innerHTML+=this.value;
        });
    }

    const clean=document.getElementById("clean");
    clean.addEventListener("click",()=>{
        caculatorHeadForm.innerHTML="";
    })

    const del=document.getElementById("del");
    del.addEventListener("click",()=>{
        var res=caculatorHeadForm.innerHTML;
        caculatorHeadForm.innerHTML=res.substring(0,res.length-1);
    })

    const equal=document.getElementById("equal");
    equal.addEventListener("click",()=>{
        var res=caculatorHeadForm.innerHTML;
        var newRes=eval(res);
        caculatorHeadForm.innerHTML=newRes;
  })



})