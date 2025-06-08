import express from 'express';
import { getAllContacts, getContactById, createContactController, updateContactController, deleteContactController } from '../controllers/contactsController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidID } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
    createContactSchema,
    updateContactSchema
  } from '../validation/contactsSchema.js';


const router = express.Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(getAllContacts)); 
router.get('/:contactId',isValidID,ctrlWrapper(getContactById)); 
router.post('/',jsonParser,validateBody(createContactSchema), ctrlWrapper(createContactController));
router.patch('/:contactId',isValidID,jsonParser,validateBody(updateContactSchema), ctrlWrapper(updateContactController));
router.delete('/:contactId',isValidID, ctrlWrapper(deleteContactController));
export default router;