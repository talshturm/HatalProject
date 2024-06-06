import { Repository } from "typeorm";
import { myDataSource }

const userRepository = await myDataSource.getRepository(User); 