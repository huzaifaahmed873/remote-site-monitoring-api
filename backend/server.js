import cookieParser from "cookie-parser";
import  express  from "express";
import cors from 'cors';

import authRoutes from "./routes/auth.js";
import valueRoutes from "./routes/values.js"

const app = express();
const corsOptions = {
  origin: '*'
}



app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/values", valueRoutes);

const BEPORT = process.env.BEPORT || 8800;
app.listen(BEPORT, () => {
    console.log("Server is running on PORT: " + BEPORT);
  });