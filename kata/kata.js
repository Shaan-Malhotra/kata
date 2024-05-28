function greet(name) {
    if (!name) {
        return "Hello my friend";
    } else {
        let message = "Hello " + name;
        return message;
    }
}

module.exports = greet;