import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/mongoDb.js";

const PORT = process.env.PORT || 4000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb Connection Failed: ", err);
  });
