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

  async createClub(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateClub :: error", error);
      throw error;
    }
  }

  async createClubDetail(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubDetailId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateClubDetail :: error", error);
      throw error;
    }
  }

  async getClub() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteClubId,
      );
    } catch (error) {
      console.error("Appwrite service :: getClub :: error", error);
      throw error;
    }
  }

  async getClubById(id){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubId,
        id
      )
    }catch(error){
      console.error("Appwrite service :: getClubById :: error",error)
      throw error
    }
  }

  async getClubDetail() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteClubDetailId,
      );
    } catch (error) {
      console.error("Appwrite service :: getClubDetail :: error", error);
      throw error;
    }
  }

  async getClubDetailById(id){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubDetailId,
        id
      )
    }catch(error){
      console.error("Appwrite service :: getClubDetailById :: error",error)
      throw error
    }
  }

  async deleteClub(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteClub :: error", error);
      return false;
    }
  }

  async deleteClubDetail(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubDetailId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteClubDetail :: error", error);
      return false;
    }
  }

  async updateClub(id, { clubName,image,clubDetailLink }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubId,
        id,
        { clubName,image,clubDetailLink }
      );
    } catch (error) {
      console.error("Appwrite service :: AppwriteClubUpdate :: error", error);
      throw error;
    }
  }

  async updateClubDetail(id, { date,details,eventName }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteClubDetailId,
        id,
        { date,details,eventName }
      );
    } catch (error) {
      console.error("Appwrite service :: AppwriteClubDetailUpdate :: error", error);
      throw error;
    }
  }

}

const clubService = new Service();
export default clubService;