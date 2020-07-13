import Head from 'next/head'
import Link from 'next/link'
import '../styles/style.styl'
import wp from '../config';

const Home = (props) => {
  const { posts,test } = props

  console.log(test);

  // console.log(posts[0]);
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
            </li>
          ))}
        </ul>
      </main>
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