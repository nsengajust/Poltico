import Office from '../Model/officeModel';

const create = (req, res) => {
    const name = req.body.name;
    const hqAdress = req.body.hqAdress;
    if(!name || !hqAdress) {
        return res.status(400).send({'message' : 'not enough informations'})
    }
    const office = Office.push(req.body);
    return res.status(201).send({
        "status" : 201,
        "data" : [office]
    });

};

const getAllOffices = (req, res) => {
    return res.status(200).send({
        "status" : 200,
        "data" : [Office]
    })
}