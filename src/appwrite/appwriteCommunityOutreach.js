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

  async createCommunityOutreach(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCommunityOutreachId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: createCommunityOutreach :: error",
        error
      );
      throw error;
    }
  }

  async getCommunityOutreach() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCommunityOutreachId
      );
    } catch (error) {
      console.error("Appwrite service :: getCommunityOutreach :: error", error);
      throw error;
    }
  }

  async getCommunityOutreachById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCommunityOutreachId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getCommunityOutreachById :: error",
        error
      );
      throw error;
    }
  }

  async deleteCommunityOutreach(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCommunityOutreachId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteCommunityOutreach :: error",
        error
      );
      return false;
    }
  }
}

const communityOutreachService = new Service();
export default communityOutreachService;
