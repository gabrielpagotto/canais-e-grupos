import db from "$lib/db";
import type { Prisma } from "@prisma/client";

const findAllActive = async () => {
    return await db.chat.findMany({ where: { status: "ACTIVE" } });
};

const findById = async (id: string) => {
    return await db.chat.findUnique({ where: { id } });
};

const create = async (chat: Prisma.ChatCreateInput) => {
    return await db.chat.create({ data: chat });
};

export default { findAllActive, findById, create };
