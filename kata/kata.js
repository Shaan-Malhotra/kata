function isUpperCase(string) {
    return (string.toUpperCase() === string)
}

function twoNames(twoNames) {
    if (twoNames.includes(",")) {
        temp = twoNames.split(',');

        return temp;

    }
}

function greet(name) {
    if (Array.isArray(name)) {
        if (Array.isArray(twoNames(name[1]))) {
            if (name.some((currentName) => currentName.includes('"'))) {
                return `Hello, ${name[0]} and ${name[1].replace(/"/g, '')
                    }.`
            }
            name.push(twoNames(name[1])[0]);
            name.push(twoNames(name[1])[1].trim());
            name.splice(1, 1);
        }
        if (name.some((name) => isUpperCase(name))) {
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