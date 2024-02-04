import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request, res: Response) {
  const { topic, keywords, tone, targetAudience } = await req.json();
  const openai = new OpenAI({
    apiKey: process.env.OPENAPI_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
    Generate a captivating LinkedIn post with our AI-powered tool. Simply provide the following details:

    Topic: ${topic}
    Target Audience: ${targetAudience}
    Primary Keywords: ${keywords}
    Tone: ${tone}
    Our advanced AI will craft a compelling post tailored to your specifications, helping you engage your audience and elevate your LinkedIn presence effortlessly.Try to keep it 100-150 words  for the post which you generate
    `,
      },
    ],
    model: "gpt-4",
  });
  return NextResponse.json({ content: completion.choices[0].message.content });
}
