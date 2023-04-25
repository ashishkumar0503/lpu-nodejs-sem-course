const abc = (name, callback) => {
    console.log(`Hello ${name}`);
    callback();
}

const abcd = () => {
    console.log("Hello");
}

abc("Ashish", abcd);