import SignupFormValidator from "$lib/form-validators/signup.form-validator";
import prisma from "$lib/prisma";
import { createPasswordHash } from "$lib/utils/encrypt.util";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    let name = data.get("name");
    let email = data.get("email");
    let password = data.get("password");
    let passwordConfirmation = data.get("password_confirmation");

    const fields = { name, email, password, passwordConfirmation }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || typeof passwordConfirmation !== 'string') {
      return fail(400, { invalidType: "Invalid body", fields });
    }

    const errors = SignupFormValidator.getErrors({ name, email, password, passwordConfirmation });
    if (Object.keys(errors).filter(e => errors[e as keyof typeof errors]).length > 0) {
      return fail(400, { errors, fields })
    }

    password = await createPasswordHash(password);
    const user = await prisma.user.create({
      data: {
        name, email, password
      },
    });

    throw redirect(303, `/`);
  }
};
