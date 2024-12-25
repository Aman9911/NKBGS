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
  // CBSE Result class X
  async createCbseResultClassX(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateCbseResultClassX :: error",
        error
      );
      throw error;
    }
  }

  async getCbseResultClassX() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXId
      );
    } catch (error) {
      console.error("Appwrite service :: getCbseResultClassX :: error", error);
      throw error;
    }
  }

  async getCbseResultClassXById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getCbseResultClassXById :: error",
        error
      );
      throw error;
    }
  }

  async deleteCbseResultClassX(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteCbseResultClassX :: error",
        error
      );
      return false;
    }
  }

  async updateCbseResultClassX(
    id,
    {
      heading,
      heading2,
      heading3,
      heading4,
      topper,
      achiever,
      ninety,
      subjectWise,
    }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXId,
        id,
        {
          heading,
          heading2,
          heading3,
          heading4,
          topper,
          achiever,
          ninety,
          subjectWise,
        }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: UpdateCbseResultClassX :: error",
        error
      );
      throw error;
    }
  }

  // CBSE Result class XII
  async createCbseResultClassXII(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXIIId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: CreateCbseResultClassXII :: error",
        error
      );
      throw error;
    }
  }

  async getCbseResultClassXII() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXIIId
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getCbseResultClassXII :: error",
        error
      );
      throw error;
    }
  }

  async getCbseResultClassXIIById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXIIId,
        id
      );
    } catch (error) {
      console.error(
        "Appwrite service :: getCbseResultClassXIIById :: error",
        error
      );
      throw error;
    }
  }

  async deleteCbseResultClassXII(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXIIId,
        id
      );
      return true;
    } catch (error) {
      console.error(
        "Appwrite service :: deleteCbseResultClassXII :: error",
        error
      );
      return false;
    }
  }

  async updateCbseResultClassXII(
    id,
    {
      heading,
      heading2,
      heading3,
      heading4,
      topper,
      achiever,
      ninety,
      subjectWise,
    }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCbseResultClassXIIId,
        id,
        {
          heading,
          heading2,
          heading3,
          heading4,
          topper,
          achiever,
          ninety,
          subjectWise,
        }
      );
    } catch (error) {
      console.error(
        "Appwrite service :: UpdateCbseResultClassXII :: error",
        error
      );
      throw error;
    }
  }

  // Topper
  async createTopper(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTopperId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateTopper :: error", error);
      throw error;
    }
  }

  async getTopper() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteTopperId
      );
    } catch (error) {
      console.error("Appwrite service :: getTopper :: error", error);
      throw error;
    }
  }

  async getTopperById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTopperId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getTopperById :: error", error);
      throw error;
    }
  }

  async deleteTopper(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTopperId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteTopper :: error", error);
      return false;
    }
  }

  async updateTopper(id, { name, heading1, heading2, percentage, photo }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteTopperId,
        id,
        { name, heading1, heading2, percentage, photo }
      );
    } catch (error) {
      console.error("Appwrite service :: UpdateTopper :: error", error);
      throw error;
    }
  }

  // Achiever
  async createAchiever(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAchieverId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateAchiever :: error", error);
      throw error;
    }
  }

  async getAchieverById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAchieverId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getAchieverById :: error", error);
      throw error;
    }
  }

  async deleteAchiever(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAchieverId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteAchiever :: error", error);
      return false;
    }
  }

  async updateAchiever(id, { name, heading1, heading2, percentage, photo }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAchieverId,
        id,
        { name, heading1, heading2, percentage, photo }
      );
    } catch (error) {
      console.error("Appwrite service :: UpdateAchiever :: error", error);
      throw error;
    }
  }

  // Ninety
  async createNinety(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNinetyId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateNinety :: error", error);
      throw error;
    }
  }

  async getNinetyById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNinetyId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getNinetyById :: error", error);
      throw error;
    }
  }

  async deleteNinety(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNinetyId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteNinety :: error", error);
      return false;
    }
  }

  async updateNinety(id, { rollNo, percentage, studentName }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteNinetyId,
        id,
        { rollNo, percentage, studentName }
      );
    } catch (error) {
      console.error("Appwrite service :: UpdateNinety :: error", error);
      throw error;
    }
  }

  // Subject Wise
  async createSubjectWise(data) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectWiseId,
        ID.unique(),
        { ...data }
      );
    } catch (error) {
      console.error("Appwrite service :: CreateSubject :: error", error);
      throw error;
    }
  }

  async getSubjectWiseById(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectWiseId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getSubjectWiseById :: error", error);
      throw error;
    }
  }

  async deleteSubjectWise(id) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectWiseId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteSubjectWise :: error", error);
      return false;
    }
  }

  async updateSubjectWise(id, { rollNo, percentage, studentName, subject }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubjectWiseId,
        id,
        { rollNo, percentage, studentName, subject }
      );
    } catch (error) {
      console.error("Appwrite service :: UpdateSubjectWise :: error", error);
      throw error;
    }
  }
}

const cbseResultClassXService = new Service();
export default cbseResultClassXService;
