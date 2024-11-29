// src/services/AuthService.ts
import { account } from "@/config/appwrite";
import { ID } from "appwrite";
import { auth } from "../interfaces";

class AuthService {
  // Login method
  async login(payload: auth.login) {
    const { email, password } = payload;
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw error;
    }
  }

  // Register method
  async register(payload: auth.register) {
    const { email, password, name } = payload;
    try {
      // Create a new user account in Appwrite
      const newUser = await account.create(ID.unique(), email, password, name);
      if (newUser) {
        await this.login({ email, password });
        await account.createVerification("http://localhost:3000/verify");
      }

      return { message: "Email Verification Sent" };
    } catch (error) {
      throw error;
    }
  }

  async verifyEmail(payload: auth.verifyEmail) {
    const { userId, secret } = payload;
    try {
      await account.updateVerification(userId, secret);
      return ({message:"verification successful"})
    } catch (error) {
      throw error;
    }
  }

  // Logout method
  async logout() {
    try {
      await account.deleteSession("current");
      return "success";
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    return await account.get();
  }
}

// Export an instance of AuthService to use throughout the app
const authService = new AuthService();
export default authService;
