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

  async createHeroBanner(image) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteHeroBannerCollectionId,
        ID.unique(),
        { image }
      );
    } catch (error) {
      console.error("Appwrite service :: createHeroBanner :: error", error);
      throw error;
    }
  }

  async deleteHeroBanner(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteHeroBannerCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteHeroBanner :: error", error);
      return false;
    }
  }
  async getHeroBanner() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteHeroBannerCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getHeroBanner :: error", error);
      throw error;
    }
  }
}

const heroBannerService = new Service();
export default heroBannerService;
