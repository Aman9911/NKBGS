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

  async createInfrastructure(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfrastructureCollectionId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateInfrastructure :: error", error);
      throw error;
    }
  }
  
  async deleteInfrastructure(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfrastructureCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteInfrastructure :: error", error);
      return false;
    }
  }
  async getInfrastructure() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteInfrastructureCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getInfrastructure :: error", error);
      throw error;
    }
  }
  async updateInfrastructure(id, { title,thumbnail,editorContent }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfrastructureCollectionId,
        id,
        { title,thumbnail,editorContent }
      );
    } catch (error) {
      console.error("Appwrite service :: Appwrite Infrastructure :: error", error);
      throw error;
    }
  }

  async getInfrastructureById(id){
    try{
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfrastructureCollectionId,
        id
      )
    }catch(error){
      console.error("Appwrite service :: getInfrastructureById :: error",error)
      throw error
    }
  }
}

const infrastructureService = new Service();
export default infrastructureService;