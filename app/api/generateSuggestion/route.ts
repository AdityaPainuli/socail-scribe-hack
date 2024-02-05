import { useAuth, useSession } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { prisma } from "../../../prisma/prisma";

function convertToFormattedArray(inputArray: any) {
  const formattedArray: any = [];

  // Iterate over each object in the input array
  inputArray.forEach((obj: any) => {
    // Extract values from the current object
    const title = obj.title;
    const postData = obj.postData;

    // Extract target audience, tone, and keywords from postData array
    const targetAudience = postData[0];
    const tone = postData[1];
    const keywords = postData[2];

    // Create a new object with the formatted data
    const formattedObj = {
      topic: title,
      targetAudience: targetAudience,
      keywords: keywords,
    };

    // Add the formatted object to the formatted array
    formattedArray.push(formattedObj);
  });

  return formattedArray;
}

export async function POST(req: Request, res: Response) {
  const { userId } = await req.json();

  const query = await prisma.linkedinPost.findMany({
    where: {
      userId,
    },
  });

  const data = convertToFormattedArray(query);

  const openai = new OpenAI({
    apiKey: process.env.OPENAPI_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          Generate new LinkedIn post suggestions based on your past data. Provide the topic and details of your previous posts, including target audience, tone, and keywords. Our AI will analyze your data to generate 2-3 max tailored suggestions to help you create engaging content for your audience
          past data = ${data}


          give the result in the format of -
[
{
title: "string",
content: "string"
},
{
title:"string",
content:"string"
}]
      `,
      },
    ],
    model: "gpt-4",
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return NextResponse.json({
    content: JSON.parse(String(completion.choices[0].message.content)),
  });
}
