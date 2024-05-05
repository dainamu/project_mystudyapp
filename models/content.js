import { Schema, model, models } from "mongoose";

const ContentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: [true, "Content is required."],
  },
  tag: {
    type: String,
    required: [true, "tag is required."],
  },
});

const Content = models.Content || model("Content", ContentSchema);
export default Content;
