import Head from 'next/head'
import Link from 'next/link'
import wp from '../config';

const Home = (props) => {
  const { posts,test } = props
  console.log(posts);
  return (
    <div className="content">
      <h1 className="test">
        新着記事
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <img src={`${post.featured_image.src}`}/>
            <Link href="/[slug]" as={`/${post.slug}`}>
              <a>
                {post.title.rendered}
              </a>
            </Link>
            <Link href="/category/[id]" as={`category/${post.categories}`}>
              <a>
                {post.categories}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  //投稿
  const posts = await wp.posts()
  //固定ページ
  const pages = await wp.pages()
  //カテゴリー取得
  const categories = await wp.categories()
  //特定のカテゴリー20個取得
  const test = await wp.posts().categories(561).perPage(20)
  return {
    props: {
      posts,
      pages,
      categories,
      test
    }
  }
}

export default Home