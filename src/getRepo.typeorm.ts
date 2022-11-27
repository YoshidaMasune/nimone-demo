import { User } from './entity/user.entity';
import { Address } from './entity/address.entity';
import { Work } from './entity/work.entity';
import { myAppData } from "./Appdata";

const UserRepository = myAppData.getRepository(User);
const AddressRepository = myAppData.getRepository(Address);
const WorkRepository = myAppData.getRepository(Work);

export {
   UserRepository,
   AddressRepository,
   WorkRepository
};
