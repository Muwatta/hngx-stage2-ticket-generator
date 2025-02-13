import { openDB } from 'idb';

const useDB = () => {
  const dbPromise = openDB('ticketDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('tickets')) {
        db.createObjectStore('tickets', { keyPath: 'id', autoIncrement: true });
      }
    },
  });

  const saveFormData = async data => {
    try {
      const db = await dbPromise;
      await db.put('tickets', data);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };

  const getAllFormData = async () => {
    try {
      const db = await dbPromise;
      return await db.getAll('tickets');
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  return { saveFormData, getAllFormData };
};

export default useDB;
