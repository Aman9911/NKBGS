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

  async createProudMoments(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProudMomentsId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateProudMoments :: error", error);
      throw error;
    }
  }

  async getProudMoments() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteProudMomentsId,
      );
    } catch (error) {
      console.error("Appwrite service :: getProudMoments :: error", error);
      throw error;
    }
  }

  async deleteProudMoments(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProudMomentsId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteProudMoments :: error", error);
      return false;
    }
  }
}

const proudMomentsService = new Service();
export default proudMomentsService;