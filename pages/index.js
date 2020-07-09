import Head from 'next/head'
import Link from 'next/link'
import WP from 'wpapi'

const wpClient = new WP({
  // endpoint: 'http://testaccount.main.jp/ict-kids/wp-json'
  // endpoint: 'http://matsuo449.wp.xdomain.jp/wp-json'
  //ICTキッズ（AWS WP）の記事データを取得
  endpoint: 'http://3.92.3.206/wp-json'
})

const Home = (props) => {
  const { posts } = props

  // console.log(posts[0]);
  
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="">
          新着記事
        </h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
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
  const data = await wpClient.posts()
  return {
    props: {
      posts: data
    }
  }
}

export default Home