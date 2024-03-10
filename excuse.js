
let generarExcusa = () => {
    
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car","the ball"];
    let when = ["before the class", "right on time", "when I finished","during my lunch","while I was praying"];

    const getRandomExcuse = (array) =>array[Math.floor(Math.random() *array.length)];
        
    return `${getRandomExcuse(who)}${getRandomExcuse(action)} ${getRandomExcuse(what)} ${getRandomExcuse(when)}`
    
}


