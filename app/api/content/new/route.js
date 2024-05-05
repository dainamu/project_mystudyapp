import { connectToDB } from "@/util/database";
import Content from "@/models/content";
export const POST = async (req, res) => {
  const { userId, content, tag } = await req.json();
  try {
    await connectToDB(); // 毎回行う必要がある。 処理が終わるとなくなる
    const newContent = new Content({
      creator: userId,
      content,
      tag,
    });

    await newContent.save();
    return new Response(JSON.stringify(newContent), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new Content", { status: 500 });
  }
};
