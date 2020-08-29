// import axios from 'axios'
import Link from 'next/link'
import {wp} from '../../config'

export default ({posts,category}) => {
  console.log(category);
  return (
    <div>
      <h1>Hello</h1>
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
        id: post.categories.toString()
      }
    })),
    fallback: false
  }
}

// (2) 実際にSSGする関数
// paramsには上記pathsで指定した値が入る（全件ではなく1postずつ）
export const getStaticProps = async ({params}) => {
  const posts = await wp.posts().categories(params.id)
  return {
    props: {
      posts,
      category: params.id
    }
  }
}

