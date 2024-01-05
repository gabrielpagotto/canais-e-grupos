import { chatService } from "$lib/services";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params: { id } }) => {
    return { chat: chatService.findById(id) };
};
