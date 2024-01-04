
import Container from '@/components/container';
import { type PostMetaModel, getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

type HomeProps = {
  posts: PostMetaModel[];
}

function HomePage({ posts }: HomeProps) {
  return (
    <>
      {posts && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {/* {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))} */}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {/* {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))} */}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}

type Props = {
  // 博客文章数据模型
  allPostsData: PostMetaModel[];
}

export default function Home({ allPostsData }: Props) {
  console.log(allPostsData);
  return <HomePage posts={allPostsData}/>;
}

export const getStaticProps = (async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData } satisfies Props,
  };
});
