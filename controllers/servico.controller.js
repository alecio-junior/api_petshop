import servicoService from "../services/servico.services.js";

async function createServico(req, res, next){
  try{
     let servico = req.body;
     if(!servico.descricao || !servico.valor || !servico.animal_id){
        throw new Error("descricao, valor e id do animal são obrigatórios.")
      }
    
      res.send(await servicoService.createServico(servico));
      logger.info(`POST /servico - ${JSON.stringify(servico)}`);
   }catch(err){
        next(err);
    }
  }

  async function getServicos(req, res, next){
    try{
         res.send(await servicoService.getServicos());
         logger.info("GET /servico");
     }catch(err){
          next(err);
      }
    }

    async function getServico(req, res, next){
      try{
           res.send(await servicoService.getServico(req.params.id));
           logger.info("GET /servico");
       }catch(err){
            next(err);
        }
      }

      async function deleteServico(req, res, next){
        try{
             await servicoService.deleteServico(req.params.id)
             res.end();
             logger.info("DELETE /servico");
         }catch(err){
              next(err);
          }
        }

        async function updateServico(req, res, next){
          try{
            let servico = req.body;
            if(!servico.servico_id || !servico.descricao || !servico.valor || !servico.animal_id){
               throw new Error("id do pet, descricao, valor e id do animal são obrigatórios.")
             }
           
             res.send(await servicoService.updateServico(servico));
             logger.info(`PUT /servico - ${JSON.stringify(servico)}`);
          }catch(err){
               next(err);
           }
          }
  


  export default {
    createServico,
    getServicos,
    getServico,
    deleteServico,
    updateServico
  }