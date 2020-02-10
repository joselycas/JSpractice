const d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds(); // => 51

let dog = new Object()
dog.breed = "Poodle"
dog.age = 1
dog.name = "Bruno"
dog.feed = new Date().toLocaleTimeString()
dog.feedAmt = [1 + " cup " + new Date().toLocaleTimeString(), 2 + " cups " + new Date().toLocaleTimeString()]
dog.outside = d.getMinutes()
dog.outsideBus = "pee"

console.log("assign a new key and create new object", Object.assign(dog, {hobby:'sleep'}, {naptime:"2"}));

console.log("retieve the values of a object",Object.values(dog));