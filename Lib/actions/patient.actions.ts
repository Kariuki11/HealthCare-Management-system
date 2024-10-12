import { Query, ID } from "node-appwrite"
import { users } from "../appwrite.config"
// import { Client, Account, ID, Query } from "appwrite"; // Ensure you have the right imports for Appwrite SDK

export const createUser = async(user: CreateUserParams) => {
    try {
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined, 
            user.name
        );
        return newUser;
    } catch (error: any) {
        console.error(error)
        if(error && error?.code === 409){
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])

            return documents?.users[0]
        } else {
            throw new Error("Failed to create user"); // Handle any other errors
          }
    }
}
type CreateUserParams = {
  email: string;
  phone?: string; // Optional
  name: string;
};