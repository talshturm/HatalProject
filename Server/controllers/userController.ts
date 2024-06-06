import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(User);

const getAll = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.find();
        res.send(users);
      } catch (error) {
        res.status(500).send("Internal server error");
      }
  };

const getById = async (req: Request, res: Response) => {
    const id = Number(req.params);
    try {
      const user = await userRepository.findOneBy({ id });
      if (user) {
        res.send(user);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

const createUser = async (req: Request, res: Response) => {
    const { firstName, lastName } = req.body;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;

    try {
      const savedUser = await userRepository.save(user);
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(409).send("User creation failed");
    }
  };

const updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params);
    const { firstName, lastName, age } = req.body;

    try {
      const user = await userRepository.findOneBy({ id });

      if (!user) {
        res.status(404).send("User not found");
        return;
      }

      user.firstName = firstName;
      user.lastName = lastName;

      await userRepository.save(user);
      res.status(204).send();
    } catch (error) {
      res.status(409).send("User update failed");
    }
  };

const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params);

    try {
      const user = await userRepository.findOneBy({id});

      if (!user) {
        res.status(404).send("User not found");
        return;
      }

      await userRepository.remove(user);
      res.status(204).send();
    } catch (error) {
      res.status(409).send("User deletion failed");
    }
  };

export { getAll, getById, deleteUser, updateUser, createUser };
