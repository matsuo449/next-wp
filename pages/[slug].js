import axios from 'axios'
import Link from 'next/link'
import WP from 'wpapi'

const wpClient = new WP({
  endpoint: 'https://ict-kids.com/wp-json'
})

export default ({post}) => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>{post.title.rendered}</h2>
      {post.slug}
      <Link href="/">
        <a>
          Back
        </a>
      </Link>
    </div>
  )
}

export const getStaticProps = async ({params}) => {
  const posts = await wpClient.posts().slug(params.slug)
  return {
      props: {
          post: posts[0]
      }
  }
}

// ダイナミックルーティング時にも静的なファイルを生成
export const getStaticPaths = async () => {
  const posts = await wpClient.posts()
  return {
      paths: posts.map(post => ({
          params: {
              slug: post.slug
          }
      })),
      fallback: false
  }
}
