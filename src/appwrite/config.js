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

  async createModal(image) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteModalCollectionId,
        ID.unique(),
        { image }
      );
    } catch (error) {
      console.error("Appwrite service :: createModal :: error", error);
      throw error;
    }
  }
  async updateModal(id, { image }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteModalCollectionId,
        id,
        { image }
      );
    } catch (error) {
      console.error("Appwrite service :: updateModal :: error", error);
      throw error;
    }
  }
  async deleteModal(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteModalCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteModal :: error", error);
      return false;
    }
  }
  async getModal() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteModalCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getModal :: error", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
