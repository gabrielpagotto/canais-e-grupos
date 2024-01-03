import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: { id } }) => {
    const chat = await prisma.chat.findUnique({ where: { id } });
    return { chat }
};
