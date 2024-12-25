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

  async createStudentEnrichment(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteStudentEnrichmentId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: createStudentEnrichment :: error",
        error
      );
      throw error;
    }
  }

  async getStudentEnrichment() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteStudentEnrichmentId
      );
    } catch (error) {
      console.error("Appwrite service :: getStudentEnrichment :: error", error);
      throw error;
    }
  }

  async getStudentEnrichmentById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteStudentEnrichmentId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getStudentEnrichmentById :: error",
        error
      );
      throw error;
    }
  }

  async deleteStudentEnrichment(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteStudentEnrichmentId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteStudentEnrichment :: error",
        error
      );
      return false;
    }
  }
}

const studentEnrichmentService = new Service();
export default studentEnrichmentService;
