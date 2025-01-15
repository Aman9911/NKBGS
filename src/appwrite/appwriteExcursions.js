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

  async createExcursions(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteExcursionsId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateExcursions :: error",
        error
      );
      throw error;
    }
  }

  async deleteExcursions(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteExcursionsId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteExcursions :: error",
        error
      );
      return false;
    }
  }

  async getExcursions() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteExcursionsId
      );
    } catch (error) {
      console.error("Appwrite service :: getExcursions :: error", error);
      throw error;
    }
  }

  async updateExcursions(id, { title, thumbnail, editorContent }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteExcursionsId,
        id,
        { title, thumbnail, editorContent }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: AppwriteUpdateExcursions :: error",
        error
      );
      throw error;
    }
  }

  async getExcursionsById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteExcursionsId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getExcursionsById :: error",
        error
      );
      throw error;
    }
  }
}

const excursionsService = new Service();
export default excursionsService;
