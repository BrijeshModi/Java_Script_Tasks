

//14. Given a birth date , find how many days the person has lived.

let obj = {
    today : new Date(),
    leapYearCounter : 0,
    TotalNoOfDaysWithoutLeapYear : 0,
    //birthday :new Date('january 09, 1979 23:15:30'),
    NumberDaysWithoutLeapYear : function (birthdate)
    {
        
        currentYear = obj.today.getFullYear();
        var currentYearValue = obj.today.valueOf();
        //console.log(currentYearValue);
        
        birthYear = birthdate.getFullYear();
        var birthYearValue = birthdate.valueOf();
        //console.log(birthYearValue);
        
        obj.TotalNoOfDaysWithoutLeapYear =  obj.TotalNoOfDaysWithoutLeapYear + Math.floor((((currentYearValue -birthYearValue)/1000)/3600)/24)
        //console.log(obj.TotalNoOfDaysWithoutLeapYear);
    
    },
    NumberOfLeapYear : function(currentYear, birthYear)
    {
        let result = 0;
        if( currentYear>0 && birthYear>0)
        {
         result =  currentYear-birthYear;
        for (i=0; i<result; i++)
         {
         let leapCheck = (birthYear % 4 == 0);
        if (leapCheck)
        {
            obj.leapYearCounter = obj.leapYearCounter + 1;
        }
         birthYear++;
        }
           //console.log(obj.leapYearCounter); 
    }
        
    }
    
};

obj.NumberDaysWithoutLeapYear(new Date('2020/08/07 14:43:30'));
obj.NumberOfLeapYear(currentYear,birthYear);
var TotalnumberOfDaysPersonLived = obj.leapYearCounter + obj.TotalNoOfDaysWithoutLeapYear;
console.log("Total Numeber of Days Person Lived"+ " " +TotalnumberOfDaysPersonLived);
