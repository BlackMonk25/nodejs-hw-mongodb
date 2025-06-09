import createError from 'http-errors'; 
import { fetchAllContacts, fetchContactById, createContact, updateContact, deleteContact } from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';




export const getAllContacts = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const contacts = await fetchAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user._id,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user._id; 

  const contact = await fetchContactById(contactId, userId);

  if (!contact) {
    throw createError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contactData = {
    ...req.body,
    userId: req.user._id,
  }; 

  const contact = await createContact(contactData); 

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: contact,
  });
};

export const updateContactController = async (req, res, next) => {
 
  const { contactId } = req.params;

 
  if (Object.keys(req.body).length === 0) {
    throw createError(400, 'No data provided for update'); 
  }

  
  if ('userId' in req.body) {
    delete req.body.userId;
  }

  
  const userId = req.user._id;

  
  
  const updatedContact = await updateContact(contactId, req.body, userId);

 
  if (!updatedContact) {
    throw createError(404, 'Contact not found');
  }

 
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: updatedContact,
  });
};
export const deleteContactController = async (req, res) => {
 
  const { contactId } = req.params;

  
  const userId = req.user._id;

 
  const deletedContact = await deleteContact(contactId, userId);

 
  if (!deletedContact) {
    throw createError(404, 'Contact not found');
  }

  
  res.status(204).send();
};