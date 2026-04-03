let btnc = document.querySelectorAll(".btnc"    );

btnc.forEach((btnc) => {


     btnc.addEventListener('click', () => {
    btnc.innerText = "ordered";
    alert("your order is successful");
    btnc.disabled = true;
    
     btnc.style.backgroundColor = "gray";
     btnc.style.color = "white";
     btnc.style.cursor = "not-allowed";

})
});




let min = 2;
let sec = 0;

let timer = document.getElementsByClassName("timer")[0];

timer.style.color="red"
timer.innerHTML = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)
function run() {
   
   
             if (sec === 0 && min === 0) {
        timer.innerHTML = "missd sale ";
        timer.style.color = "red";
        return;
    }  if (sec === 0) {
     min--;
     sec = 59;}
    else {
        sec--;
    }


    timer.innerHTML =  "Sales End In: " + (min < 10 ?"0" +min : min) + ":" + (sec < 10 ? "0" + sec : sec)
    timer.style.color="red"
}
setInterval(run, 1000)