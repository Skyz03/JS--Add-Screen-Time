# JS--Add-Screen-Time

This project is the eighteen JS-30 challenge where I learned about ```How to capture the time avaialble in the videos```, ```Convert them in seconds of integer using map function```, ```Math.floor``` , ```Use of Module Operators``` and ```Power of Reduce function ```.


## Demo

[Click Here](https://skyz03.github.io/JS--Add-Screen-Time/)

## Features

- Change of Spacing, Blurness & Color of Image As per input Element.

- Calculation of Total Time in As much videos added in the future.
- Use of data-time or any other related property.
- Use of map function to converte the Node Sets data into integer using ```parse Float``` functionss.
- Use of reduce function to calculate the total amount of values after colletion via map function.
- Use of modulo to calculate the remaning time after converting into hours, mins and seconds.

## Lessons Learned

As this is one of the 18th JS challenge, here I understood about the power of modulo, map, reduce functions to calulate different things such as.

```SELECT THE ELMENT => CHANGE THE DATA WHICH WE GET IN STRING INTO INTEGERS AND REDUCE TO CALCULATE THE TOTAL AMOUNT OF SECONDS => USE THE MODULO FUNCTION AND THEN USE IT TO CALC THE REMANING FROM THE HOURS CALCULATION AND MINS.```.

```
HTML 
<li data-time="5:43">
   Video 1
</li>

JS
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
```

## Optimizations

Showing the total data and changing bit of formats for easy user interface.

## Screenshots
![2022-02-21_17-01-05](https://user-images.githubusercontent.com/42742924/154944975-aff91720-53db-4527-be66-a27567993c9a.png)
![firefox_2022-02-21_16-59-24](https://user-images.githubusercontent.com/42742924/154944715-1dfdf995-0ea6-4dac-ba5d-f91f5747e223.png)

## Tech Stack

**Client:** HTML & JS

## Documentation

Learn more on array map and reduce function to understand more on this topics.
# Notes 
