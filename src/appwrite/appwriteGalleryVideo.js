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

  async createVideo(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryVideoId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: createVideo :: error", error);
      throw error;
    }
  }
  async updateVideo(id, { title, videoLink }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryVideoId,
        id,
        { title, videoLink }
      );
    } catch (error) {
      console.error("Appwrite service :: updateVideo :: error", error);
      throw error;
    }
  }
  async deleteVideo(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryVideoId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteVideo :: error", error);
      return false;
    }
  }
  async getVideo() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryVideoId
      );
    } catch (error) {
      console.error("Appwrite service :: getVideo :: error", error);
      throw error;
    }
  }
  async getVideoById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteGalleryVideoId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getVideoById :: error", error);
      throw error;
    }
  }
}

const galleryVideoService = new Service();
export default galleryVideoService;
