// src/config/appwrite.ts
import { Client, Account, Databases } from "appwrite";

const client = new Client()
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);

export { client, account, databases };
