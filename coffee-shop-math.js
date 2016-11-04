var SalesWeek = require("./SalesWeek.js");

function calculateWeeklySales(SalesWeek) {
        console.log(SalesWeek.sunday
        + SalesWeek.monday 
        + SalesWeek.tuesday 
        + SalesWeek.wednesday 
        + SalesWeek.thursday 
        + SalesWeek.friday 
        + SalesWeek.saturday);
} 
    
    SalesWeek.monday = 111;
    SalesWeek.tuesday = 108;
    SalesWeek.wednesday = 143;
    SalesWeek.thursday = 220;
    SalesWeek.friday = 238;
    SalesWeek.saturday = 301;
    SalesWeek.sunday = 201;



// call function to calculate weekly sales
calculateWeeklySales(SalesWeek);


var a = 1;
