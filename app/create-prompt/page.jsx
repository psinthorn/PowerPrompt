"use client"

import Form from '@components/Form'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

 const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  //const handleSubmit = () => {}

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("create prompt");
    try {
      const response = await fetch("/api/prompt/new",{
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag:  post.tag,
          userId: session?.user.id
        })
      })

      console.log("response status: ",response.status);

      if(response.ok){
        router.push("/");
      }

    }catch (error) {
      console.log(error);
    }finally{
      setSubmitting(false);
    }
  };

  return (
    <Form 
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt