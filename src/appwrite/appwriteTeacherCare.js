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

  async createTeacherCare(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTeacherCareId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createTeacherCare :: error", error);
      throw error;
    }
  }

  async getTeacherCare() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTeacherCareId
      );
    } catch (error) {
      console.error("Appwrite service :: getTeacherCare :: error", error);
      throw error;
    }
  }

  async getTeacherCareById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTeacherCareId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getTeacherCareById :: error", error);
      throw error;
    }
  }

  async deleteTeacherCare(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTeacherCareId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteTeacherCare :: error", error);
      return false;
    }
  }
}

const teacherCareService = new Service();
export default teacherCareService;
