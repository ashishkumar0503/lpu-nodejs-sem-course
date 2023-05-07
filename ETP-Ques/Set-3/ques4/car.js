// Q4 a) Implement a Node.js application to connect with MongoDB to Create a 
// database and add car collection with the fields- Model, Company, Mileage, colour, and Owner. 
// Add multiple documents with Employee data. Finally, Query the above collection to find employees 
// with more than a specific salary and display it in the console window. 

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/car")
.then(() => console.log('Connected successfully...'))
.catch((err) => console.log(err));

// schema
const carSchema = new mongoose.Schema({
    model: String,
    company: String,
    mileage: Number,
    color: String,
    owner: String
});

// collection creation
const CarsInfo = new mongoose.model("CarsDetails", carSchema);

// create document
const creatDocument = async () => {
    try {
        const car1 = new CarsInfo({
            model: "Audi",
            company: "Audi",
            mileage: 150,
            color: "Black",
            owner: "Ashish"
        });
        const car2 = new CarsInfo({
            model: "BMW",
            company: "BMW",
            mileage: 155,
            color: "Red",
            owner: "Happy"
        });
        const car3 = new CarsInfo({
            model: "Ferrari",
            company: "Ferrari",
            mileage: 190,
            color: "Yellow",
            owner: "Rahul"
        });

        const result = await CarsInfo.insertMany([car1, car2, car3]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// creatDocument();

const getDocument = async () => {
    try {
        // const result = await Course.find();
        // const result = await Course.find({type: "Front End"});
        const result = await CarsInfo.find({mileage: {$gt: 150}})
        console.log(result);   
    } catch (error) {
        console.log(error);
    }
};

getDocument();