function formatName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
function getGreeting(timeOfDay){
    switch(timeOfDay){
        case "morning":
            return "Good morning"
        case "afternoon":
            return "Good afternoon"
        case "evening":
            return "Good evening"
        default:
            return "Hi"
    }
}

function createGreeting(firstName, lastName, timeOfDay){
    return `${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));