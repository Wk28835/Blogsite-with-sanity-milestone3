import sanityClient from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPostProps {
  blogPost: {
    _id: string;
    title: string;
    author: string;
    blog: string;
    image: string;
  } | null;
}

interface Comment {
  _id: string;
  comments: string;
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    author,
    blog,
    image
  }`;

  const blogPost = await sanityClient.fetch(query, { slug: params.slug });

  if (!blogPost) {
    return {
      notFound: true, // Show 404 page if the blog post is not found
    };
  }

  return {
    props: {
      blogPost,
    },
  };
}

export default function BlogPost({ blogPost }: BlogPostProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async (): Promise<void> => {
      const response = await fetch("/api/comment");
      const data: Comment[] = await response.json();
      setComments(data);
    };
    fetchComments();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comments: newComment }),
    });
    if (response.ok) {
      const newCommentFromServer: { comment: Comment } = await response.json();
      setComments([...comments, newCommentFromServer.comment]);
      setNewComment("");
    } else {
      console.error("Failed to post comment!");
    }
  };

  const handleRemovecomment = async (commentId: string): Promise<void> => {
    const response = await fetch("/api/comment", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commentId }),
    });

    if (response.ok) {
      setComments(comments.filter((comment) => comment._id !== commentId));
    } else {
      console.error("Failed to delete comment");
    }
  };

  if (!blogPost) {
    return (
      <div className="text-center text-4xl mt-32">
        Posts will be updated soon! Stay tuned with Us
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-fit mt-6 mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-4">{blogPost.title}</h1>
        <p className="text-gray-600 mb-6">By {blogPost.author}</p>
        {blogPost.image && (
          <div className="mb-6 rounded-lg shadow-md">
            <Image
              src={urlFor(blogPost.image).url()}
              alt={blogPost.title}
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
        )}
        <p className="prose">{blogPost.blog}</p>
      </div>

      <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment: Comment) => (
            <div key={comment._id} className="p-3 border rounded-md">
              <p className="text-gray-800">{comment.comments}</p>
              <span className="text-sm text-gray-500">Posted by John Doe</span>
              <button
                onClick={() => handleRemovecomment(comment._id)}
                className="ml-64 bg-red-500 rounded px-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <form id="comment-form" onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              name="comment"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
