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

  async createCalendar(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCalendarId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createCalendar :: error", error);
      throw error;
    }
  }

  async getCalendar() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCalendarId
      );
    } catch (error) {
      console.error("Appwrite service :: getCalendar :: error", error);
      throw error;
    }
  }

  async getCalendarById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCalendarId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getCalendarById :: error", error);
      throw error;
    }
  }

  async deleteCalendar(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCalendarId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteCalendar :: error", error);
      return false;
    }
  }
}

const calendarService = new Service();
export default calendarService;
