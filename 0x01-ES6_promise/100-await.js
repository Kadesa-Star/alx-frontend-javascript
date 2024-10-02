import { uploadPhoto, createUser } from './utils'; // Importing the required functions

export default async function asyncUploadUser() {
  let res = {}; // Initialize an empty object for the response

  try {
    const photo = await uploadPhoto(); // Await the resolution of uploadPhoto
    const user = await createUser(); // Await the resolution of createUser
    res = { photo, user }; // If both succeed, assign the results to res
  } catch (err) {
    res = { photo: null, user: null }; // If any promise fails, set both to null
  }
  
  return res; // Return the response object
}
