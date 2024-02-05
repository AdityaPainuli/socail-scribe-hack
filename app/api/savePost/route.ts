import { NextResponse } from "next/server";
import OpenAI from "openai";
import { prisma } from "../../../prisma/prisma";

export async function POST(req: Request, res: Response) {
  const { results, topic, targetAudience, tone, keyword, userId } =
    await req.json();

  const query = await prisma.linkedinPost.create({
    data: {
      title: topic,
      userId,
      postData: [targetAudience, tone, keyword],
      postResult: results,
    },
  });

  return NextResponse.json({ content: query });
}
