import uploadPhoto from './5-photo-reject'; // Adjust the import based on your structure
import signUpUser from './4-user-promise'; // Adjust the import based on your structure

export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions and wait for their responses
    const photoResponse = await uploadPhoto('filename.jpg'); // Pass a valid filename
    const userResponse = await signUpUser('Guillaume', 'Salva'); // Pass user details

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
