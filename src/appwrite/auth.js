import conf from "@/conf/conf";
import { Account, ID, Client } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  verifyJWT(value) {
    try {
      return this.client.setJWT(value);
    } catch (error) {
      console.error("Appwrite service :: VerifyJWT :: error", error);
      throw error;
    }
  }

  async verifyCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite service :: VerifyCurrentUser :: error", error);
      throw error;
    }
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Appwrite service :: createAccount :: error", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      const sessionAge = Math.floor(
        (new Date(session.expire) - new Date()) / 1000
      );
      const jwt = await this.account.createJWT();
      document.cookie = `a_jwt=${jwt.jwt}; path=/;  SameSite=Lax; Secure; `;
      return session;
    } catch (error) {
      console.error("Appwrite service :: login :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const session = await this.account.getSession("current");
      return session;
    } catch (error) {
      console.error("Appwrite service :: getCurrentUser :: error", error);
      throw error;
    }
  }

  async logout() {
    try {
      document.cookie = `a_jwt=; Max-Age=-1; path=/; SameSite=Lax; Secure;`;
      return await this.account.deleteSessions("current");
    } catch (error) {
      console.error("Appwrite service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
