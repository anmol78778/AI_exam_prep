import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDb from './utils/connectDb.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import notesRouter from './routes/generate.route.js';
dotenv.config();

const app = express();

app.use(cors(
    {origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    }
));
// console.log(process.env.GEMINI_API_KEY)
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/notes", notesRouter)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb();
});

