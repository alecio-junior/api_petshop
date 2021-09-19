import express from "express";
import AnimalController from "../controllers/animal.controller.js"

const router = express.Router();

router.post("/", AnimalController.createAnimal);
router.get("/", AnimalController.getAnimais);
router.get("/:id", AnimalController.getAnimal);
router.delete("/:id", AnimalController.deleteAnimal);
router.put("/", AnimalController.updateAnimal);


export default router;