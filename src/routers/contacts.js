
import express from 'express';

import {
  createContactCtrl,
  deleteContactCtrl,
  getAllContactsCtrl,
  getContactByIdCtrl,
  updateContactCtrl,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

router.get('/', ctrlWrapper(getAllContactsCtrl));
router.get('/:id', ctrlWrapper(getContactByIdCtrl));
router.post('/', ctrlWrapper(createContactCtrl));
router.patch('/:id', ctrlWrapper(updateContactCtrl));
router.delete('/:id', ctrlWrapper(deleteContactCtrl));

export default router;
