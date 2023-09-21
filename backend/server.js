import express from 'express';
import fs from 'fs/promises';

const app = express();
const port = 3000;

app.get('/api/products', async (req, res) => {
  try {
    const data = await fs.readFile('db.json', 'utf8');
    const products = JSON.parse(data).products;
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});