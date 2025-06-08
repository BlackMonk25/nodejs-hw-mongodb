import { Contact } from '../models/contactModel.js';

// Повернення всіх контактів
export const fetchAllContacts = async () => {
  return await Contact.find();
};

// Пошук контакту за ID
export const fetchContactById = async (id) => {
  return await Contact.findById(id);
};

// Створення нового контакту
export const createContact = async (payload) => { 
  return await Contact.create(payload); 
};

// Оновлення контакту за ID з валідацією
export const updateContact = async (contactId, payload) => {
  return await Contact.findByIdAndUpdate(contactId, payload, {
    new: true,           // повернути оновлений документ
    runValidators: true, // запуск валідації схеми
  });
};

// Видалення контакту за ID
export const deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};
