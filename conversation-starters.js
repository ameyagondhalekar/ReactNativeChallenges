/* 
  Here are two profile objects 
  Your challenge is to write a function called `createConversationStarters`
  that will parse these objects and match up common attributes,

  The expected output of this function can be an array or string that says something like:
  `You both live in mumbai
  she is from the Marathi community as well`

  Hint: you can use using object access syntax, 
  basic conditionals and array manipulation to solve this challenge
*/

const me = {
  name: "Amit",
  neverMarried: true,
  age: 42,
  education: "Masters - Management",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my Son. He has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Veg"
};

const partner = {
  name: "Savita",
  neverMarried: false,
  age: 41,
  education: "Masters - Marketing",
  community: "Marathi",
  bio:
    "I am putting up this profile on behalf of my daughter. She has done her Masters from Nagpur",
  location: {
    street: "6928 bahnhofstraße",
    city: "mumbai",
    state: "berlin",
    postcode: 47868
  },
  cuisine: "Non-Veg"
};

/* 
  Start writing function here
*/
function createConversationStarters(me,partner){

  const conversationStarters = [];

  if (me.location.city === partner.location.city){

      conversationStarters.push("You both live in " + me.location.city);

  }

  if (me.community === partner.community){

    conversationStarters.push("She is from the " + me.community + " community as well.");

  }


  console.log(conversationStarters);

};

createConversationStarters(me,partner)

