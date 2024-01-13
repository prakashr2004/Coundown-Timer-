// var second = document.getElementById("second")
// var minitue = document.getElementById("minitue")
// var hourse = document.getElementById("hours")
// var day = document.getElementById("DifDay")
// var year = document.getElementById("year")
// var inputBox = document.getElementById("inputBox").value


// function TimerCount(){


// }


var startDate = new Date("march-26-2003").getTime()
// var endDate = new Date("march-27-2003").getTime()

// var deffrend = endDate-startDate

// var second = deffrend/(1000)
// var minitue = deffrend/(1000*60)
// var hour = deffrend/(1000*60*60)
// var day = deffrend/(1000*60*60*24)

// var countDown = setInterval(()=>{
    
//   timeSecond  = setInterval(() => {
//     --second
//   }, 1000);

//   timeMinitue = setInterval(() => {
//    console.log(--minitue)
//   },60000);


// },1000)






var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
console.log(hours)
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);