import express from 'express';
import Party from 'Controllers/patyController';

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    return res.json({'message' : 'Welcome to Politico Platform'});
});
app.post('/api/v1/parties', Party.create);

const port = PROCESS.env.PORT || 3000;

app.listen(port, () => {
    console.log(`You are running on port ${port}`);
});

export default app;
