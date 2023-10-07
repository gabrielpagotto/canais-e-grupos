import prisma from "$lib/prisma";
import { ChatPlatform, ChatType } from "@prisma/client";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const users = await prisma.user.findMany();
  return { users };
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
      return fail(400, {title, details, iconUrl, accessUrl, userId, missing: true });
    }

    if (typeof title != 'string' || typeof details != 'string' || typeof iconUrl != 'string' || typeof accessUrl != 'string' || typeof userId != 'string') {
      return fail(400, { incorrect: true });
    }

    await prisma.chat.create({
      data: {
          title,
          details,
          iconUrl,
          accessUrl,
          userId,
          platform: ChatPlatform.TELEGRAM,
          type: ChatType.CHANNEL,
      },
    });

    throw redirect(303, `/`);
  }
};
