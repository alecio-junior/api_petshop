import animalRepository from "../repositories/animal.repository.js";

async function createAnimal(animal){
  return await animalRepository.insertAnimal(animal);
}

async function getAnimais(){
    return await animalRepository.getAnimais();
  }

  async function getAnimal(id){
    return await animalRepository.getAnimal(id);
  }

  async function deleteAnimal(id){
   await animalRepository.deleteAnimal(id);
  }

  async function updateAnimal(animal){
    return await animalRepository.updateAnimal(animal);
   }

export default{
    createAnimal,
    getAnimais,
    getAnimal,
    deleteAnimal,
    updateAnimal
}