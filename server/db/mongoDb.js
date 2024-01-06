import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `MongoDB connected Successfully !--- DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb Connect Failed", error);
    process.exit(1);
  }
};

export default connectDB;
