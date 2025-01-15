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

  async createInternationalVisit(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInternationalVisitId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateInternationalVisit :: error",
        error
      );
      throw error;
    }
  }

  async deleteInternationalVisit(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInternationalVisitId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteInternationalVisit :: error",
        error
      );
      return false;
    }
  }

  async getInternationalVisit() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteInternationalVisitId
      );
    } catch (error) {
      console.error("Appwrite service :: getInternationalVisit :: error", error);
      throw error;
    }
  }

  async updateInternationalVisit(id, { title, thumbnail, editorContent }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInternationalVisitId,
        id,
        { title, thumbnail, editorContent }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: AppwriteUpdateInternationalVisit :: error",
        error
      );
      throw error;
    }
  }

  async getInternationalVisitById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInternationalVisitId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getInternationalVisitById :: error",
        error
      );
      throw error;
    }
  }
}

const internationalVisitService = new Service();
export default internationalVisitService;
