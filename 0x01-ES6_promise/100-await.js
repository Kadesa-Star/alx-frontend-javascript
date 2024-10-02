import { uploadPhoto, createUser } from './utils'; // Importing the required utility functions

export default async function asyncUploadUser() {
  let res = {}; // Initialize an empty object to store results

  try {
    const photo = await uploadPhoto(); // Await the result of uploadPhoto
    const user = await createUser(); // Await the result of createUser
    res = { photo, user }; // If both succeed, store the results in res
  } catch (err) {
    res = { photo: null, user: null }; // If any fail, set both to null
  }
  
  return res; // Return the results object
}
