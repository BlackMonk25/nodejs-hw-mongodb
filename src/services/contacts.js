

import { Contact } from '../models/contactModel.js';

// повернення всіх нахуй нікому не потрібних доків
export const fetchAllContacts = async () => {
  return await Contact.find();
};

// повертаємо об'єкт контакту по ID або null
export const fetchContactById = async (id) => {
  return await Contact.findById(id);
};

// створення нового контакту-хуйні
export const createContact = async (payload) => { 
  const contact = await Contact.create(payload); 
  return contact;
};

export const updateContact = async (contactId, payload) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    contactId,
    payload,
    {
      new: true,           
      runValidators: true // перевіряє дані згідно з contactSchema
    }
  );

  return updatedContact; // якщо null → генерується 404
};

export const deleteContact = async (id) => {
  const deleted = await Contact.findByIdAndDelete(id);
  return deleted;
};