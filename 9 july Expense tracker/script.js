
let amont = document.getElementById('cash');
let des = document.getElementById('des');
let btn = document.getElementById('btn');
let totbal = document.getElementById('tbal');
let income = document.getElementById('Income')
let expense = document.getElementById('Expense')
let list = document.getElementById('lists');

let totalBal = 0;
let Expense=0;
let Income =0;

btn.addEventListener('click',()=>{

    if(amont.value > 0){
         totalBal+=parseInt(amont.value);
         Income+=parseInt(amont.value);
         let it1 = document.createElement('li')
         it1.innerText=` ${des.value}     :  ${amont.value}`
         list.appendChild(it1)
         it1.style.color='green'
         
    }
    else{
        totalBal+=parseInt(amont.value)
        Expense+=Math.abs(parseInt(amont.value));
         let it1 = document.createElement('li')
         it1.innerText=` ${des.value}     :  ${amont.value}`
         list.appendChild(it1)
         it1.style.color='red'
    }
   
    totbal.innerText= `Total Balance : ${totalBal}`
    income.innerText=`Total Income :${Income}`
    expense.innerText=`Total Expense :${Expense}`
})


