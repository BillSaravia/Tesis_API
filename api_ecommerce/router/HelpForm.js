import routerx from 'express-promise-router';
import HelpFormController from '../controllers/HelpFormController';
import auth from '../middlewares/auth';

const router = routerx();
// http://localhost:3000/api/users/register

router.post('/register', auth.verifyEcommerce, HelpFormController.register);
router.put('/update', auth.verifyAdmin, HelpFormController.update);
router.get('/list', auth.verifyAdmin, HelpFormController.list);
router.delete('/delete/:id', auth.verifyAdmin, HelpFormController.remove);

export default router;
