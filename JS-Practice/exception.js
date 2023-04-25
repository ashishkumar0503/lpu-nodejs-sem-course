const num = 100, den = 'a';

try {
    console.log("Inside try block");
    console.log(num/den);
    console.log(x);
} catch (error) {
    console.log("Inside catch block");
    console.log("An error caught");
    console.error("Error message: " + error);
} finally {
    console.log("Inside finally block");
}