import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
   res.send('test');
});

router.post('/new-nimone', (req, res, next) =>  {
   res.send('llo');
});

export default router;