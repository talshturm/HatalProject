import { AppDataSource } from "../data-source";
import { Feedback } from "../entities/feedback.entity";

const feedbackRepository = AppDataSource.getRepository(Feedback);

 const getAllService = async () => {
    return await feedbackRepository.find();
  };

const getByIdService = async (id: number) => {
    return await feedbackRepository.findOneBy({ id });
  };

  const createFeedbackService = async (name: string, email: string, phoneNumber: string, message: string) => {
   const feedback = new Feedback();
   feedback.name = name;
   feedback.email = email;
   feedback.phoneNumber = phoneNumber;
   feedback.message = message;
   return await feedbackRepository.save(feedback);
 };

 const deleteFeedbackService = async (id: number) => {
    const feedback = await feedbackRepository.findOneBy({ id });
    if (!feedback) throw new Error("Feedback not found");
    await feedbackRepository.remove(feedback);
  };
 

 export { getAllService, getByIdService, createFeedbackService, deleteFeedbackService };