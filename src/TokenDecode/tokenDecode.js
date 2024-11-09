import { jwtDecode } from "jwt-decode";
const getUserIdFromToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.userId;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };
  
  export default getUserIdFromToken;
  