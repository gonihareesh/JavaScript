let date=new Date();

//year,month,day,hour,min,sec,millisecond
//let date=new Date(2023,0,1,22,36,58,25);
/*let year=date.getFullYear();
let month=date.getMonth();
let day=date.getDate();
let hours=date.getHours();
let min=date.getMinutes();
let seconds=date.getSeconds();*/

/*date.setFullYear(2024);
date.setMonth(1);
date.setDate(28);
date.setHours(20);
date.setMinutes(15);
date.setSeconds(54);
date.setMilliseconds(0);*/

//date=date.toLocaleString();
function formatDate(){
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    return `${year}/${month}/${day}`;
}
function formatTime(){
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let meridiem=hours >= 12 ?"pm":"am";
hours=(hours%12)||12;
return `${hours}:${minutes}:${seconds} ${meridiem}`;
}
console.log(formatTime());
console.log(formatDate());
