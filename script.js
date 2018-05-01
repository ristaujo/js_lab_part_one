let choice = prompt("Do you want to play?");
if (choice === "yes") {
  let userName = prompt("What is your name?");
  let userHealth = 40;
  let grantHealth = 10;
  
  let userWins = 0;
  let grantWins = 0;
  
  while (userHealth > 0 && grantHealth > 0) {
    userHealth -= Math.floor((Math.random() * 2) + 1);
    grantHealth -= Math.floor((Math.random() * 2) + 1);
  
    console.log(` ${userName}'s health is ${userHealth}`)
    console.log(` Grant's health is ${grantHealth}`)
  
  
    if (grantHealth <= 0) {
      userWins ++;
      grantHealth = 10;
      console.log("Grant is defeated and user get " + userWins + "win")
    } if (userWins === 3) {
      console.log(`${userName} is the winner!`);
      break;
    }
    if (userHealth <= 0) {
      console.log("Grant is the winner");
      break;
    }
    
  }


}