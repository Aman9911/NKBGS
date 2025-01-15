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

  async createSport(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateSport :: error", error);
      throw error;
    }
  }

  async createSportDetail(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportDetailId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateSportDetail :: error", error);
      throw error;
    }
  }

  async getSport() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteSportId,
      );
    } catch (error) {
      console.error("Appwrite service :: getSport :: error", error);
      throw error;
    }
  }

  async getSportById(id){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportId,
        id
      )
    }catch(error){
      console.error("Appwrite service :: getSportById :: error",error)
      throw error
    }
  }

  async getSportDetail() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteSportDetailId,
      );
    } catch (error) {
      console.error("Appwrite service :: getSportDetail :: error", error);
      throw error;
    }
  }

  async getSportDetailById(id){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportDetailId,
        id
      )
    }catch(error){
      console.error("Appwrite service :: getSportDetailById :: error",error)
      throw error
    }
  }

  async deleteSport(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteSport :: error", error);
      return false;
    }
  }

  async deleteSportDetail(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportDetailId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteSportDetail :: error", error);
      return false;
    }
  }

  async updateSport(id, { sportName,image,sportDetailLink }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportId,
        id,
        { sportName,image,sportDetailLink }
      );
    } catch (error) {
      console.error("Appwrite service :: AppwriteSportUpdate :: error", error);
      throw error;
    }
  }

  async updateSportDetail(id, { date,details,competitionName }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSportDetailId,
        id,
        { date,details,competitionName }
      );
    } catch (error) {
      console.error("Appwrite service :: AppwriteSportDetailUpdate :: error", error);
      throw error;
    }
  }

}

const sportService = new Service();
export default sportService;