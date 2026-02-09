// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log("Connecting to MongoDB with URI:", uri);
if (!uri) {
  throw new Error("Please, define environment variable MONGODB_URI in .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;


if (process.env.NODE_ENV === "development") {
  // Avoid multiple connections in development by using a global variable
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production: direct connection
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
