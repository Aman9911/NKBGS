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

  async createAtlCorner(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAtlCornerId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createAtlCorner :: error", error);
      throw error;
    }
  }

  async getAtlCorner() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteAtlCornerId
      );
    } catch (error) {
      console.error("Appwrite service :: getAtlCorner :: error", error);
      throw error;
    }
  }

  async getAtlCornerById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAtlCornerId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getAtlCornerById :: error", error);
      throw error;
    }
  }

  async deleteAtlCorner(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAtlCornerId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteAtlCorner :: error", error);
      return false;
    }
  }
}

const atlCornerService = new Service();
export default atlCornerService;
