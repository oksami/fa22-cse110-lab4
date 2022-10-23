const interval = setInterval(func, 1000)
function func(){
    d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}