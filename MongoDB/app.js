const mongoose = require('mongoose');

// connection creation and creating a new db if not created
mongoose.connect("mongodb://127.0.0.1:27017/college")
.then(() => console.log('Connected Successfully'))
.catch((err) => console.log(err));

// schema
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    rating: Number,
    active: Boolean,
});

// model

// collection creation
const Course = new mongoose.model("CollegeCourse", courseSchema);

// create document or insert
const createDocument = async () => {
    try {   
        const reactjsCourse = new Course({
            name: "React JS",
            type: "Front End",
            rating: 4,
            active: true,
        });
        const jsCourse = new Course({
            name: "Javascript",
            type: "Front End",
            rating: 5,
            active: true,
        });
        const mongoCourse =  new Course({
            name: "Mongo DB",
            type: "Database",
            rating: 4,
            active: true,
        });
        const expressCourse = new Course({
            name: "Express JS",
            type: "Back End",
            rating: 4,
            active: true,
        });

        // const result = await nodejsCourse.save();
        const result = await Course.insertMany([reactjsCourse, jsCourse, mongoCourse, expressCourse]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// createDocument();

const getDocument = async () => {
    try {
        // const result = await Course.find();
        // const result = await Course.find({type: "Front End"});
        const result = await Course.find({type: "Front End"})
        .select({name: 1})
        .limit(1);
        console.log(result);   
    } catch (error) {
        console.log(error);
    }
};

// getDocument();

// update the document
const updateDocument = async (_id) => {
    try {
        // const result = await Course.updateOne({_id}, {
        //     $set: {
        //         name: "Mongo DB"
        //     }
        // });
        const result = await Course.findByIdAndUpdate({_id}, {
            $set: {
                name: "MongoDB"
            }
        }, {new: true, useFindAndModify: false});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// updateDocument("644bd395825bcecfee290bc3");

const deleteDocument = async (_id) => {
    try {
        // const result = await Course.deleteOne({_id});
        const result = await Course.findByIdAndDelete({_id});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

deleteDocument("644bd13ba94abc3af6170219");