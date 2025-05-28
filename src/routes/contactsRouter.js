// import express from 'express';
// import { handleGetAllContacts, handleGetContactById } from '../controllers/contactsController.js';

// const router = express.Router();

// router.get('/contacts', handleGetAllContacts);
// router.get('/contacts/:contactId', handleGetContactById);

// export default router;


import express from 'express';
import { handleGetAllContacts, handleGetContactById } from '../controllers/contactsController.js';

const router = express.Router();

router.get('/contacts', handleGetAllContacts);
router.get('/contacts/:contactId', handleGetContactById);

export default router;



