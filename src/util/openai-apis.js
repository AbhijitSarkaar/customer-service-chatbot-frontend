import OpenAI from "openai";

const OPENAI_MODEL = "gpt-4o-mini";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function openai_chat_completion(question) {
  const completion = await openai.chat.completions.create({
    model: OPENAI_MODEL,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: question,
      },
    ],
  });

  return completion.choices[0].message;
}

export default openai_chat_completion;
