// Selecting all the elements that has the attiribute data time in html 
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// First map getting the data in strings second one is destructuring it into diffrent own varialbes such as mins and secs. 
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    //Parse float is converting that into ... integer as they are strings and keeping them in seprate variable..
    return (mins * 60) + secs;
    // this one is combining each mins and secs of value into one for each individual set of video
  })

  //This reduce is doing the total of each sets of mins and secs into one complete value.
  .reduce((total, vidSeconds) => total + vidSeconds);



// This section is about converting the whole seconds into one hours minutes and seconds as per required 

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / (60 * 60)); //seconds divided by 60 into mins then divided by 60 takes it to hours.

// The modulo is capturing the value after how many hours is calculated

// Same goes with minutes and seconds 
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(seconds);
console.log(hours, mins, secondsLeft);



