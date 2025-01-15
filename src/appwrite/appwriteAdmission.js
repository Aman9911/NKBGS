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

  async createAdmission(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAdmissionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateAdmission :: error", error);
      throw error;
    }
  }

  async getAdmission() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteAdmissionId,
      );
    } catch (error) {
      console.error("Appwrite service :: getAdmission :: error", error);
      throw error;
    }
  }

  async deleteAdmission(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAdmissionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteAdmission :: error", error);
      return false;
    }
  }

  async updateAdmission(id, { pdfData }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAdmissionId,
        id,
        { pdfData }
      );
    } catch (error) {
      console.error("Appwrite service :: AppwriteAdmission :: error", error);
      throw error;
    }
  }
}

const admissionService = new Service();
export default admissionService;
