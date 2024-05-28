function greet(name) {
    if (Array.isArray(name)) {
        if(name.length === 2) {
            return `Hello ${name[0]} and ${name[1]}`
        }
    } else {
        if (!name) {
            return "Hello my friend";
        } else if (name === name.toUpperCase()) {
            return "HELLO " + name;
        }
        else {
            let message = "Hello " + name;
            return message;
        }
    }
}

module.exports = greet;