function greet(name) {
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

module.exports = greet;