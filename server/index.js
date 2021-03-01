import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import postCategoryRoutes from './routes/postCategories.js'
import userRoutes from './routes/user.js'
import skillsRoutes from './routes/skills.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use(express.static('public'));

app.use('/posts', postRoutes)
app.use('/posts/categories', postCategoryRoutes)
app.use('/user', userRoutes)
app.use('/skills', skillsRoutes)

app.get('/', (req, res) => {
    res.send('Index Page')
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

