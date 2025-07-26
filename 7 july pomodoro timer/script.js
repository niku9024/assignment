let min = document.getElementById("min");
let sec = document.getElementById("sec");
let strt = document.getElementById("strt");
let stp = document.getElementById("stp");
let rst = document.getElementById("rst");

let sb = document.getElementById('sb');
let lb = document.getElementById('lb');
let pomo = document.getElementById('pomo');



// ===========================
// 📘 short long
// ===========================

// short break

sb.addEventListener('click',()=>{
    document.body.style.backgroundColor='powderblue';
    mnt=5;
    min.innerText=`0${mnt}`
    sec.innerText = `0${0}`;
    clearInterval(ids);
    s=59;

})



lb.addEventListener('click',()=>{
    document.body.style.backgroundColor='#94B4C1';
    mnt=15;
    min.innerText=`${mnt}`
    sec.innerText = `0${0}`;
    clearInterval(ids);
    s=59;

})



// ===========================
// 📘 end long short
// ===========================

let s = 59;
let mnt = 25;
let lds;


// ===========================
// 📘 pomodore
// ===========================

pomo.addEventListener('click',()=>{
    document.body.style.backgroundColor='#c0c9ee';
    mnt=25;
    min.innerText=`${mnt}`
    sec.innerText = `0${0}`;
    clearInterval(ids);
    s=59;

})



let fun = function () {
     let cp_mnt=mnt
  ids = setInterval(() => {
    if (s == 59) {
      min.innerText = `${--cp_mnt}`;
    }
    sec.innerText = `${s--}`;

    if (s == -1) {
      s = 59;
    }

    
  }, 1000);
};

strt.addEventListener("click", fun);

stp.addEventListener("click", () => {
  clearInterval(ids);
});

rst.addEventListener("click", () => {
  mnt = `${mnt}`;
  sec.innerText = `0${0}`;
  min.innerText = `${mnt}`;
  clearInterval(ids);
  s = 59;
});



