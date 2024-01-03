import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const chats = await prisma.chat.findMany({ where: { status: 'ACTIVE' } });
    return { chats }
};
