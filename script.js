const timeNow = document.querySelector('.timeNow');
const startBtn = document.createElement('button');
startBtn.textContent = 'start';
const wrapper = document.querySelector('.wrapper');

let startTime;
let stopTime;

wrapper.insertAdjacentElement('beforeend', startBtn);

const stopBtn = document.createElement('button');
stopBtn.textContent = 'stop';



const start = () => {
    startTime = new Date;
    timeNow.textContent = '';
    wrapper.removeChild(startBtn);
    wrapper.appendChild(stopBtn);
}

const stop = () => {
    stopTime = new Date;
    

    // let firstDate = '23:43';
    let firstDate = `${startTime.getHours()}:${startTime.getMinutes()}`;
    // let secondDate = '04:14';
    let secondDate = `${stopTime.getHours()}:${stopTime.getMinutes()}`;
    let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]);
    let different = (getDate(secondDate) - getDate(firstDate));
    let differentRes, hours, minuts;
    if(different > 0) {
    differentRes = different;
    hours = Math.floor((differentRes % 86400000) / 3600000);
    minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
    } else {
    differentRes = Math.abs((getDate(firstDate) - getDate(secondDate)));
    hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
    minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
    }
    let result = hours + ':' + minuts;

    if (result === '24:60') result = 'Less then a minute'
    timeNow.textContent = result
    wrapper.removeChild(stopBtn);
    wrapper.insertAdjacentElement('beforeend', startBtn);
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);