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

  async createNationalAndInternational(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNationalAndInternationalId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateNationalAndInternational :: error",
        error
      );
      throw error;
    }
  }

  async deleteNationalAndInternational(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNationalAndInternationalId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteNationalAndInternational :: error",
        error
      );
      return false;
    }
  }
  async getNationalAndInternational() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteNationalAndInternationalId
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getNationalAndInternational :: error",
        error
      );
      throw error;
    }
  }
  async updateNationalAndInternational(
    id,
    { title, thumbnail, editorContent }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNationalAndInternationalId,
        id,
        { title, thumbnail, editorContent }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: Appwrite NationalAndInternational :: error",
        error
      );
      throw error;
    }
  }

  async getNationalAndInternationalById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNationalAndInternationalId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getNationalAndInternationalById :: error",
        error
      );
      throw error;
    }
  }
}

const nationalAndInternationalService = new Service();
export default nationalAndInternationalService;
