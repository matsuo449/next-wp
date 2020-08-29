import Link from 'next/link'

const Header = () => {
  
  return (
  <header data-target-header="header">
    <div class="header__news">
      <div data-header="newswrap" class="header__news__inner">
        <p data-header="newstxt" class="header__news__inner__txt">
        </p>
      </div>
    </div>
    <div class="header__inner">
      <h1 class="header__logo"><a href="<?php echo home_url(); ?>"><img src="/svg/logo.svg" alt="ICTキッズ"/><br/><span class="item--pc">幼稚園・保育園ICTシステム比較ならICTキッズ</span></a></h1>
      <div class="header__logo"><a href="<?php echo home_url(); ?>"><img src="/svg/logo.svg" alt="ICTキッズ"/><br/><span class="item--pc">幼稚園・保育園ICTシステム比較ならICTキッズ</span></a></div><a href="/" data-vars-click-id="menu--cv--concierge" class="navMenu__btn--secondary item--pc">
        <p class="u-fs18">保育ICT化無料相談</p></a>
    </div>
    <nav class="navMenu">
      <div class="navMenu__inner">
        <div class="header__logo--nav"><a href="<?php echo home_url(); ?>"><img src="/svg/logo.svg"/><br/><span class="item--pc u-fs10">幼稚園・保育園ICTシステム比較ならICTキッズ</span></a></div>
        <ul class="navMenuList">
          <li class="navMenuList__item">
            <a data-micromodal-trigger="modal-2" data-vars-click-id="link--cv--side--bnr-download" id="bnr--download" class="navMenuItem">
              <svg role="img" width="30" height="30">
                <use xlinkHref="/sprite.svg#download"></use>
              </svg>
              <span class="navMenuItem__txt">保育ICTシステム<br/>比較資料DL</span>              
            </a>
          </li>
            <li class="navMenuList__item"><a href="<?php echo home_url('/'); ?>flow" class="navMenuItem">
              <svg role="img" width="40" height="30">
                <use xlinkHref="/sprite.svg#step"></use>
              </svg>
              <span class="navMenuItem__txt">保育ICT化の<br/>流れ</span></a></li>
            <li class="navMenuList__item"><a href="<?php echo home_url('/'); ?>compare" data-vars-click-id="menu--cv--compare" class="navMenuItem">
              <svg role="img" width="40" height="30">
                <use xlinkHref="/sprite.svg#list"></use>
              </svg>
            <span class="navMenuItem__txt">保育ICT化システム<br/>一覧・比較</span></a></li>
          <li data-trigger-submenu="info" class="navMenuList__item">
            <div class="navMenuItem">
              <svg role="img" width="40" height="30">
                <use xlinkHref="/sprite.svg#smile"></use>
              </svg>
              <span class="navMenuItem__txt">保育<br/>お役立ち情報</span>
            </div>
            <ul data-target-submenu="info" class="header__menu__list__subMenu"><li class="subMenu__item"><a href="' . $cat_link . '" class="subMenu__item__link c-ico--arrow--r"><span></span></a></li>
            </ul>
          </li>
        </ul>
        <div class="navMenu__btn--empty item--pc"></div>
      </div>
    </nav>
  </header>
  )
}


export default Header