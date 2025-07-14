

import { userInfo } from "os";
import { authClient } from "./auth-client";
export const userSessionClient = () =>{
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
  const userInformation = session?.user
   return userInformation
}

export const UserDataClient = userSessionClient();