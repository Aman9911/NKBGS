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

  async createCampusHappening(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCampusHappeningId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateCampusHappening :: error",
        error
      );
      throw error;
    }
  }

  async deleteCampusHappening(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCampusHappeningId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteCampusHappening :: error",
        error
      );
      return false;
    }
  }
  async getCampusHappening() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCampusHappeningId
      );
    } catch (error) {
      console.error("Appwrite service :: getCampusHappening :: error", error);
      throw error;
    }
  }
  async updateCampusHappening(id, { title, thumbnail, editorContent }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCampusHappeningId,
        id,
        { title, thumbnail, editorContent }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: Appwrite CampusHappening :: error",
        error
      );
      throw error;
    }
  }

  async getCampusHappeningById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCampusHappeningId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getCampusHappeningById :: error",
        error
      );
      throw error;
    }
  }
}

const campusHappeningService = new Service();
export default campusHappeningService;
