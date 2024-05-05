"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Form from "@/components/Form";

const CreateRecord = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    content: "",
    tag: "",
  });
  const createContent = async (e) => {
    e.preventDefault();
    console.log("createContentを実行");
    setSubmitting(true);
    try {
      const response = await fetch("/api/content/new", {
        method: "POST",
        body: JSON.stringify({
          content: post.content,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form
        type="Create"
        post={post}
        setpost={setPost}
        submitting={submitting}
        handleSubmit={createContent}
      ></Form>
    </main>
  );
};

export default CreateRecord;
