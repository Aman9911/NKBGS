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

  async createValueEducation(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteValueEducationId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createValueEducation :: error", error);
      throw error;
    }
  }

  async getValueEducation() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteValueEducationId
      );
    } catch (error) {
      console.error("Appwrite service :: getValueEducation :: error", error);
      throw error;
    }
  }

  async deleteValueEducation(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteValueEducationId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteValueEducation :: error", error);
      return false;
    }
  }
}

const valueEducationService = new Service();
export default valueEducationService;
