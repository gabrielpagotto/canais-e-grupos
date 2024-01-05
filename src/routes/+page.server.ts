import { chatService } from "$lib/services";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return { chats: await chatService.findAllActive() };
};
