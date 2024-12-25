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

  async createAcademicUpdate(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAcademicUpdateCollectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateAcademicUpdate :: error", error);
      throw error;
    }
  }

  async createSubject(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectCollectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateSubject :: error", error);
      throw error;
    }
  }

  async getAcademicUpdate() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteAcademicUpdateCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getAcademicUpdate :: error", error);
      throw error;
    }
  }

  async getSubject(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectCollectionId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getSubject :: error", error);
      throw error;
    }
  }

  async deleteAcademicUpdate(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAcademicUpdateCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteAcademicUpdate :: error", error);
      return false;
    }
  }

  async deleteSubject(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteSubject :: error", error);
      return false;
    }
  }

  async updateAcademicUpdate(id, { classes, title, subject }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAcademicUpdateCollectionId,
        id,
        { class: classes, title, subject }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: Appwrite academicUpdate :: error",
        error
      );
      throw error;
    }
  }
}

const academicUpdateService = new Service();
export default academicUpdateService;
