import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { buildCourseContext } from "@/lib/course-context";

const courseContext = buildCourseContext();

const systemPrompt = `You are the MHS Course Guide assistant for Montclair High School's 2026-2027 Program of Studies. You help parents and students understand course options, prerequisites, graduation requirements, and plan course schedules.

You have complete knowledge of every course offered, their prerequisites, grade levels, credit values, and how they connect in track pathways.

Rules:
- Be concise and direct. Parents are busy.
- When recommending courses, always mention prerequisites and grade requirements.
- If a question is ambiguous, ask a clarifying question.
- When discussing prerequisites with grade cutoffs (like "≥85"), mention them explicitly.
- You can suggest courses but always remind parents to confirm with their school counselor.
- If asked about something outside the MHS course catalog, say you can only help with MHS course planning.
- Use course names and codes when referencing specific courses.
- When listing multiple courses, use a brief format, not long paragraphs.

Here is the complete MHS course catalog and requirements data:

${courseContext}`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-sonnet-4-5-20250929"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
