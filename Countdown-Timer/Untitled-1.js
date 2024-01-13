

var starDate = new Date("23-december-2023").getTime()

var endDate = new Date("24-december-2023").getTime()

// --------------MILLISECONDS-----------------------------------------------------

function millisecondConvert(starDate,endDate)
{
 different = endDate - starDate
 console.log(totalsecond  = different / (1000))
 return totalsecond
}
var y = millisecondConvert(starDate,endDate)

// --------------MINITUES----------------------------------------------------

    function secondConvert(starDate,endDate)
    {
     different = endDate - starDate
     console.log(totalsecond  = different / (1000*60))
     r = setInterval(()=>{
       

     },1000)
    }
    var x = secondConvert(starDate,endDate)
    console.log(x)



    // -------------HOURSE-------------------------------------------------------------------------------

    function hourse(starDate,endDate)
    {
     different = endDate - starDate
     console.log(totalsecond  = different / (1000*60*60))
     return totalsecond
    }
    var z = hourse(starDate,endDate)

// -------------------DAY-------------------------------------------------

    function day(starDate,endDate)
    {
     different = endDate - starDate
     console.log(totalsecond  = different / (1000*60*60*24))
     return totalsecond
    }
    var z = day(starDate,endDate)
 

//  ---------------------YEARS-------------------------------------------------
    
    function years(starDate,endDate)
    {
     different = endDate - starDate
     console.log(totalsecond  = Math.round(different / (1000*60*60*24*365)))
     return totalsecond
    }
    var a = years(starDate,endDate)




