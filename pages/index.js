import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';
import Footer from '../components/footer'
import Intro from '../components/intro'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>James L. Avakian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Intro />



      <div className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (



    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), 'MMMM do, uuu')}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
