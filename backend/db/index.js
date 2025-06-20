import mongoose from "mongoose";

const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}`
    );
    console.log(" \nConnected to MongoDB:", connect.connection.host);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default mongoDB;