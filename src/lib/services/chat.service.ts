import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

const findAllActive = async () => {
    return await prisma.chat.findMany({ where: { status: "ACTIVE" } });
};

const findById = async (id: string) => {
    return await prisma.chat.findUnique({ where: { id } });
};

const create = async (chat: Prisma.ChatCreateInput) => {
    return await prisma.chat.create({ data: chat });
};

export default { findAllActive, findById, create };
