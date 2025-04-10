const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const minuteText = document.querySelector(".minute");
const hoursText = document.querySelector(".hours");

for (let i = 0; i < 60; i++) {
    const mSpikeEl = document.createElement("i");
    const sSpikeEl = document.createElement("i");

    mSpikeEl.className = "spike";
    sSpikeEl.className = "spike";

    mSpikeEl.style = `--rotate: ${i * 6}deg`;
    sSpikeEl.style = `--rotate: ${i * 6}deg`;

    mSpikeEl.setAttribute('data-i', i);
    sSpikeEl.setAttribute('data-i', i);

    minutes.append(mSpikeEl);
    seconds.append(sSpikeEl);
}

let secondAngle = 0;
let minuteAngle = 0;

function getTime() {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();

    hoursText.textContent = h.toString().padStart(2, '0');
    minuteText.textContent = m.toString().padStart(2, '0');

    if (s === 0) {
        minuteAngle += 6;
    }

    minutes.style = `--dRotate: ${minuteAngle}deg`;

    secondAngle = s * 6; // make it accurate even if delayed
    seconds.style = `--dRotate: ${secondAngle}deg`;
}

getTime();
setInterval(getTime, 1000);
