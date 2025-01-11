import dotenv from 'dotenv';
import express from 'express';
import router from './routes/router.js';
import invalidPathRouter from './routes/invalid.js'

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
app.use(invalidPathRouter);

const start = async () => {
  try {
    await app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
      });
  } catch (error) {
    console.log(error);
  }
};

start();
