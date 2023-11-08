const timeNow = document.querySelector('.timeNow');


const startBtn = document.createElement('button');
startBtn.textContent = 'start';
const stopBtn = document.createElement('button');
stopBtn.textContent = 'stop';

const wrapper = document.querySelector('.wrapper');


wrapper.insertAdjacentElement('beforeend', startBtn);


let startTime;
let stopTime;



const start = () => {
    startTime = new Date;
    timeNow.textContent = 'started...';
    wrapper.removeChild(startBtn);
    wrapper.appendChild(stopBtn);
}

const stop = () => {
    stopTime = new Date;
    let firstDate = `${startTime.getHours()}:${startTime.getMinutes()}`;
    let secondDate = `${stopTime.getHours()}:${stopTime.getMinutes()}`;    
    let result = countDiff(firstDate, secondDate);

    if (result === '24:60') result = 'Less then a minute';

    timeNow.textContent = result;

    startBtn.textContent = 'start again';

    wrapper.removeChild(stopBtn);
    wrapper.insertAdjacentElement('beforeend', startBtn);
}


const countDiff = (firstDate, secondDate) => {
    let result;
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
    return result = hours + ':' + minuts;
}


startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);