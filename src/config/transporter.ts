import { ServerClient } from "postmark";

export const transporter = new ServerClient(process.env.POSTMARK_SECRET!);
