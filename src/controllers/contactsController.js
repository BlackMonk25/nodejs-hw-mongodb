
import createError from 'http-errors';
import { deleteContact } from '../services/contacts.js';

export const deleteContactCtrl = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await deleteContact(id);

  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }

  res.status(204).end();  
};
