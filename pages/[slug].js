// import axios from 'axios'
import Link from 'next/link'
import wp from '../config'

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

// (1) SSG対象となるパスのリストを定義
// SSGの対象にしたいパスを指定するのがgetStaticPathsの役目
export const getStaticPaths = async () => {
  const posts = await wp.posts()
  return {
      paths: posts.map(post => ({
          params: {
              slug: post.slug
          }
      })),
      fallback: false
  }
}

// (2) 実際にSSGする関数
// paramsには上記pathsで指定した値が入る（全件ではなく1postずつ）
export const getStaticProps = async ({params}) => {
  const posts = await wp.posts().slug(params.slug)
  return {
      props: {
          post: posts[0]
      }
  }
}

