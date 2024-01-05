import prisma from "$lib/prisma";
import { ChatPlatform, ChatType } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { chatService, userService } from "$lib/services";

export const load: PageServerLoad = async () => {
    return { users: userService.findAll() };
};

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        let title = data.get("title");
        let details = data.get("details");
        let iconUrl = data.get("iconUrl");
        let accessUrl = data.get("accessUrl");
        let userId = data.get("userId");

        if (!title || !details || !iconUrl || !accessUrl || !userId) {
            return fail(400, { title, details, iconUrl, accessUrl, userId, missing: true });
        }

        if (typeof title != "string" || typeof details != "string" || typeof iconUrl != "string" || typeof accessUrl != "string" || typeof userId != "string") {
            return fail(400, { incorrect: true });
        }

        const user = {
            title,
            details,
            iconUrl,
            accessUrl,
            userId,
            platform: ChatPlatform.TELEGRAM,
            type: ChatType.CHANNEL,
        };
        await chatService.create(user);

        throw redirect(303, `/`);
    },
};
