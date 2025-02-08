db.teachers.insertOne({ name: "sashi", age: 37, skills: ["html", "css", "js"] });
db.teachers.insertOne({ name: "san", age: 24, skills: ["html", "css", "js", "react"] });
db.teachers.insertOne({ _id: 123456, name: "ashwin" });

db.users.insertMany([
  { name: "ashwin", age: 24, gender: "M" },
  { name: "bhumika", age: 26, gender: "F" },
  { name: "pawan", age: 23, gender: "M" },
]);

db.users.updateOne(
  { name: "shiva" },
  { $set: { age: 26, name: "k shiva", skills: ["html", "css", "js"] } },
  { upsert: false }
);
