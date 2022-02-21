const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / (60 * 60)); //seconds divided by 60 into mins then divided by 60 takes it to hours.

secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(seconds);
console.log(hours, mins, secondsLeft);



