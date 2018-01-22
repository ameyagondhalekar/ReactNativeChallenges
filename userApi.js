/*
  Follow step by step instructions to complete these 
  multiple challenges related to arrays.
*/

/*
  This require statement conveniently brings in the entire set of user profile
  data for you from a neighbouring file.
  
  You can imagine that this is your network api call delivering you data
*/
const profiles = require("./userData");

/*
  1.1 Check the type of data returned
  Expected output: [object Array] OR true
  hint: google how to find type of data structures in javascript
*/

console.log("profiles is a " + Object.prototype.toString.call(profiles));

/*
  1.2 Log of the size of the data returned
  Expected output: "We just fetched [x] users" where x represents the actual number
*/

console.log("We just fetched "+ profiles.length + " users");

/*
  1.3 Get the first five items from the data set
  Expected output: an array with the first 5 items
*/
var newArrayWithSlicing = profiles.slice(0,5);
var slicedArrayString = "";
for (i = 0; i < newArrayWithSlicing.length; i++) {
  slicedArrayString += JSON.stringify(newArrayWithSlicing[i]) + "\n";
}

console.log(slicedArrayString)
/*
  1.4 Remove the first profile from this data while returning it at the same time
  Expected output: a) user by the name of dânia da mota and b) an array of profiles without dânia da mota 
*/


function runRespectiveLogicAndPrintDataOnConsole(profiles){

  if(profiles.length > 0){

    const firstProfileObject = profiles[0];
    profiles.splice(0,1);   /**** We can use profiles.shift() also which will delete first object only and ultimately othere object rearranged ***/

    console.log("Profiles object removed >> " + JSON.stringify(firstProfileObject))
  }

  

  let profilesArrayString = ""
  for (i = 0; i < profiles.length; i++) {
    profilesArrayString += JSON.stringify(profiles[i]) + "\n";
  }
  
  console.log("\n \n new Profiles array >> " + profilesArrayString)

}

runRespectiveLogicAndPrintDataOnConsole(profiles);
// console.log();
// console.log();

/*
  1.5 Paginate the api results in sets of variable amounts
  Example: Paginate(profiles, 2, 5)
  Expected output: An array of profiles containing items sliced from page 2 to page 3 containing 5 items
*/

function paginate(profiles,page,noOfItems){

    let totalNumberOfPages = Math.trunc(profiles.length / noOfItems)
    if((profiles.length % noOfItems) > 0){
      totalNumberOfPages = totalNumberOfPages + 1;
    }
    console.log("totalNumberOfPages >> " + totalNumberOfPages)

    if(page < totalNumberOfPages){

      for (i = page * noOfItems;i < (page + 1) * noOfItems;i++){

        console.log("\n\n page no >> "+page +" element >> " +i +" object >>" +JSON.stringify(profiles[i]));
      }
      
    }else{

      console.log("page no " + page + " does not exist");
    }
}

paginate(profiles,2,10);
//console.dir();
