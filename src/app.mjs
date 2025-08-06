import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello, World');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Listening on port', PORT));
