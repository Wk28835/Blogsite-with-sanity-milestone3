import  client  from "@/sanity/lib/client"; // Replace with your configured Sanity client
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        // Fetch comments from Sanity
        const query = '*[_type == "comments"]{_id,comments}';
        const comments = await client.fetch(query);
        return res.status(200).json(comments);
      }
    
      if (req.method === "POST") {
        const { comments } = req.body;
        if (!comments) {
          return res.status(400).json({ error: "Comment cannot be empty" });
        }
    
        try {
          const newComment = await client.create({
            _type: "comments",
            comments,
          });
          return res.status(201).json({ comment: newComment });
        } catch (error) {
          console.error("Error creating comment:", error);
          return res.status(500).json({ error: "Failed to create comment" });
        }
      }
    
      if (req.method === "DELETE") {
        const { commentId } = req.body;
        if (!commentId) {
          return res.status(400).json({ error: "Comment ID is required" });
        }
    
        try {
          await client.delete(commentId);
          return res.status(200).json({ message: "Comment deleted successfully" });
        } catch (error) {
          console.error("Error deleting comment:", error);
          return res.status(500).json({ error: "Failed to delete comment" });
        }
      }
    
      return res.status(405).json({ error: "Method not allowed" });
}
