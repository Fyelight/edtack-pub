import { SchemaType, GoogleGenerativeAI } from '@google/generative-ai';

const useGenAi = async (modelType, schema) => {
  const VITE_GOOGLE_AI_STUDIO_API_KEY = "AIzaSyBottpu2Q1606SXtA1gv3USpgX2RHsQObQ";
  const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_STUDIO_API_KEY);
  return genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema
    }
  });
};
const useGetGenerativeModelGP = async (prompt) => {
  const schema = {
    type: SchemaType.ARRAY,
    items: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
          description: "Question Number",
          nullable: false
        },
        title: {
          type: SchemaType.STRING,
          description: "Question",
          nullable: false
        },
        options: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.STRING,
            description: "Question option"
          },
          description: "Question options",
          nullable: false
        },
        correctAnswer: {
          type: SchemaType.STRING,
          description: "Correct answer of question",
          nullable: false
        },
        explanation: {
          type: SchemaType.STRING,
          description: "Detailed steps to achieve the correct answer",
          nullable: false
        }
      },
      required: ["id", "title", "options", "correctAnswer"]
    }
  };
  const model = await useGenAi("gemini-1.5-flash", schema);
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(JSON.parse(response.text()));
  return JSON.parse(response.text());
};

export { useGetGenerativeModelGP as u };
