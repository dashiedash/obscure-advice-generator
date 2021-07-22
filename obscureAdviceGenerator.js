const getDate = () => {
   month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   const rawDate = new Date();
   return `Today is ${day[rawDate.getDay()]}, ${rawDate.getDate()} ${month[rawDate.getMonth()]} ${rawDate.getFullYear()}.`
}

const rand = array => Math.floor(Math.random() * array.length);

const getAdvice = () => {
   const verb = [
      "see",
      "witness",
      "eat",
      "drink",
      "write",
      "read",
      "watch",
      "play with",
      "burn",
      "feed",
      "kiss",
      "slap",
      "confess to",
      "cook"
   ];

   const nounObject = [
      "cookies",
      "a cup of coffee",
      "a bowl of fried rice",
      "your ex",
      "your friend",
      "a book by Aristotle",
      "an episode of SpongeBob",
      "your phone",
      "your PC",
      "your parents",
      "your dad",
      "your mom",
      "your brother",
      "your sister",
   ];

   const nounStatus = [
      "rolling around",
      "outside your house",
      "in your bedroom",
      "on the table",
      "flying in mid-air",
      "on your TV",
      "on a plate",
      "eating your food",
      "watching anime",
      "writing a book",
      "lying on the ground",
      "playing Minecraft",
      "smashing your Xbox",
      "doing nothing",
      "in the bathroom"
   ];

   const response = [
      "go to church",
      "sell everything you have",
      "eat them",
      "move to Japan",
      "say goodbye to your family and friends",
      "brag it on social media",
      "go back to sleep",
      "burn them",
      "go shopping",
      "learn programming",
      "get a new one",
      "bake a cake",
      "congratulate them",
      "throw a party"
   ];

   return `When you ${verb[rand(verb)]} ${nounObject[rand(nounObject)]} ${nounStatus[rand(nounStatus)]}, you should ${response[rand(response)]}.`
}

console.log(getDate());
console.log(`Obscure advice for today: ${getAdvice()}`);