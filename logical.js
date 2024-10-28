
//**************************************************************
var age=20;
var citizenship=true
if(age>=18 && (citizenship==true))
    {
    console.log("can vote")
}
else{
    console.log("can,t vote")
}

// o/p: 
// PS C:\java script> node switch.js
// can vote
// **********************************************************************
var age=20;
var haaInvitation=true
if(age>=21 ||(haaInvitation==true))
    {
    console.log("canEnterClub")
}
else{
    console.log("cannotEnterClub")
}
// o/p:
// PS C:\java script> node switch.js
// can vote
// **********************************************************************
var age=70;
var isMember=false
if(age>=66 || (isMember==true))
    {
    console.log("isEligibleForDiscount")
}
else{
    console.log("isNotEligibleForDiscount")
}
// o/p:
// PS C:\java script> node switch.js
// isEligibleForDiscount


// **********************************************************************
var gpa="3.6"
var extraCurricular=true
var recommendation=false
if(gpa>="3.5"&& extraCurricular==true||recommendation==false){
    console.log("isEligibleForSchlorship")
}
else{
    console.log("isNotEligibleForSchlorship")
}

// o/p:
// PS C:\java script> node switch.js
// isEligibleForSchlorship