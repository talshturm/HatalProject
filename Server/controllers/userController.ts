import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { getAllService, getByIdService, deleteUserService, createUserService, updateUserService } from "../Services/userService";

const getAll = async (req: Request, res: Response) => {
    try {
        const users = await getAllService();
        res.send(users);
      } catch (error) {
        res.status(500).send("Internal server error");
      }
  };

const getById = async (req: Request, res: Response) => {
    const id = Number(req.params);
    try {
      const user = await getByIdService(id);
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
      const savedUser = await createUserService(firstName, lastName);
      res.status(201).send(savedUser);
    } catch (error) {
      res.status(409).send("User creation failed");
    }
  };

const updateUser = async (req: Request, res: Response) => {
    const id = Number(req.params);
    const { firstName, lastName, age } = req.body;
    try {
      await updateUserService(id, firstName, lastName);
      res.status(204).send();
    } catch (error) {
      res.status(409).send("User update failed");
    }
  };

const deleteUser = async (req: Request, res: Response) => {
    const id = Number(req.params);
    try {
      await deleteUserService(id);
      res.status(204).send();
    } catch (error) {
      res.status(409).send("User deletion failed");
    }
  };

export { getAll, getById, deleteUser, updateUser, createUser };
