import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
                //call another method
            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            console.log("appwrite service error", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            console.log("appwrite service error", error);
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("appwrite service error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        }
        catch (error) {
            console.log("appwrite service error", error);
        }
    }
}



const authService = new AuthService();


export default authService;