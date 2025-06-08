<<<<<<< HEAD


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
=======
import { Contacts } from '../models/contact.js';

export const getAllContacts = async () => {
  const contacts = await Contacts.find();
  console.log(contacts);

  return contacts;
};
export const getContactById = async (id) => {
  const contact = await Contacts.findById(id);
  return contact;
};
export const createContact = async (payload) => {
  const contact = await Contacts.create(payload);
  return contact;
};
export const updateContact = async (id, payload) => {
  const updatedContact = await Contacts.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedContact;
};
export const deleteContact = async (id) => {
  const deletedContact = await Contacts.findByIdAndDelete(id);
  return deletedContact;
>>>>>>> bc491624e7d702211853fd7d9a0859acb17e456f
};