import Office from '../Model/officeModel';
// create office
class office{
    static  async create(req, res){
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
  // get all records of office  
    static async getAllOffices(req, res){
        return res.status(200).send({
            "status" : 200,
            "data" : [Office]
        });
    }
// get single record of office
    static async getOne(req,res){
        const { id } = req.params;
         const row = Office.find(value => value.id === id); 
        if(row.length > -1){
            res.send({
                status: 200,
                data: row,
            });
        }else{
        res.send({
            status: 400,
            message: "Political office has not been found!!!",
        });
        }
    } 
// edit office
    static async editOffice(req, res){
     const{ id } = req.params.id;
    
        const record = Office.find(O => O.id === id);
            if(record){
            res.status(200).send({
            status: 200,
            data: record,               
            });
        }else{
        res.send({
          status: 400,
          message: "office not found!!!",
         });
        }
    }
//delete office
    static async deleteOffice(req, res){
        const id = req.params;
        const record = Office.find(Office => Office.id === id);
            if(record){
                res.send({
                status: 200,
                message: "Office delete successfuly",
            });
            }else{
            res.send({
            status: 400,
            message: "Office is not found!!!",
      });
    }
} 
}


export default office;