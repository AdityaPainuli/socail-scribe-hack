import { headers } from "next/headers";
import { Webhook } from "svix";

async function handler(req: Request, res: Response) {
  const payload = await res.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signture": headersList.get("svix-signature"),
  };
  // const wh = new Webhook(JSON.stringify(payload),heads)
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
