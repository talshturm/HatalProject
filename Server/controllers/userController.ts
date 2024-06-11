import { Request, Response } from "express";
import { getAllService, getByIdService, deleteUserService, createUserService, updateUserService } from "../Services/userService";
import { StatusCodes } from "http-status-codes";

const getAll = async (req: Request, res: Response) => {
    try {
        const users = await getAllService();
        res.send(users);
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
      }
  };

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await getByIdService(parseInt(id));
      if (user) {
        res.send(user);
      } else {
        res.status(StatusCodes.NOT_FOUND).send("User not found");
      }
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
  };

const createUser = async (req: Request, res: Response) => {
    const { username, firstName, lastName, password, address, email } = req.body;
    
    try {
       await createUserService(username, firstName,
        lastName, password, address, email);
      res.status(StatusCodes.CREATED).json({ message: 'User created successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("User creation failed");
    }
  };

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, firstName, lastName, password, address, email } = req.body;
    try {
      await updateUserService(parseInt(id), username, firstName,
        lastName, password, address, email);
      res.status(StatusCodes.OK).json({ message: 'User updated successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("User update failed");
    }
  };

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteUserService(parseInt(id));
      res.status(StatusCodes.OK).json({message: 'User deleted successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("User deletion failed");
    }
  };

export { getAll, getById, deleteUser, updateUser, createUser };
