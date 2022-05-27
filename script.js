
const day = document.querySelectorAll('.day');
const col = document.querySelectorAll('.col');
const amount = document.querySelectorAll('.amount');

const d = new Date();
let today  = d.getDay();
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

fetch('./data.json')
.then(function(resp) {
    return resp.json();
})
.then(function(data){

    for(let i = 0; i< 7; i++){
        col[i].style.height = (data[i].amount * 2) + 'px';
        amount[i].innerHTML = data[i].amount;
        if(data[i].day == days[today]){
            col[i].style.backgroundColor = 'hsl(186, 34%, 60%)';
        }
        col[i].addEventListener("mouseover", () => {
            amount[i].style.display = 'block';
        });
       
        col[i].addEventListener("mouseout", () => {
            amount[i].style.display = 'none';
        });

        day[i].innerHTML= data[i].day;
    }
   
})
