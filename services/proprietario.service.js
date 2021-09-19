import proprietarioRepository from "../repositories/proprietario.repository.js";

async function createProprietario(proprietario){
  return await proprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios(){
    return await proprietarioRepository.getProprietarios();
  }

  async function getProprietario(id){
    return await proprietarioRepository.getProprietario(id);
  }

  async function deleteProprietario(id){
   await proprietarioRepository.deleteProprietario(id);
  }

  async function updateProprietario(proprietario){
    return await proprietarioRepository.updateProprietario(proprietario);
   }

export default{
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}