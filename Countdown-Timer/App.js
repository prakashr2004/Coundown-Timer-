
var starDate = new Date("23-december-2023").getTime()
var endDate = new Date("24-december-2023").getTime()

var second = document.getElementById("second")
console.log(second)
var minitue = document.getElementById("minitue")
var Hourse = document.getElementById("hours")
var differentyears = document.getElementById("year")
var DiffentDay = document.getElementById("DifDay")


// ---------------MINITUE---------------------------------------------------

function secondConvert(starDate,endDate)
{
 different = endDate - starDate
 totalsecond  = different / (1000*60)

console.log(minitue.innerHTML = totalsecond)

 q = setInterval(()=>{

console.log(minitue.innerHTML = --totalsecond)

},60000)
}
var x = secondConvert(starDate,endDate)



// -------------SECONDS-----------------------------------------------------

function TimeSecond(){
    differentTime = endDate-starDate
    Total = differentTime/(1000)
   console.log( second.innerHTML = Total)
    c = setInterval(()=>{
      console.log(  second.innerHTML = --Total)
    },1000)
}
x = TimeSecond(starDate,endDate)

    // -------------HOURSE-------------------------------------------------------------------------------

    function hourse(starDate,endDate)
    {
     different = endDate - starDate
     totaHours  = different / (1000*60*60)
     Hourse.innerHTML = totaHours
     hour = setInterval(()=>{

        Hourse.innerHTML = --totaHours
        
     },3600000)
    }
    var z = hourse(starDate,endDate)

// -------------------DAY-------------------------------------------------

    function day(starDate,endDate)
    {
     different = endDate - starDate
     totalDay  = different / (1000*60*60*24)

     DiffentDay.innerHTML = totalDay

     k = setInterval(()=>{

    DiffentDay.innerHTML = --totalDay
      },86400000 )
    }
    var z = day(starDate,endDate)
 

// //  ---------------------YEARS-------------------------------------------------
    
    function years(starDate,endDate)
    {
     different = endDate - starDate
     totalYear  = Math.round(different / (1000*60*60*24*365))
     differentyears.innerHTML = totalYear
      g = setInterval(() => {
        differentyears.innerHTML = --totalYear
     },31536000000 );
    }
    var a = years(starDate,endDate)
