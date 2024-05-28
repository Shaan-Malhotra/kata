function isUpperCase(string) {
    return (string.toUpperCase() === string)
}

function greet(name) {
    if (Array.isArray(name)) {
        if(name.some((name) => isUpperCase(name))) {
            lowerCaseNames = [];
            upperCaseNames = [];

            //separate upper and lowercase names
            name.forEach((name) => {
                if (isUpperCase(name)) {
                    upperCaseNames.push(name);
                } else {
                    lowerCaseNames.push(name);
                }
            })
            console.log('uppercase ', upperCaseNames, '\n', 'lowercase ', lowerCaseNames)
            return `Hello, ${lowerCaseNames[0]} and ${lowerCaseNames[1]}. AND HELLO ${upperCaseNames[0]}!`

        } else if (name.length === 2) {
            return `Hello ${name[0]} and ${name[1]}`
        }
        else if (name.length === 3) {
            return `Hello ${name[0]}, ${name[1]}, and ${name[2]}`
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