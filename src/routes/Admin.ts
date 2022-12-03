import { Router } from 'express';
import { UserRepository, AddressRepository, WorkRepository } from '../getRepo.typeorm';
const router = Router();


router.get('/', async (req, res, next) => {
   const user = await UserRepository.find();
   const address = await AddressRepository.find();
   const work = await WorkRepository.find();
   

   res.json({
      user,
      address,
      work
   })
});

export default router