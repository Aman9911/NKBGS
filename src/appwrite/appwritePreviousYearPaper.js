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

  async createPreviousYearPaper(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwritePreviousYearPaperCollectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreatePreviousYearPaper :: error",
        error
      );
      throw error;
    }
  }

  async getPreviousYearPaper() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwritePreviousYearPaperCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getPreviousYearPaper :: error", error);
      throw error;
    }
  }

  async deletePreviousYearPaper(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwritePreviousYearPaperCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deletePreviousYearPaper :: error",
        error
      );
      return false;
    }
  }
}

const previousYearPaperService = new Service();
export default previousYearPaperService;
