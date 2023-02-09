import type { Actions } from "./$types";
import { z } from "zod";
import { fail } from "@sveltejs/kit";


const talentSchema = z.object({
  name: z.string().trim().min(1),
  role: z.enum(["frontend-engineer", "backend-engineer", "fullstack-engineer", "architect"]),
  email: z.string().trim().email().min(1)
});


export const actions: Actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData());
    const talentData = talentSchema.safeParse(formData);
    console.log(talentData);

    if (!talentData.success) {
      const errors = talentData.error.errors.map((error) => {
        return {
          field: error.path[0],
          message: error.message
        };
      });

      return fail(400, { error: true, errors });

    }



  }

};

