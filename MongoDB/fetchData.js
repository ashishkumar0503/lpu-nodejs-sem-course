const MongoClient = require("mongodb").MongoClient;

async function fetchData() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
    useUnifiedTopology: true,
  });
  const dbo = client.db("km031");
  const collection = dbo.collection("student_details");
  const query = {}; // Empty query will fetch all documents in the collection
  const result = await collection.find(query).toArray();
  console.log(result);
  client.close();
}

fetchData();
