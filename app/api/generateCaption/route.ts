import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request, res: Response) {
  const { topic, primaryKeyword } = await req.json();
  const openai = new OpenAI({
    apiKey: process.env.OPENAPI_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
    Generate a captivating Instagram caption with our AI-powered tool. Simply provide the following details:

    Topic: ${topic}

    Primary Keywords: ${primaryKeyword}
    Our advanced AI will craft a compelling post tailored to your specifications, helping you engage your audience and elevate your Instagram presence effortlessly.Try to keep it short and simple. use some hastags as well in the caption
    Generate three different captions in the format of:
    [
        caption: "string",
        caption:"string",
        ....
    ]
    `,
      },
    ],
    model: "gpt-4",
    temperature: 1,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return NextResponse.json({ content: completion.choices[0].message.content });
}
