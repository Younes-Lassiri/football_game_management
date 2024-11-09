import axios from "axios";
const userCall = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/auth/user/${userId}`);
      return response.data.user;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };
export default userCall;
  