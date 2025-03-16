// Time of Day Greeting App - Demonstrates hoisting, scope, and user input handling

let userTime = prompt(
    "What time of the day is it? (morning, afternoon, evening, night)"
  );
  
  // Function hoisting allows calling this function before it's declared
  console.log(getGreeting(userTime)); 
  
  // Function to return a greeting based on time of day
  function getGreeting(timeOfDay) {
    switch (
      timeOfDay.toLowerCase() 
    ) {
      case "morning":
        return "Good morning! Have a great start to your day!";
      case "afternoon":
        return "Good afternoon! Hope you're having a productive day!";
      case "evening":
        return "Good evening! Time to relax and unwind!";
      case "night":
        return "Good night! Sleep well and recharge!";
      default:
        return noInput(); 
    }
  }
  
  
  // Demonstrating function scope
  function noInput() {
    let message = "You are probally in a timeless environment then. "; //function Scope
    if (userTime === "" || !userTime) {
      let message2 = "Bye !!"; // Block-scoped variable
      return(`${message} ${message2}`);
    }
  }
  
  