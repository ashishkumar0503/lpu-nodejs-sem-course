const mongoose = require('mongoose');

// db creation
mongoose.connect("mongodb://127.0.0.1:27017/studentInfo")
.then(() => console.log('Connected Successfully...'))
.catch((err) => console.log(err));

// schema creation
const infoSchema = new mongoose.Schema({
    sid: Number,
    name: String,
    subject: String,
    branch: String,
    marks: Number,
});

// collection creation
const StudentInfo = new mongoose.model("StudentDetails", infoSchema);

// document creation
const createDocument = async () => {
    try {
        const student1 = new StudentInfo({
            sid: 1,
            name: 'Ashish Kumar',
            subject: 'Nodejs',
            branch: 'CSE',
            marks: 95,
        });
        const student2 = new StudentInfo({
            sid: 2,
            name: 'Happy',
            subject: 'Pharmacology',
            branch: 'B.Pharma',
            marks: 85,
        });
        const student3 = new StudentInfo({
            sid: 3,
            name: 'Rahul Kumar',
            subject: 'DSA',
            branch: 'CSE',
            marks: 90,
        });

        const result = await StudentInfo.insertMany([student1, student2, student3]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// createDocument();

// get document
const getDocument = async () => {
    try {
        const result = await StudentInfo.find()
        .sort({marks: 1})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

getDocument();

