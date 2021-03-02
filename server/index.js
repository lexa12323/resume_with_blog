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

app.use('/sources', express.static('public'));

app.use('/api/posts', postRoutes)
app.use('/api/posts/categories', postCategoryRoutes)
app.use('/api/user', userRoutes)
app.use('/api/skills', skillsRoutes)

//TODO sync routes with frontend or separate to different apps
app.get('/*', function (req, res) {
  res.sendFile(path.join(path.resolve(), '../client', 'build',  'index.html'));
});

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

