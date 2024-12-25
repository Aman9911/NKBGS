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

  async createNkbgsFamily(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNkbgsFamilyId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createNkbgsFamily :: error", error);
      throw error;
    }
  }
  async updateNkbgsFamily(
    id,
    { name, designation, qualification, department, file }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNkbgsFamilyId,
        id,
        { name, designation, qualification, department, file }
      );
    } catch (error) {
      console.error("Appwrite service :: updateNkbgsFamily :: error", error);
      throw error;
    }
  }
  async deleteNkbgsFamily(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNkbgsFamilyId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteNkbgsFamily :: error", error);
      return false;
    }
  }
  async getNkbgsFamily() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteNkbgsFamilyId
      );
    } catch (error) {
      console.error("Appwrite service :: getNkbgsFamily :: error", error);
      throw error;
    }
  }
  async getNkbgsFamilyById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNkbgsFamilyId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getNkbgsFamilyById :: error", error);
      throw error;
    }
  }
}

const nkbgsFamilyService = new Service();
export default nkbgsFamilyService;
