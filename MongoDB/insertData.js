var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";
var client = new MongoClient(url);
async function createCollection() {
  try {
    client.connect();
    var dbo = client.db("km031");
    var myobj = [
      { name: "Ashish", course: "React js", marks: 90},
      { name: "Manoj", course: "Node js", marks: 78 },
      { name: "Anuj", course: "HTML", marks: 45 },
      { name: "Shalini", course: "HTML", marks: 90 },
      { name: "Ankit", course: "Node js", marks: 67 },
      { name: "Prakash", course: "CSS", marks: 97 },
      { name: "Rajneesh", course: "CSS", marks: 54 },
      { name: "Rashi", course: "React js", marks: 82 },
      { name: "Sameer", course: "React js", marks: 23 },
      { name: "Rahul", course: "JavaScript", marks: 55 },
      { name: "Richa", course: "Vanilla js", marks: 73 },
    ];
    await (dbo.collection("student_details")).insertMany(myobj);

    console.log("Collection created");
  } catch (err) {
    console.log(err);
  }
  client.close();
}
createCollection();
