import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//import config from 'config';
import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://localhost:pbIQLy8BDOfvvmPN@cluster0.0wdf5.mongodb.net/resume_with_blog';
const PORT = process.env.port || 5000


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

