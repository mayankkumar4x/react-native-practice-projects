/* eslint-disable prettier/prettier */
import {ID, Account, Client} from 'appwrite';
import Config from 'react-native-config';

const appwriteClient = new Client();
const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = Config.APPWRITE_PROJECT_ID;

class AppwriteService {
  account;
  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

      this.account = new Account(appwriteClient);

      //create a new record of user
      const createAccount = async({email, password, name}) => {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount){
                //TODO create login feature
                return login({email, password});
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log('createAccount() :: ' + error);
        }
      };

      //login in account
      const login = async({email, password}) => {
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log('login account :: ' + error);
        }
      };

      //get current user from session
      const getCurrentUser = async() => {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('get current user :: ' + error);
        }
      };

      //logout - delete session
      const logout = async() => {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log('logout :: ' + error);
        }
      };
  }
}


export default AppwriteService;
