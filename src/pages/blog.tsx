import Link from "next/link";
import sanityClient from "@/sanity/lib/client";

// Define the type for the blog data
interface BlogPost {
  _id: string;
  title: string;
  author: string;
  blog: string;
  image: string;
  slug: { current: string };
}

const blogQuery = `*[_type == "blog"] {
  _id,
  title,
  author,
  blog,
  image,
  slug,
}`;

export async function getStaticProps() {
  // Fetch the blog data from Sanity
  const blog: BlogPost[] = await sanityClient.fetch(blogQuery);

  return {
    props: {
      blog,
    },
    revalidate: 60, // Optional: Regenerate the page every 60 seconds
  };
}

export default function Blogposts({ blog }: { blog: BlogPost[] }) {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600 mb-4">
          Trending Blogs...!
        </h1>

        {blog.map((key) => (
          <div
            key={key._id}
            className="mb-6 p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
          >
            <Link href={`/blogpost/${key.slug.current}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline cursor-pointer">
                {key.title}
              </h2>
            </Link>
            <p className="text-gray-700 mt-2">{key.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
