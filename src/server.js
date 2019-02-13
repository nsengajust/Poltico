import express from 'express';
import Party from './Controllers/partyController';
import Office from './Controllers/officeController';

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
    return res.json({'message' : 'Welcome to Politico Platform'});
});
app.post('/api/v1/parties', Party.create);
app.post('/api/v1/offices', Office.create);
app.get('api/v1/offices', Office.getAllOffices);
app.get('api/v1/offices/:id', Office.getOne);
app.get('/api/v1/parties', Party.getAllParties);
app.get('/api/v1/parties/:id', Party.getOne);
app.patch('/api/v1/parties/:id', Party.editParty);
app.delete('/api/v1/parties/:id', Party.deleteParty);
app.patch('/api/v1/offices/:id', Office.editOffice);
app.delete('/api/v1/offices/:id', Office.deleteOffice);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`You are running on port ${port}`);
});

export default app;
