// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll","car"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}


const writeCards = (names,event) => {
    const messages = []
    for(let i = 0; i < names.length;i++) {
        
           const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
          
    }
   
    return messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown (number){

    while (number <=10 && number >= 0){
        console.log (number)
        number -- ;
    }


}
