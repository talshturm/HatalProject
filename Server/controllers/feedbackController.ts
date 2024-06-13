import { Request, Response } from "express";
import { getAllService, getByIdService, deleteFeedbackService, createFeedbackService } from "../Services/feedbackService";
import { StatusCodes } from "http-status-codes";

const getAll = async (req: Request, res: Response) => {
    try {
        const feedbacks = await getAllService();
        res.send(feedbacks);
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
      }
};

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const feedback = await getByIdService(parseInt(id));
      if (feedback) {
        res.send(feedback);
      } else {
        res.status(StatusCodes.NOT_FOUND).send("Feedback not found");
      }
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Internal server error");
    }
  };

  const deleteFeedback = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await deleteFeedbackService(parseInt(id));
      res.status(StatusCodes.OK).json({message: 'Feedback deleted successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("Feedback deletion failed");
    }
  };

  const createFeedback = async (req: Request, res: Response) => {
    const { name, email, phoneNumber, message } = req.body;

    try {
       await createFeedbackService(name, email, phoneNumber, message);
      res.status(StatusCodes.CREATED).json({ message: 'Feedback created successfully'});
    } catch (error) {
      res.status(StatusCodes.CONFLICT).send("Feedback creation failed");
    }
  };
  

export { getAll, getById, deleteFeedback, createFeedback };