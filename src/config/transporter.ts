import { Conf } from "@/config";
import { ServerClient } from "postmark";

export const transporter = new ServerClient(Conf.POSTMARK_SECRET!);
