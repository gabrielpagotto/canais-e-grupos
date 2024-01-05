import db from "$lib/db";
import type { Prisma } from "@prisma/client";

const findById = async (id: string) => {
    return db.user.findFirst({ where: { id } });
};

const findAll = async () => {
    return db.user.findMany();
};

const create = async (user: Prisma.UserCreateInput) => {
    return db.user.create({ data: user });
};

const update = async (id: string, user: Prisma.UserUpdateInput) => {
    return db.user.update({ where: { id }, data: user });
};

const destroy = async (id: string) => {
    return db.user.delete({ where: { id } });
};

export default { findById, findAll, create, update, destroy };
