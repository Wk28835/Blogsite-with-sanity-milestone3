import sanityClient from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface BlogPostProps {
  blogPost: {
    _id: string;
    title: string;
    author: string;
    blog: string;
    image: string;
  } | null;
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

  // Handle missing data
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
  if (!blogPost) {
    return (
      <div className="text-center text-4xl mt-32">
        Posts will be updated soon! Stay tuned with Us
      </div>
    );
  }

  return (
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
  );
}
