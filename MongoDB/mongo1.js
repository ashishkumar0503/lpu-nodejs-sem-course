// import the MongoClient object from the MOngoDB driver
var MongoClient = require("mongodb").MongoClient;

// The url variable contains the URL of the MongoDB server to connect to.
var url = "mongodb://127.0.0.1:27017";

// The client variable creates a new MongoClient instance with the url
var client = new MongoClient(url);

// The createCollection function is defined with the async keyword
// to allow the use of await inside the function.
async function createCollection() {
  try {
    client.connect(); // client.connect() is called to connect to the MongoDB server.
    
    // The dbo variable is assigned to the db method of the client instance with the database name "db5".
    var dbo = client.db("km031");
    
    // creates a new collection called "student_details" in the "dbo" database using the createCollection method.
    // We use await to pause the execution of the function until the promise is resolved
    await dbo.createCollection("student_details");
    
    console.log("Collection created");
  } catch (err) {
    console.log(err);
  }
  client.close();
}
createCollection();
