<header class="header @if (APP::title() !="Strona Główna") header--noabsolute  @endif "  data-header>
  <div class="container containter--mobilefix">
    <div class="header__wrapper">
      <a class="header__brand-wrapper" href="{{ home_url('/#Start') }}">
        <img class="header__brand" src="{{  get_field('logo', 'options')['url'] }}" alt="3X3">
      </a>
      <button class="header__hamburger hamburger" data-toggle-menu>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </button>
        <div class="header__wrapmenu">
          @include('blocks.lg-pick')
            <nav class="header__nav" data-menu>
              @if (has_nav_menu('primary_navigation'))
              {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'header__menu']) !!}
              @endif
            </nav>
      </div>
    </div>
  </div>
</header>
