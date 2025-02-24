exports.connectDB = async () => {
  let client = await MongoClient.connect("mongodb://localhost:27017");
  let database = client.db("users");
  let collection = await database.createCollection("usersInfo");

  return collection;
};
