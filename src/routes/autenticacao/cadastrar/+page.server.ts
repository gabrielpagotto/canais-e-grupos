import { userService } from "$lib/services";
import type { Actions, PageServerLoad } from "./$types";

export const actions: Actions = {
    register: async ({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;

        const user = userService.findById("");
    },
};
