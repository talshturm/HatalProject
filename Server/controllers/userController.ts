import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/user.entity";

const getAll = async (req: Request, res: Response) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    res.send(users);
  };

const getById = async (req: Request, res: Response) => {
    const id:number  = req.params;
    const userRepository = getRepository(User);
    try {
      const user = await userRepository.findOne(id);
      res.send(user);
    } catch (error) {
      res.status(404).send("User not found");
    }
  };

const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName, age } = req.body;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;

    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
      res.status(201).send(user);
    } catch (error) {
      res.status(409).send("User creation failed");
    }
  };

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const userRepository = getRepository(User);
    let user;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }

    user.firstName = firstName;
    user.lastName = lastName;

    try {
      await userRepository.save(user);
      res.status(204).send();
    } catch (error) {
      res.status(409).send("User update failed");
    }
  };

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userRepository = getRepository(User);
    let user;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }

    userRepository.delete(id);
    res.status(204).send();
  };

export { getAll, getById, deleteUser, updateUser, createUser };
