import { account, ID } from "@/api/config/appwrite";
import { auth } from "../interfaces";

const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    if (session) {
      const user = await account.get();
      if (!user.emailVerification) {
        throw new Error("Email Need to be Verified");
      }
    }else{
      return {message:"success"}
    }
};

const register = async (payload: auth.register) => {
  const { email, password, name } = payload;
  await account.create(ID.unique(), email, password, name);
  const result = await account.createVerification(
    'https://example.com' // url
);

return result
  // login(email, password);
};

const logout = async () => {
  return await account.deleteSession("current");
};

const getUsers = async () => {
  const result = await account.get();
  return result;
};

const resetPassword = async (payload: auth.resetPassword) => {
  const { email, url } = payload;
  const result = await account.createRecovery(
    email, // email
    url // url
  );
  return result;
};

//UPDATE RECOVERY

const changePassword = async (payload: auth.changePassword) => {
  const { oldpassword, newpassword } = payload;
  const result = await account.updatePassword(
    newpassword, // password
    oldpassword // oldPassword (optional)
  );

  return result;
};

const updatePhone = async (payload: auth.updatePhone) => {
  const { phone, password } = payload;
  await account.updatePhone(
    phone, // phone
    password // password
  );

  //confirmation sms
};

export {
  login,
  register,
  logout,
  getUsers,
  resetPassword,
  changePassword,
  updatePhone,
};
