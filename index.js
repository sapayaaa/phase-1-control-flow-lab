function scuberGreetingForFeet(r){
  // Write your code here*/
  
  if (r <=400) {
    return 'This one is on me!';
  }
  else if(r>2500) {
    return 'No can do.';
  }
  else if(r>2000) {
    return 'I will gladly take your thirty bucks.';
  }
  }
  
  function ternaryCheckCity(city) {
    // Write your code here!
    return city === "NYC"? 'Ok, sounds good.':'No go.';
  }
  function switchOnCharmFromTip(tip) {
    // Write your code here!
    switch (tip) {
      case "generous":
        return "Thank you so much."
        
      case "not as generous":
        return "Thank you."
  
      default:
        return "Bye."
        
    }
  }