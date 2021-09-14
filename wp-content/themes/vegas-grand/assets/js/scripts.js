//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
            // $('.sidenav').css({'overflow-y': 'auto'})
        }

        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            // $('.transition-menu').css({width: '100%', transition: '0.4s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            // $('.menu-cnt').css({width: '0%'});
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu')
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        $('.menu-cnt').removeClass('transition-menu');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});
//  ================ -menu-click-end- ================


$('.pages_jackpot_slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrows: false,
});


$('.nav_menu>ul>li ').click(function () {
    $('.nav_menu>ul>li').removeClass("nav_menu_active");
    $(this).addClass("nav_menu_active");
});


if ($('.nav_menu ul li').has('nav_menu_drop')) {
    $('.nav_menu_drop').parent().addClass('nav_drop_active');
}


$(document).ready(function () {
    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');

    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })


    addActiveClass('reviews-min-text-hrefs-2', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs-2', 'reviews-min-info-2', 'active-href', 'click-reviews-2');

    $('.click-reviews-2').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs-2', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs-2', 'reviews-min-info-2', 'active-href', 'click-reviews-2');
    })

    //    add Active Class for case menu
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    //  change  active class with click menu case
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({opacity: 0, display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {

            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({opacity: 1, display: 'block', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({opacity: 1, display: 'block', height: 'auto'});

                }
            })
        }
    }

})

jQuery(function (jQuery) {
    jQuery('.loadmore a').click(function (e) {
        e.preventDefault();
        jQuery(this).text('Загружаю...');
        var data = {
            'action': 'loadmore',
            'query': posts,
            'page': current_page
        };
        jQuery.ajax({
            url: ajaxurl,
            data: data,
            type: 'POST',
            success: function (data) {
                if (data) {
                    jQuery('.loadmore a').text('Загрузить ещё');
                    jQuery('.games_vegas_main').append(data);
                    current_page++;
                    if (current_page == max_pages) jQuery(".loadmore a").remove();
                } else {
                    jQuery('.loadmore a').remove();
                }
            }
        });
    });



});