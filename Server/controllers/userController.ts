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
    const { id } = req.params;
    try {
      const user = await getByIdService(parseInt(id));
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
    const { username, firstName, lastName, password, address, email } = req.body;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.username = username;
    user.password = password;
    user.address = address;
    user.email = email;

    try {
      const savedUser = await createUserService(username, firstName,
        lastName, password, address, email);
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(409).send("User creation failed");
    }
  };

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, firstName, lastName, password, address, email } = req.body;
    try {
      await updateUserService(parseInt(id), username, firstName,
        lastName, password, address, email);
      res.status(204).json({ message: 'User updated successfully'});
    } catch (error) {
      res.status(409).send("User update failed");
    }
  };

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteUserService(parseInt(id));
      res.status(204).json({message: 'User deleted successfully'});
    } catch (error) {
      res.status(409).send("User deletion failed");
    }
  };

export { getAll, getById, deleteUser, updateUser, createUser };
