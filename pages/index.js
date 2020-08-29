import Head from 'next/head'
import Link from 'next/link'
import {wp , author} from '../config';

const Home = (props) => {
  const { posts,data } = props
  console.log(data);
  return (
    <div className="content">
      <div className="content__inner">
        <div className="main__contents">
          <h2 className="main__contents__ttl main__contents__ttl--top u-mb--m">新着記事</h2>
          <ul className="side__list--thum">
            {posts.map(post => (
              <li key={post.id} className="side__list--thum__item">
                <img src={`${post.featured_image.src}`} className="side__list__img" />
                <span className="side__list__txt">
                  <Link href="/[slug]" as={`/${post.slug}`}>
                    <a> 
                      <h3 className="side__article__ttl--secondary">
                        {post.title.rendered}
                      </h3>
                    </a>
                  </Link>
                  <p className="newArticleList__txt__meta newArticleList__txt">
                    {post.date}
                  </p>
                </span>
                <Link href="/category/[id]" as={`category/${post.categories}`}>
                  <a>
                    {post.categories}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>    
    </div>
  )
}

export const getStaticProps = async () => {
  // console.log(author);
  const test2 = await fetch (author);
  const data = await test2.json();
  console.log(data);
  
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
      test,
      data
    }
  }
}

export default Home