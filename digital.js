const clock = document.querySelector('#clock')
const dates = document.querySelector('#date')
// console.log(clock);

// let date = new Date()
// console.log(date);

setInterval(() => {
    let date = new Date()

    clock.innerHTML = date.toLocaleTimeString();
    dates.innerHTML = date.toLocaleDateString();
},1000);