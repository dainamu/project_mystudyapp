import { connectToDB } from "@/util/database";
import Content from "@/models/content";
export const GET = async (req, res) => {
  //const { userId, content, tag } = await req.json();
  try {
    await connectToDB(); // 毎回行う必要がある。 処理が終わるとなくなる
    const content = await Content.find({}).populate("creator");
    return new Response(JSON.stringify(content), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all content", { status: 500 });
  }
};
