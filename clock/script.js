const display = document.getElementById("centered-div");


function update(){
    const  date = new Date();
    let hours = date.getHours();
    let amPm = hours>12 ? "PM" :  "AM";
    const hour = (hours%12).toString().padStart(2,0);
    const min = date.getMinutes().toString().padStart(2,0);
    const sec =  date.getSeconds().toString().padStart(2,0);

    const time = `${hour}:${min}:${sec} ${amPm}`;
    display.textContent = time;


}
update();4
setInterval(update,1000);

