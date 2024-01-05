import prisma from "$lib/prisma";
import type { Prisma } from "@prisma/client";

const findById = async (id: string) => {
    return prisma.user.findFirst({ where: { id } });
};

const findAll = async () => {
    return prisma.user.findMany();
};

const create = async (user: Prisma.UserCreateInput) => {
    return prisma.user.create({ data: user });
};

const update = async (id: string, user: Prisma.UserUpdateInput) => {
    return prisma.user.update({ where: { id }, data: user });
};

const destroy = async (id: string) => {
    return prisma.user.delete({ where: { id } });
};

export default { findById, findAll, create, update, destroy };
