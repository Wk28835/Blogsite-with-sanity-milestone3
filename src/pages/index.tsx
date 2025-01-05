import Link from 'next/link';
import sanityClient from '../sanity/lib/client';
import Head from 'next/head';
import Image from 'next/image';

// Define the GROQ query
const blogQuery = `*[_type == "blog"] {
  _id,
  title,
  author,
  blog,
  image,
  slug,
}`;

// Define the TypeScript interface for the blog data
interface Blog {
  _id: string;
  title: string;
  author: string;
  blog: string;
  image: string;
  slug: {
    current: string;
  };
}

// Fetch data with getStaticProps
export async function getStaticProps() {
  const blog: Blog[] = await sanityClient.fetch(blogQuery);

  return {
    props: {
      blog,
    },
  };
}

export default function HomePage({ blog }: { blog: Blog[] }) {
  return (
    <div className="max-w-full mx-auto p-6">
      <Head>
        <title>Hunting Coder</title>
        <meta name="keywords" content="nextjs, hunting coder blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center items-center bg-gradient-to-r from-red-600 to-blue-600 py-1 rounded-lg shadow-lg">
        <h1 className="text-white text-4xl font-bold">Welcome to Hunting Coders</h1>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">A Blog for Coders by a Coder..!</p>

        <Image
          className="my-6 rounded-lg shadow-md"
          src="/coders.jpg"
          alt="Coder Image"
          width={1600}
          height={200}
        />

        <h2 className="text-2xl font-semibold text-blue-600 mt-4">Latest Posts:</h2>
        {blog.map((blogs) => (
          <div key={blogs._id} className="space-y-4 mt-6">
            <Link href={`blogpost/${blogs.slug.current}`}>
              <h3 className="text-xl hover:underline cursor-pointer">{blogs.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
