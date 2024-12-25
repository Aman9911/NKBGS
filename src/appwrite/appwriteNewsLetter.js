import conf from "@/conf/conf";
import { ID, Client, Databases } from "appwrite";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createNewsLetter(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNewsLetterId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createNewsLetter :: error", error);
      throw error;
    }
  }

  async getNewsLetter() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteNewsLetterId
      );
    } catch (error) {
      console.error("Appwrite service :: getNewsLetter :: error", error);
      throw error;
    }
  }

  async getNewsLetterById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNewsLetterId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getNewsLetterById :: error", error);
      throw error;
    }
  }

  async deleteNewsLetter(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNewsLetterId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteNewsLetter :: error", error);
      return false;
    }
  }
}

const newsLetterService = new Service();
export default newsLetterService;
