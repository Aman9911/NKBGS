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

  async createEvents(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateEvents :: error", error);
      throw error;
    }
  }

  async getEvents() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getEvents :: error", error);
      throw error;
    }
  }

  async deleteEvents(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteEvents :: error", error);
      return false;
    }
  }
}

const eventsService = new Service();
export default eventsService;
