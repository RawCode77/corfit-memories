// import bodyParser from 'body-parser';
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

// Create an instance of express app
const app = express();



// app.use(bodyParser.json({ limit: '30mb', extend: true }));
// app.use(bodyParser.urlencoded({ limit: '30mb', extend: true }));

// Express now provides a way to parse json and urlencoded payloads
// without the need for body-parser package.
app.use(express.json({ limit: "30mb", extend: true })); // Used to parse JSON bodies
app.use(express.urlencoded({ limit: "30mb", extended: true })); // Used to parse URL-encoded bodies

// Apply cors middleware to enable CORS
app.use(cors());
app.use("/posts", postRoutes);
const CONNECTION_URL =
  "mongodb+srv://corfitmemories:rawcode77@cluster0.khacoso.mongodb.net/?retryWrites=true&w=majority";

// Starting the server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
