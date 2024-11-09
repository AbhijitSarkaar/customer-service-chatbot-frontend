import OpenAI from "openai";

const OPENAI_MODEL = "gpt-4o-mini";

const openai = new OpenAI({
  apiKey:
    "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",
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
