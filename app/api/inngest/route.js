import { serve } from "inngest/next";
import { inngest, syncuserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
   syncuserCreation,
   syncUserUpdation,
   syncUserDeletion
  ],
});
