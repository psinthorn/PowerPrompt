import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const POST = async (req) => {
    const { prompt, tag, userId} = await req.json();
    console.log(prompt);
    try {
        await connectToDB();
        const newPrompt = Prompt({
            creator: userId,
            prompt: prompt,
            tag: tag,
        })
        console.log(newPrompt);
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {status: 201});
    }catch (error) {
        console.log(error);
        return new Response("Failed to create new prompt", error, {status: 500});
    }
}
