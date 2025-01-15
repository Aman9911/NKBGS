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

  async createWorkshopByPrincipal(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWorkshopByPrincipalId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createWorkshopByPrincipal :: error", error);
      throw error;
    }
  }

  async getWorkshopByPrincipal() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteWorkshopByPrincipalId
      );
    } catch (error) {
      console.error("Appwrite service :: getWorkshopByPrincipal :: error", error);
      throw error;
    }
  }

  async deleteWorkshopByPrincipal(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWorkshopByPrincipalId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteWorkshopByPrincipal :: error", error);
      return false;
    }
  }
}

const workshopByPrincipalService = new Service();
export default workshopByPrincipalService;
