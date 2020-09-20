$(document)
  .ready(function() {
    $('#input').css('display', 'block')
    $('input[type=text]').attr('tabindex', -1).focus()
    if (location.hostname === "localhost") alert('local')
    $('html body #wrapper #container #main').on('scroll touchmove', function (){
      if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 350 &&
          reader == true && first == false && stop == true){
            $.loading()
            stop = false
            xml(null, null, $.random())
      }
    })
    toggle(quickFeeds)
  })
  .on('touch click', 'a', function(e) {
    if ($(this).attr('ext')) $(this).attr('ext').blank()
    e.stopPropagation()
  })
  .on('touch click', 'html body #wrapper #container #main #visit #page #front #label .link, ' +
    'html body #wrapper #container #main #visit #page #front #label .show',
    function(e) {
      quickFeeds = quickFeeds != true
      toggle(quickFeeds)
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #search #home',
    function(e) {
      id = 0
      $.loading()
      nextAngle -= 180
      location.pathname.state()
      $(document).ready(function(){
      $('html body #wrapper #container #main #top').hide()
      $('html body #wrapper #container #main #visit .quick .feed').empty()
      $('html body #wrapper #container #main #visit').css('visibility','visible').show()
      $('html body #wrapper #container #main #visit #page #front .focus input[type=text]').attr('tabindex', -1).focus()
        toggle(quickFeeds)
      })
      document.title = ''
      $.unloading()
      quick(7)
  })
  .on('touch click',
    'html body #wrapper #container, ' +
    'html body #wrapper #container #main, ' +
    'html body #wrapper  #container #main #visit, ' +
    'html body #wrapper #container #main #top #arm, ' +
    'html body #wrapper #container #main #top #option',
    function(e) {
      if (!$('html body #wrapper #container #main #top #arm #search input[type=text]').is(':focus')) {
        $('html body #wrapper #container #main #top #arm #search #input input[type=text]')
          .css({
            'text-align': 'center',
            'padding-left': '0'
          }).val('Search')
        $('html body #wrapper #container #main #top #arm #search #input .icon').removeClass('slide')
        $('html body #wrapper #container #main #top #arm #search #match').hide()
      }
      if (!$('html body #wrapper #container #main #visit #page #front .focus input[type=text]').is(':focus')) {
        $('html body #wrapper #container #main #visit #page #front #first').hide()
      }
   })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-map', function(e) {
    $.loading()
    onlyImages = onlyImages != true
    notify ('Only Images Now ' + onlyImages.toString().capitalize())
    if (reader == false) populate(category)
  })
  .on('touch click', 'html body #wrapper #container #toggle', function(e) {
    if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    } else {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    }
    setTimeout(function() {
      $('html body #wrapper #container #main #visit #page .focus input[type=text]').attr('tabindex', -1).focus()
    }, 1000)
    uri.state()
    visual()
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-heart, ' +
      'html body #wrapper #container #main #top #arm #option .fa-heart-o', function(e) {
        $.loading()
        $(this).toggleClass('fa-heart-o fa-heart')
        if (reader == true) {
          notify('Reading ' + category + ' disabled.')
          $('html body #wrapper #container #main .center #bottom').remove()
          $('html body #wrapper #container #main .center').append(
            "<div id='bottom'>" +
            "  <div class='back btn' index=" + menu.indexOf(menu[$.back()]) + ">" +
            "      <span class='front'></span>" +
            "      <span class='flip-front'>Previous</span>" +
            "      <span class='flip-back'>" + String(menu[$.back()].id.match(/[^\/]+$/g)).substring(0,9) + "...</span>" +
            "  </div>" +
            "  <div class='bottom'>acktic</div>" +
            "  <div class='next btn' index=" + menu.indexOf(menu[$.next()]) + ">" +
            "      <span class='front'></span>" +
            "      <span class='flip-front'>Next</span>" +
            "      <span class='flip-back'>" + String(menu[$.next()].id.match(/[^\/]+$/g)).substring(0,9) + "...</span>" +
            "  </div>" +
            "</div>"
          )
          reader = false
          first = true
          stop = false
          $.unloading()
          populate(category)
        } else if (reader == false) {
          notify('Reading ' + category + ' enabled.')
          reader = true
          if ($('html body #wrapper #container #main .center').length) first = false
          else first = true
          stop = true
          xml(null, null, $.random())
      }
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-home',
  function(e) {
    id = 0
    $.loading()
    location.pathname.state()
    $('html body #wrapper #container #main #visit').hide()
    populate(category)
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-sun',
  function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = contrast != true
      op = op != true
    }
    if (op == 0) notify('Invert Visual Applied')
    else if (op == 1) notify('Opposite Visual Applied')
    uri.state()
    visual()
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-code',
  function(e) {
    $.loading()
    var code = []
    for (i = 1; i <= menu.length - 1; i++) {
      if (onlyImages == true){
        if (menu[i].cat == category && menu[i].media == true) code.push(menu.indexOf(menu[i]))
      } else if (onlyImages == false){
        if (menu[i].cat == category) code.push(menu.indexOf(menu[i]))
      }
    }
    var n = code[Math.floor(Math.random() * code.length - 1)]
    xml(null, null, n)
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-terminal',
  function(e) {
    $.loading()
      xml(null, null, $.random())
  })
  .on('touch click', 'html body #wrapper #container #main .content .status .filter, ' +
    'html body #wrapper #container #main #group .air .populate, ' +
    'html body #wrapper #container #main #group .result .filter, ' +
    'html body #wrapper #container #main #group .result .populate',
    function(e) {
      $.loading()
      $('html body #wrapper #containter #visit').hide()
      xml(null, null, $(this).attr('aria-item'))
  })
  .on('mouseenter', 'html body #wrapper #container #main .content .status .filter, ' +
      'html body #wrapper #container #main #group .air .populate, ' +
      'html body #wrapper #container #main #group .result .filter, ' +
      'html body #wrapper #container #main #group .result .populate',
      function(e) {
        if (op == 0)
          $(this).toggleClass('overlay')
          $(this)
            .on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
              function(e) {
                $(this).removeClass('overlay')
                void this.clientWidth
                $(this).addClass('overlay')
            })
  })
  .on('mouseleave', 'html body #wrapper #container #main .content .status .filter, ' +
    'html body #wrapper #container #main #group .air .populate, ' +
    'html body #wrapper #container #main #group .result .filter, ' +
    'html body #wrapper #container #main #group .result .populate',
    function(e) {
      if (op == 0) $(this).removeClass('overlay')
  })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .header .fa-ellipsis-h, ' +
    'html body #wrapper #container #main .center .channel .item .header .fa-ellipsis-h',
    function(e) {
        $(this)
        .parents('html body #wrapper #container #guide .sticky .wrap, ' +
          'html body #wrapper #container #main .center .item .classic')
            .find('.url').select()
        document.execCommand('copy')
        var $this = $(this)
        $(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
        setTimeout(function() {
          $this.removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
        }, 250)
        notify('URL Copied to Clipboard')
        e.stopPropagation()
  })
  .on('touch click', 'html body #wrapper #container #main #visit #page .quick .feed .assetTranslation', function(e) {
      $.loading()
      $('html body #wrapper #container #main #visit').hide()
      $('html body #wrapper #container #main #top').show()
      populate($(this).attr('aria-item'))
  })
  .on('touch click', 'html body #wrapper #container #main .center .quick .feed .asset, ' +
    'html body #wrapper #container #main #visit #page .quick .feed .asset', function(e) {
      $('html body #wrapper #container #main #visit #page .quick .feed').empty()
      $.loading()
      $('html body #wrapper #container #main #visit').hide()
      $('html body #wrapper #container #main #top').show()
      if ($.active == 0) xml(null, null, $(this).attr('aria-item'))
  })
  .on('touchmove', 'html body #wrapper #container #visit #main #page .quick .feed',
  function(e) {
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 10; i++)
          $('html body #wrapper #container #main #visit #page .quick .feed .asset:first').remove()
      quick(10)
  })
  .on('touchmove', 'html body #wrapper #container #main .center .quick .feed', function(e) {
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 10; i++)
          $('html body #wrapper #container #main .center .quick .feed .asset:first').remove()
        feed(10)
  })
  .on('touch click',
    'html body #wrapper #container #main #visit #page .quick .right, ' +
    'html body #wrapper #container #main #visit #page .quick .fa-angle-right',
    function(e) {
		var $this = $(this)
        var leftPos = $(this).parents('html body #wrapper #container #main .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main .quick')
          .find('.feed').animate({
            scrollLeft: leftPos + $this.parents('.quick').width()
          }, 'fast')
        if ($(this).parents('html body #wrapper #container #main .quick')
              .find('.feed')
          .scrollLeft() >= 0) $(this).parents('html body #wrapper #container #main .quick')
                                .find('.left').show()
        if ($(this).parents('html body #wrapper #container #main .quick .feed')
              .scrollLeft() >= 3000)
          for (i = 0; i < 10; i++)
            $(this).parents('html body #wrapper #container #main .quick .feed')
              .find('.asset:first').empty()
        quick(10)
  })
  .on('touch click',
    'html body #wrapper #container #main #visit #page .quick .left, ' +
    'html body #wrapper #container #main #visit #page .quick .fa-angle-left',
    function(e) {
		var $this = $(this)
        var leftPos = $(this).parents('html body #wrapper #container #main .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main .quick')
          .find('.feed').animate({
            scrollLeft: leftPos - $this.parents('.quick').width()
          }, 'slow')
        if ($(this).parents('html body #wrapper #container #main .quick')
              .find('.feed')
          .scrollLeft() <= 892) {
            $(this).parents('html body #wrapper #container #main .quick')
              .find('.left').hide()
            $(this).parents('html body #wrapper #container #main .quick')
              .find('.right, .fa-angle-right').show()
        }
        else $(this).parents('html body #wrapper #container #main .quick')
               .find('.left').show()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .quick .right, ' +
    'html body #wrapper #container #main .center .quick .fa-angle-right',
    function(e) {
      var $this = $(this)
        var leftPos = $(this).parents('html body #wrapper #container #main .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main .quick')
          .find('.feed').animate({
            scrollLeft: leftPos + $this.parents('.quick').width()
          }, 'fast')
        if ($(this).parents('html body #wrapper #container #main .quick')
              .find('.feed')
          .scrollLeft() >= 0) $(this).parents('html body #wrapper #container #main .quick')
                                .find('.left').show()
        if ($(this).parents('html body #wrapper #container #main .quick .feed')
              .scrollLeft() >= 3000)
           for (i = 0; i < 10; i++)
             $(this).parents('html body #wrapper #container #main .quick .feed')
               .find('.asset:first').empty()
           feed(10)
  })
  .on('touch click',
    'html body #wrapper #container #main .center .quick .left, ' +
    'html body #wrapper #container #main .center .quick .fa-angle-left',
    function(e) {
      var $this = $(this)
        var leftPos = $(this).parents('html body #wrapper #container #main .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main .quick')
          .find('.feed').animate({
            scrollLeft: leftPos - $this.parents('.quick').width()
          }, 'slow')
        if ($(this).parents('html body #wrapper #container #main .quick')
              .find('.feed')
          .scrollLeft() <= $this.parents('.quick').width()) {
            $(this).parents('html body #wrapper #container #main .quick')
              .find('.left').hide()
            $(this).parents('html body #wrapper #container #main .quick')
              .find('.right, .fa-angle-right').show()
        }
        else $(this).parents('html body #wrapper #container #main .quick')
               .find('.left').show()
  })
  .on('touch click', 'html body #wrapper #container #guide, ' +
    'html body #wrapper #container #guide .checkmark', function (e) {
      $('html body #wrapper #container #main').removeClass('guide')
      $('#guide, #container .checkmark').fadeOut(250)
      $('html body #wrapper #container #main #top').show()
  })
  .on('touch click', 'html body #wrapper #container #main .center .channel .item',
    function(e) {
      $(this).attr('ext').blank()
      e.stopPropagation()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .channel .item .classic .image .img', function(e) {
      if (tap == 0) {
          $this = $(this)
          // set first click
          tap = new Date().getTime();
          setTimeout(function () {
            if (((new Date().getTime()) - tap) > 300 && ((new Date().getTime()) - tap) < 350)
              if (category == 'Social' && $this.hasClass('default')) {
                $this.attr('src').blank()
              } else if (!$this.hasClass('default') || category != 'Social') {
                  $this.parents('html body #wrapper #container #main .center .channel .item')
                    .attr('ext').blank()
              }
            tap = 0
          }, 325)
      } else {
          // compare first click to this click and see if they occurred within double click threshold
          if (((new Date().getTime()) - tap) < 300) {
              // double click occurred
              $(this)
                .parents('html body #wrapper #container #main .center .channel .item')
                .find('.fa-heart, .fa-heart-o')
                .toggleClass('fa-heart-o fab fa-heart')
              e.stopPropagation()
              visual()
              tap = 0
          }
      }
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .tag .fa-heart, ' +
    'html body #wrapper #container #guide .sticky .tag .fa-heart-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-heart-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-heart',
    function(e) {
        $(this).toggleClass('fa-heart-o fa-heart')
        e.stopPropagation()
        visual()
  })
  .on('touch click',
  'html body #wrapper #container #guide .sticky .tag .fa-bookmark, ' +
    'html body #wrapper #container #guide .sticky .tag .fa-bookmark-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-bookmark, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-bookmark-o',
    function(e) {
        $(this).parents('html body #wrapper #container #guide .sticky, ' +
          'html body #wrapper #container #main .center .item .classic').find('.source').select()
        document.execCommand('copy')
        if (!$(this).hasClass('fa-bookmark'))
          $(this).toggleClass('fa-bookmark-o fa-bookmark')
        notify('Source Copied to Clipboard')
        e.stopPropagation()
        visual()
      })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .wrap .fa-sticky-note, ' +
    'html body #wrapper #container #guide .sticky .wrap .fa-sticky-note-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-sticky-note, ' +
    'html body #wrapper #container #main .center .channel .item .classic .wrap .tag .fa-sticky-note-o',
    function(e) {
      if (location.href.match('\\+1'))
          $(this).parents('html body #wrapper #container #guide .sticky .wrap, ' +
            'html body #wrapper #container #main .center .item .classic').find('.share')
          .val($(this).parents('html body #wrapper #container #guide .sticky .wrap, ' +
            'html body #wrapper #container #main .center .item .classic').find('.share').val() + '+1')
      else if (!location.href.match('\\+1'))
        $(this).parents('html body #wrapper #container #guide .sticky .wrap, ' +
          'html body #wrapper #container #main .center .item .classic').find('.share').val(
          $(this).parents('html body #wrapper #container #main .center .channel .item, ' +
            'html body #wrapper #container #main .center .item .classic').find('.share').val().replace(/\+1/g, '')
        )
      $(this).parents('html body #wrapper #container #guide .sticky .wrap, ' +
        'html body #wrapper #container #main .center .item .classic').find('.share').select()
      document.execCommand('copy')
      if (!$(this).hasClass('fa-sticky-note'))
        $(this).toggleClass('fa-sticky-note-o fa-sticky-note')
      notify('Post Copied to Clipboard')
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .channel .item .pub .more', function(e) {
      $(this).parent().html($(this).parent().attr('text'))
      $(this).parent().animate({
          width: '85%',
        }, 'slow', function() {
          $(this).parent().height('auto')
        })
      e.stopPropagation()
      $(this).hide()
  })
  .on('submit',
    'html body #wrapper #container #main .center .channel .item .classic .addComment',
    function(e) {
      if ($(this).children('.comment').val() != '')
        item = $(this).parents('html body #wrapper #container #main .center .channel .item')
                 .attr('item')
      if ($('.' + item + ' .add').length >= 3)
        $('.' + item + ' .add:last').remove()
        $('.' + item + ' .pub:last').after("<div class='add'><b>" +
          $('.' + item + ' .addComment .comment').val() + "</div>")
      $(this).parents('html body #wrapper #container #main .center .channel .item')
        .find('.fa-comment-o').removeClass('fa-comment-o')
        .addClass('fas fa-comments')
      $('.' + item + ' .addComment .comment').val('')
      e.preventDefault()
      visual()
  })
  .on('touch click', 'html body #wrapper #container #main .center .channel .item .post',
    function(e) {
      $(this).siblings('.comment').focus().submit()
      e.stopPropagation()
  })
  .on('touch click', 'html body #wrapper #container #main .center #bottom .bottom',
    function(e) {
      $.loading()
      if (location.href.match('\\?q=')) {
        var uri = location.search.split('?q=')[1].match(/[^&]+/g)
        if (location.href.match('\\+1'))
          var query = uri[0].replace(/\+1/g, '').space()
        else var query = uri[0].space()
        response(false,
                 false,
                 query,
                 true)
      } else populate(category)
    })
  .on('touch click', 'html body #wrapper #container #main .center #bottom .back, ' +
      'html body #wrapper #container #main .center #bottom .next, ' +
      'html body #wrapper #container #main .content .status .asset, ' +
      'html body #wrapper #container #main .content .suggestions .combine div', function(e) {
        $.loading()
        xml(null, null, $(this).attr('aria-item'))
  })
  .on('touch click', 'html body #wrapper #container #main .content .suggestions .combine a', function(e) {
        $.loading()
        populate($(this).attr('aria-item'))
 })
  .on('touch click',
    'html body #wrapper #container #main #visit #page #front .focus .button .buttonSearch',
    function(e) {
      if ($('html body #wrapper #container #main #visit #page #front input[type=text]').val().length > 0 &&
          $('html body #wrapper #container #main #visit #page #front input[type=text]').val() != '')
        $('html body #wrapper #container #main #visit #page #front').submit()
      e.preventDefault()
  })
  .on('touch click',
    'html body #wrapper #container #top #arm #search #input .icon, ' +
    'html body #wrapper #container #top #arm #search #input .icon .fa-search',
    function(e) {
      $(this).addClass('slide')
      $('html body #wrapper #container #top #arm #search #input input[type=text]').val('')
      .css({
        'caret-color': '#e4e4e4',
        'padding-left': '30px',
        'text-align': 'left',
      }).focus()
  })
  .on('keyup',
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $('html body #wrapper #container #main #visit #page #front #first').show()
      $('html body #wrapper #container #main #visit #page #front #first .listing').css('z-index', '3')
      var keyup = $(this).val()
      if (e.type == 'keyup' && e.keyCode == 13)
       return false
      else if (e.type == 'keyup' && $(this).val()
       .length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
       base($(this).val())
      else if ($(this).val().length >= 2 && e.keyCode == 8)
       base($(this).val())
      else if ($(this).val().length <= 2 && e.keyCode == 8) {
       $('html body #wrapper #container #main #visit #page #front #first').hide()
      }
      if (e.keyCode == 40) {
        if (!$('html body #wrapper #container #main #visit #page #front #first .listing .hover').length)
          $('html body #wrapper #container #main #visit #page #front #first .listing .index:first')
            .addClass('hover')
            .removeClass('index')
        else {
          $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
            .next().focus()
            .removeClass('index').addClass('hover')
          $(this).val(keyup)
          $(this).attr('tabIndex', -1).focus()
          $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
            .prev().removeClass('hover').addClass('index')
        }
      } else if (e.keyCode == 34) {
          if (!$('html body #wrapper #container #main #visit #page #front #first .listing .hover').length)
            $('html body #wrapper #container #main #visit #page #front #first .listing .index:first')
              .addClass('hover')
              .removeClass('index')
          else {
            $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
              .next().next().next().next().next().next().focus()
              .removeClass('index').addClass('hover')
            $(this).val(keyup)
            $(this).attr('tabIndex', -1).focus()
            $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
              .prev().prev().prev().prev().prev().prev().removeClass('hover').addClass('index')
          }
      } else if (e.keyCode == 33) {
          $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
            .prev().prev().prev().prev().prev().prev().focus()
            .removeClass('index').addClass('hover')
          $(this).val(keyup)
          $(this).focus()
          $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
            .next().next().next().next().next().next().removeClass('hover').addClass('index')
      } else if (e.keyCode == 38) {
        $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
          .prev().focus()
          .removeClass('index').addClass('hover')
        $(this).val(keyup)
        $(this).focus()
        $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
          .next().removeClass('hover').addClass('index')
      } else if (e.keyCode == 27) {
        $('html body #wrapper #container #main #visit #page #front #first').hide()
      }
    visual()
  })
  .on('touch click',
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $('html body #wrapper #container #main #visit #page #front #first .listing').empty()
      $.each(translations, function(i) {
        $('html body #wrapper #container #main #visit #page #front #first .listing').append(
          "<div class='index' tabIndex='-1' aria-item='" + translations[i].toLowerCase() + "'>" +
          "<div class='background'></div>" +
          "  <div class='detail' response='" + translations[i].toLowerCase() + "'>" +
          "    <div class='radial'></div>" +
          "    <img src='images/" + translations[i] + '.webp' + "' class='translation'>" +
          "    <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
          "      <br>&emsp;" + translations[i].grep() + " feeds" +
          "    </div>" +
          "  </div>" +
          "</div>"
        )
      })
      $(this).val('')
        $(this).css({
              'caret-color': '#e4e4e4',
              'padding-left': '40px',
              'text-align': 'left'
        })
        $('html body #wrapper #container #main #visit #page #front .icon').addClass('search')
      visual()
  })
  .on('focusin',
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $(this).val('')
        $(this).css({
              'caret-color': '#e4e4e4',
              'padding-left': '40px',
              'text-align': 'left'
        })
        $('html body #wrapper #container #main #visit #page #front .icon').addClass('search')
  })
  .on('keyup', 'html body #wrapper #container #top #arm #search #input input[type=text]',
    function(e) {
      if ($(this).val() != '') var keyup = $(this).val()
      if (e.keyCode == 13) {
        $('html body #wrapper #container #main #top #arm #search #match').hide()
        return false
      } else if ($(this).val().length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
          list($(this).val())
      else if ($(this).length >= 2 && e.keyCode == 8)
          list($(this).val())
      else if ($(this).val().length <= 2 && e.keyCode == 8) {
        $('html body #wrapper #container #main #top #arm #search #match').hide()
      }
      if (e.keyCode == 40) {
        if (!$('html body #wrapper #container #main #top #arm #search #match .listing .hover').length)
          $('html body #wrapper #container #main #top #arm #search .listing .index:first')
            .addClass('hover')
            .removeClass('index')
        else {
          $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
            .next().focus()
            .addClass('hover').removeClass('index')
          $(this).val(keyup)
          $(this).attr('tabIndex', -1)
            .focus()
          $('html body #wrapper #container #arm #search #match .listing .hover')
            .prev().addClass('index').removeClass('hover')
        }
      } else if (e.keyCode == 34) {
          if (!$('html body #wrapper #container #main #top #arm #search #match .listing .hover').length)
            $('html body #wrapper #container #main #top #arm #search .listing .index:first')
              .addClass('hover')
              .removeClass('index')
          else {
            $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
              .next().next().next().next().next().next().focus()
              .addClass('hover').removeClass('index')
            $(this).val(keyup)
            $(this).attr('tabIndex', -1)
              .focus()
            $('html body #wrapper #container #arm #search #match .listing .hover')
              .prev().prev().prev().prev().prev().prev().addClass('index').removeClass('hover')
          }
      } else if (e.keyCode == 38) {
          $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
            .prev().focus()
            .addClass('hover').removeClass('index')
          $(this).val(keyup)
          $(this).focus()
          $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
            .next()
            .addClass('index').removeClass('hover')
      } else if (e.keyCode == 33) {
        $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
          .prev().prev().prev().prev().prev().prev().focus()
          .addClass('hover').removeClass('index')
        $(this).val(keyup)
        $(this).focus()
        $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
          .next().next().next().next().next().next()
          .addClass('index').removeClass('hover')
      } else if (e.keyCode == 27) {
          $('html body #wrapper #container #main #top #arm #search #match').hide()

      }
      visual()
  })
  .on('touch click',
    'html body #wrapper #container #top #arm #search #input input[type=text]',
    function(e) {
      $('html body #wrapper #container #arm #search #match').show()
      $('html body #wrapper #container #arm #search #match .listing').empty()
      $.each(translations, function(i) {
        $('html body #wrapper #container #arm #search #match .listing')
          .append(
            "<div class='index' tabIndex='-1' aria-item='" + translations[i].toLowerCase() + "'>" +
            "<div class='detail' response='" + translations[i].toLowerCase() + "'>" +
            "  <img src='images/" + translations[i] + '.webp' + "' class='translation'>" +
            "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
            "    <br>&emsp;" + translations[i].grep() + " feeds" +
            "  </div>" +
            "  </div>" +
            "</div>")
      })
      $(this).val('')
      $this = $(this)
          $this.css({
            'caret-color': '#e4e4e4',
            'padding-left': '30px',
            'text-align': 'left',
          })
        $('html body #wrapper #container #arm #search #input .icon').addClass('slide')
      visual()
  })
  .on('submit', 'html body #wrapper #container #top #arm #search', function(e) {
    $('html body #wrapper #container #main .air, #main .result, #main .center, #main .content').remove()
    $('html body #wrapper #container #arm #search #match').hide()
    if ($('html body #wrapper #container #arm #search .listing .hover').length) {
      if ($('html body #wrapper #container #arm #search .listing .hover').is('[aria-item]') &&
            $.inArray($('html body #wrapper #container #arm #search .listing .hover').attr('aria-item').capitalize(), translations) > -1){
        $.loading()
        $('html body #wrapper #container #main #visit').hide()
        $('html body #wrapper #container #main #top').show()
        category = $('html body #wrapper #container #arm #search .listing .hover').attr('aria-item').capitalize()
        populate($('html body #wrapper #container #arm #search .listing .hover').attr('aria-item').capitalize())
      } else if (reader == true) {
              readDupe = []
              $('html body #wrapper #container #main .channel').empty()
              category = $(this).attr('response')
              first = false
              xml(null, null, $.random())
              notify('Switched to now reading ' + category)
      } else {
        $.loading()
        xml(null, null, $('html body #wrapper #container #arm #search .listing .hover').attr('aria-item'))
      }
    } else {
      if ($('html body #wrapper #container #arm #search input[type=text]').val().length) {
        var uri = '?q=' + $('html body #wrapper #container #arm #search input[type=text]').val()
          .toLowerCase()
          .replace(/\s/g, '+')
        uri.define().exit()
      }
    }
    $('html body #wrapper #container #arm #search input[type=text]').val('').blur()
    e.preventDefault()
    visual()
  })
  .on('submit', 'html body #wrapper #container #main #visit #page #front', function(e) {
      if ($('html body #wrapper #container #main #visit #page #front .listing .hover').length) {
        if ($('html body #wrapper #container #main #visit #page #front .listing .hover').is('[aria-item]') &&
              $.inArray($('html body #wrapper #container #main #visit #page #front .listing .hover').attr('aria-item').capitalize(), translations) > -1){
          $.loading()
          $('html body #wrapper #container #main #visit').hide()
          $('html body #wrapper #container #main #top').show()
          category = $('html body #wrapper #container #main #visit #page #front .listing .hover').attr('aria-item').capitalize()
          populate($('html body #wrapper #container #main #visit #page #front .listing .hover').attr('aria-item').capitalize())
        } else if (reader == true) {
                readDupe = []
                $('html body #wrapper #container #main .channel').empty()
                category = $(this).attr('response')
                first = false
                xml(null, null, $.random())
                notify('Switched to now reading ' + category)
        } else {
          $.loading()
          $('html body #wrapper #container #main #visit').hide()
          $('html body #wrapper #container #main #top').show()
          xml(null, null, $('html body #wrapper #container #main #visit #page #front .listing .hover').attr('aria-item'))
        }
      } else {
        if ($('html body #wrapper #container #main #visit #page #front .focus input[type=text]').val().length) {
          var uri = '?q=' + $('html body #wrapper #container #main #visit #page #front .focus input[type=text]').val()
            .toLowerCase()
            .replace(/\s/g, '+')
          uri.define().exit()
        }
      }
      $('html body #wrapper #container #arm #search input[type=text]').val('').blur()
      e.preventDefault()
      visual()
  })
  .on('touch click',
  'html body #wrapper #container #main #visit #page #front #first .index, ' +
  'html body #wrapper #container #main #visit #page #front #first .hover, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .hover',
    function(e) {
      if (reader == true) {
        readDupe = []
        $('html body #wrapper #container #main .channel').empty()
        category = $(this).attr('response')
        first = false
        xml(null, null, $.random())
        notify('Switched to now reading ' + category)
      } else {
        if ($(this).is('[aria-item]') && $.inArray($(this).attr('aria-item').capitalize(), translations) > -1){
          $.loading()
          $('html body #wrapper #container #main #visit').hide()
          $('html body #wrapper #container #main #top').show()
          category = $(this).attr('aria-item').capitalize()
          populate($(this).attr('aria-item').capitalize())
        } else {
          $.loading()
          category = menu[$(this).attr('aria-item')].cat
          xml(null, null, $(this).attr('aria-item'))
        }
      }
  })
