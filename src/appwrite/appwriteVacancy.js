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

  async createVacancy(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteVacancyId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateVacancy :: error", error);
      throw error;
    }
  }

  async getVacancy() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteVacancyId,
      );
    } catch (error) {
      console.error("Appwrite service :: getVacancy :: error", error);
      throw error;
    }
  }

  async deleteVacancy(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteVacancyId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteVacancy :: error", error);
      return false;
    }
  }
}

const vacancyService = new Service();
export default vacancyService;
