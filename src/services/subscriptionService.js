import { config } from "./appwrite";

const subscriptionService = {
  async getPlans() {
    const url = `${config.endpoint}/databases/${config.dbID}/collections/${config.col.plans}/documents`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Appwrite-Project": config.projectID,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      console.error("Error fetching plans:", err.message);
      return { error: err.message };
    }
  },

  //get addons
  async getAddons() {
    const url = `${config.endpoint}/databases/${config.dbID}/collections/${config.col.addons}/documents`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Appwrite-Project": config.projectID,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      console.error("Error fetching addons:", err.message);
      return { error: err.message };
    }
  },
};

export default subscriptionService;
