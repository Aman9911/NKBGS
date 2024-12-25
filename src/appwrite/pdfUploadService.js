import conf from "@/conf/conf";
import { ID, Client, Storage } from "appwrite";

export class Service {
  client = new Client();
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }

  // File upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwritePdfBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadModal :: error", error);
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwritePdfBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteModal :: error", error);
      return false;
    }
  }

  getPreview(fileId) {
    return this.bucket.getFilePreview(conf.appwritePdfBucketId, fileId);
  }

  async getFile(fileId) {
    try {
      const result = await this.bucket.getFile(
        conf.appwritePdfBucketId,
        fileId
      );
      return result;
    } catch (error) {
      console.error("Appwrite service :: getFile :: error", error);
      throw error;
    }
  }

  async getFileDownload(fileId) {
    try {
      const result = await this.bucket.getFileDownload(
        conf.appwritePdfBucketId,
        fileId
      );
      return result;
    } catch (error) {
      console.error("Appwrite service :: getFile :: error", error);
      throw error;
    }
  }
}

const pdfUploadService = new Service();
export default pdfUploadService;
