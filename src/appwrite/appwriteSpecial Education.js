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

  async createSpecialEducation(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSpecialEducationId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createSpecialEducation :: error", error);
      throw error;
    }
  }

  async getSpecialEducation() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteSpecialEducationId
      );
    } catch (error) {
      console.error("Appwrite service :: getSpecialEducation :: error", error);
      throw error;
    }
  }

  async deleteSpecialEducation(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSpecialEducationId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteSpecialEducation :: error", error);
      return false;
    }
  }
}

const specialEducationService = new Service();
export default specialEducationService;
