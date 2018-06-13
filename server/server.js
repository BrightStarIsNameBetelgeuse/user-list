import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/users', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));