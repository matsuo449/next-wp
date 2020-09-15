import Head from 'next/head'
import Link from 'next/link'
import { wp, author } from '../config'

const Home = (props) => {
  const { posts, data } = props
  console.log(data)
  return (
    <div className="content">
      <div className="content__inner">
        <div className="main__contents">
          <h2 className="main__contents__ttl main__contents__ttl--top u-mb--m">
            新着記事
          </h2>
          <ul className="side__list--thum">
            {posts.map((post) => (
              <li key={post.id} className="side__list--thum__item">
                <img
                  src={`${post.featured_image.src}`}
                  className="side__list__img"
                />
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
                {/* <Link href="/category/[id]" as={`category/${post.categories}`}>
                  <a>{post.categories}</a>
                </Link> */}
              </li>
            ))}
          </ul>
        </div>

        <aside class="side__contents side__contents--top">
          <div class="search__area item--sp u-mb--xxl-sp"></div>
          <section class="side__section">
            <ul class="side__section__bnrList">
              <li class="side__section__bnrList__item">
                <a
                  data-micromodal-trigger="modal-2"
                  data-vars-click-id="link--cv--side--bnr-download"
                  id="bnr--download"
                  class="ga--event"
                >
                  <img
                    src="https://ict-kids.com/wp/wp-content/themes/ictkids/img/common/bnr_dl.jpg"
                    alt="保育ICTシステム比較資料ダウンロード"
                    loading="lazy"
                    class="lazyload"
                  />
                </a>
              </li>
              <li class="side__section__bnrList__item">
                <a
                  href="/concierge/?formId=c"
                  id="bnr--concierge-c"
                  data-vars-click-id="link--cv--side-c"
                  class="ga--event"
                >
                  <img
                    src="https://ict-kids.com/wp/wp-content/themes/ictkids/img/common/bnr-concierge_c.jpg"
                    alt="保育園ICTシステム探しをお手伝い！相談無料 ICTキッズコンシェルジュ"
                    loading="lazy"
                    class="lazyload"
                  />
                </a>
              </li>
              <li class="side__section__bnrList__item">
                <a
                  href="/concierge/?formId=c"
                  id="bnr--concierge-e"
                  data-vars-click-id="link--cv--side-e"
                  class="ga--event"
                >
                  <img
                    src="https://ict-kids.com/wp/wp-content/themes/ictkids/img/common/bnr-concierge_e.jpg"
                    alt="保育園ICTシステム探しをお手伝い！相談無料 ICTキッズコンシェルジュ"
                    loading="lazy"
                    class="lazyload"
                  />
                </a>
              </li>
              <li class="side__section__bnrList__item">
                <a
                  href="/compare"
                  data-vars-click-id="link--cv--compare"
                  class="ga--event"
                >
                  <img
                    src="https://ict-kids.com/wp/wp-content/themes/ictkids/img/common/bnr-compare-pc.jpg"
                    alt="ICTシステム徹底比較 色んなシステムあるけど、どう違うの？"
                    loading="lazy"
                    class="lazyload"
                  />
                </a>
              </li>
            </ul>
          </section>
          <form role="search" action="/" method="get" class="search__form">
            <fieldset>
              <input
                type="text"
                name="s"
                value=""
                placeholder="キーワード検索"
                id="search__txtArea--sideMenu"
              />
              <button class="search__submit"></button>
            </fieldset>
          </form>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </aside>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const test2 = await fetch(author)
  const data = await test2.json()
  console.log(data)

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
      data,
    },
  }
}

export default Home
