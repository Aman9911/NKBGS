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

  async createPhoto(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createPhoto :: error", error);
      throw error;
    }
  }
  async updatePhoto(id, { title, link }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryId,
        id,
        { title, link }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePhoto :: error", error);
      throw error;
    }
  }
  async deletePhoto(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePhoto :: error", error);
      return false;
    }
  }
  async getPhoto() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryId
      );
    } catch (error) {
      console.error("Appwrite service :: getPhoto :: error", error);
      throw error;
    }
  }
  async getPhotoById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getPhotoById :: error", error);
      throw error;
    }
  }
}

const galleryService = new Service();
export default galleryService;
