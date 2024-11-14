import * as sdk from 'node-appwrite'

export const {
    NEXT_PROJECT_ID, NEXT_API_KEY, NEXT_DATABASE_ID, NEXT_PATIENT_COLLECTION, NEXT_DOCTOR_COLLECTION_ID, NEXT_APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT
} = process.env;

const client = new sdk.Client();


// client
    // .setEndpoint("https://cloud.appwrite.io/v1")
    // .setProject("6703b66300218c25b363")
    // .setKey("standard_d38f2ecae16e52d47c1912fb44cf7e7148bfcb8e8077e3c7da1b615d964d7361575baea4c973875430d739d009e16e5958dea79ebcbd31b48e98aa7446588d7986")

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PROJECT_ID || "6703b66300218c25b363")
  .setKey(process.env.NEXT_API_KEY || "your_api_key_here");


export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);