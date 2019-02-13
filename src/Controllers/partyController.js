import Party from '../Model/partyModel';

class party{
    
    static async create(req, res){
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
    
    static async getAllParties(req, res){
        return res.status(200).send({
            status : 200,
            data : [Party],
        })
    }

    // get single record of parties
    static async getOne(req, res){
        const{ id } = req.params;
        const record = [Party];
         const row = record.find( parties => parties.id === id);
        if(row.length > -1){
            res.send({
                status: 200,
                message: "party found successfull",
            });
        }else{
          res.send({
              status: 400,
              message: "party has not found!!!",
          });
        }
    }
// edit parties
    static async editParty(req, res){
        const{ id } = req.params.id;
        
        const record = Party.find(P => P.id === id);
        if(record){
          res.status(200).send({
              status: 200,
              data: record,               
          });
        }else{
          res.send({
              status: 400,
              message: "party not found!!!",
          });
        }
    }
// delete party 
    static async deleteParty(req, res){
        const id = req.params;
        const record = Party.find(P => P.id === id);
        if(record){
          res.send({
              status: 200,
              message: "party delete successfuly",
          });
        }else{
          res.send({
              status: 400,
              message: "party is not found!!!",
          });
        }
    } 
      
}

export default party;