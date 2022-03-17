// Code your solutions in this file
function writeCards(names, eventName) {
    let messageArray = [];
    let message = "";
    for (let i = 0; i < names.length; i++) {
        message = `Thank you, ${names[i]}, for the wonderful surprise visit!`;
        console.log(message);
        messageArray.push(message);
        console.log(messageArray);

    };
    console.log("going out loop")

    console.log(messageArray);
    return messageArray;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }
}

countDown(10);