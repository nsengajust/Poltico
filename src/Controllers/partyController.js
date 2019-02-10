import Party from '../Model/partyModel';

const create = (req, res) => {
    const name = req.body.name;
    const hqAdress = req.body.hqAdress;
    if(!name || !hqAdress) {
        return res.status(400).send({'message' : 'not enough informations'})
    }
    const party = Party.push(req.body);
    return res.status(201).send({
        "status" : 201,
        "data" : [party]
    });

};

const getAllParties = (req, res) => {
    return res.status(200).send({
        "status" : 200,
        "data" : [Party]
    })
}