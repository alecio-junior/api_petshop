import servicoRepository from "../repositories/servico.repository.js";

async function createServico(servico){
  return await servicoRepository.insertServico(servico);
}

async function getServicos(){
    return await servicoRepository.getServicos();
  }

  async function getServico(id){
    return await servicoRepository.getServico(id);
  }

  async function deleteServico(id){
   await servicoRepository.deleteServico(id);
  }

  async function updateServico(servico){
    return await servicoRepository.updateServico(servico);
   }

export default{
    createServico,
    getServicos,
    getServico,
    deleteServico,
    updateServico
}