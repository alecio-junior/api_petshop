import animalService from "../services/animal.service.js";

async function createAnimal(req, res, next){
  try{
     let animal = req.body;
     if(!animal.nome || !animal.tipo || !animal.proprietario_id){
        throw new Error("nome, tipo e id do proprietario são obrigatórios.")
      }
    
      res.send(await animalService.createAnimal(animal));
      logger.info(`POST /animal - ${JSON.stringify(animal)}`);
   }catch(err){
        next(err);
    }
  }

  async function getAnimais(req, res, next){
    try{
         res.send(await animalService.getAnimais());
         logger.info("GET /animal");
     }catch(err){
          next(err);
      }
    }

    async function getAnimal(req, res, next){
      try{
           res.send(await animalService.getAnimal(req.params.id));
           logger.info("GET /animal");
       }catch(err){
            next(err);
        }
      }

      async function deleteAnimal(req, res, next){
        try{
             await animalService.deleteAnimal(req.params.id)
             res.end();
             logger.info("DELETE /animal");
         }catch(err){
              next(err);
          }
        }

        async function updateAnimal(req, res, next){
          try{
            let animal = req.body;
            if(!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id){
               throw new Error("id do pet, nome, tipo e id do proprietario são obrigatórios.")
             }
           
             res.send(await animalService.updateAnimal(animal));
             logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
          }catch(err){
               next(err);
           }
          }
  


  export default {
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
  }