import express from 'express';
import Party from 'Controllers/partyController';
import Office from 'Controllers/officeController';

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    return res.json({'message' : 'Welcome to Politico Platform'});
});
app.post('/api/v1/parties', Party.create);
app.post('/api/v1/offices', Office.create);
app.get('api/v1/offices', Office.getAllOffices);
app.get('/api/v1/parties', Party.getAllParties);

const port = PROCESS.env.PORT || 3000;

app.listen(port, () => {
    console.log(`You are running on port ${port}`);
});

export default app;