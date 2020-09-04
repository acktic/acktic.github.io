$(document)
  .ready(function() {
    $('#input').css('display', 'block')
    $('input[type=text]').attr('tabindex', -1).focus()
  })
  .on('touch click', 'a', function(e) {
    if ($(this).attr('ext')) $(this).attr('ext').blank()
    e.stopPropagation()
  })
  .on('touch click',
    'html body #wrapper #container, ' +
    'html body #wrapper #container #main, ' +
    'html body #wrapper #container #main #visit, ' +
    'html body #wrapper #container #main #top #arm, ' +
    'html body #wrapper #container #main #top #option',
    function(e) {
      if (!$('html body #wrapper #container #main #top #arm #search input[type=text]').is(':focus')) {
        $('html body #wrapper #container #main #top #arm #search #input .icon').removeClass('slide')
        $('html body #wrapper #container #main #top #arm #search #match').hide()
      }
      if (!$('html body #wrapper #container #main #visit #page #front .focus input[type=text]').is(':focus')) {
        $('html body #wrapper #container #main #visit #page #front #first').css('visibility','hidden')
        if ($('html body #wrapper #container #main #visit #page #front .focus input[type=text]').val().length == 0 ||
          $('html body #wrapper #container #main #visit #page #front .focus input[type=text]').val() == 'Search')
        $('html body #wrapper #container #main #visit #page #front .focus .icon').removeClass('search')
      }
   })
  .on('touch click', 'html body #wrapper #container #main #visit #page #front #label .link',
    function(e) {
      nextAngle += 180
      if (nextAngle >= 360) nextAngle = 0
      if ($('html body #wrapper #container #main #visit #page #front .quick').hasClass('invisible')) {
        $('html body #wrapper #container #main #visit #page #front .quick')
          .addClass('visible').removeClass('invisible')
        $('html body #wrapper #container #main #visit #page #front').addClass('toggleHidden').removeClass('toggle')
        $('html body #wrapper #container #main #visit #page #front .link').animateRotate(nextAngle, 500, 'swing')
        $('html body #wrapper #container #main #visit #page #front .show')
          .removeClass('visible').addClass('invisible')
      } else {
        $('html body #wrapper #container #main #visit #page #front .quick')
          .addClass('invisible').removeClass('visible')
        $('html body #wrapper #container #main #visit #page #front').addClass('toggle').removeClass('toggleHidden')
        $('html body #wrapper #container #main #visit #page #front .link').animateRotate(nextAngle, 500, 'swing')
        $('html body #wrapper #container #main #visit #page #front .show')
          .removeClass('invisible').addClass('visible')
      }
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #search #home',
    function(e) {
      var uri = window.location.origin
      if (contrast == true && !location.href.match('\\+1')) uri = uri + '?+1'
      else if (contrast == true) uri = uri + '?+1'
      uri.exit()
      e.preventDefault()
  })
  .on('touch click', 'html body #wrapper #container #toggle', function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
      var uri = window.location.href + '?+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    }
    setTimeout(function() {
      $('html body #wrapper #container #main #visit #page .focus input[type=text]').attr('tabindex', -1).focus()
    }, 1000)
    uri.state()
    visual()
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-home',
  function(e) {
    var uri = '?q=' + category.toLowerCase()
    uri.define().exit()
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-sun',
  function(e) {
    if (!location.href.match('\\+1') && !location.href.match('\\?\\+1')) {
      var uri = window.location.href + '+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?q=') && !location.href.match('\\+1')) {
      var uri = window.location.href + '+1'
      contrast = contrast != true
      op = op != true
    } else if (location.href.match('\\?\\+1') || location.href.match('\\+1')) {
      var uri = window.location.href.replace(/\?\+1|\+1/g, '')
      contrast = false
      op = op != true
    }
    uri.state()
    visual()
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-code',
  function(e) {
    var re = menu.indexOf(menu[Math.floor(Math.random() * menu.length)])
    var uri = '?q=' + menu[re].cat.toLowerCase() + '&' + menu[re].id.toLowerCase()
      .replace(/\s|\.|\//g, '-')
    uri.define().state()
    return false
  })
  .on('touch click', 'html body #wrapper #container #main #top #arm #option .fa-terminal',
  function(e) {
    var array = []
    for (i = 1; i <= menu.length - 1; i++) {
      if (menu[i].cat == category) array.push(menu.indexOf(menu[i]))
    }
    var n = array[Math.floor(Math.random() * array.length)]
    var uri = '?q=&' + menu[n].id.toLowerCase()
      .replace(/(\s|\.|\/)/g, '-')
    uri.define().exit()
    return false
  })
  .on('touch click', 'html body #wrapper #container #main .translation .select',
  function(e) {
    var uri = '?q=&' + $(this).attr('response').toLowerCase()
    uri.define().exit()
  })
  .on('touch click mouseenter mouseleave',
    'html body #wrapper #container #main .group .air .populate, ' +
    'html body #wrapper #container #main .group .result .filter, ' +
    'html body #wrapper #container #main .group .result .populate',
    function(e) {
      if (op == 0 && e.type == 'mouseenter')
        $(this).toggleClass('overlay')
        $(this)
          .on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function(e) {
              $(this).removeClass('overlay')
              void this.clientWidth
              $(this).addClass('overlay')
          })
      if (e.type == 'mouseleave') $(this).removeClass('overlay')
      if (e.type == 'touch' || e.type == 'click') {
        var uri = location.search.split('?q=')[1].replace(/\+|\?\+1|\+1/g, ' ')
          .match(/[^&]+/g)[0]
        if ($(this).attr('response').match(uri)) {
          uri = '?q=' + uri.replace(/\s/g, '+') + '&' + $(this).attr('response')
        } else uri = '?q=&' + $(this).attr('response')
        uri.define().exit()
      }
    })
  .on('touch click',
    'html body #wrapper #container .sticky .header .fa-ellipsis-h, ' +
    'html body #wrapper #container #main .center .channel .item .header .fa-ellipsis-h',
    function(e) {
        $(this)
        .parents('html body #wrapper #container #guide .sticky .item, ' +
          'html body #wrapper #container #main .center .item .classic .wrap')
            .find('.url').select()
        document.execCommand('copy')
        $(this).removeClass('fa-ellipsis-h').addClass('fa-ellipsis-v')
        setTimeout(function() {
          $(this).removeClass('fa-ellipsis-v').addClass('fa-ellipsis-h')
        }, 250)
        notify('URL Copied to Clipboard')
        e.stopPropagation()
  })
  .on('mousedown', 'html body #wrapper #container #main .center .quick .feed .asset, ' +
  'html body #wrapper #container #main #visit #page #front .quick .feed .asset',
  function(e) {
      if (e.which == 1){
        dragStartX = 0
        enableDrag = true
        dragStartX = e.pageX
        feed(40)
        feed(40)
        tap = new Date().getTime()
        mouseAsset = $(this).attr('response')
        marginLeftStart = parseInt($(this)
          .parents('html body #wrapper #container #main .center .quick .feed')
            .scrollLeft())
    if ($(this).parents('html body #wrapper #container #main .center .quick .feed')
          .scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $(this).parents('html body #wrapper #container #main .center .quick .feed')
            .find('.asset:first').empty()
      }
      $(this).unbind("mousemove")
      e.preventDefault();
  })
  .on('mousemove', 'html body #wrapper #container #main .center .quick .feed .asset, ' +
  'html body #wrapper #container #main #visit #page #front .quick .feed .asset',
  function(e) {
      if ($(this).parents('html body #wrapper #container #main .center .quick .feed')
            .scrollLeft() > 0)
        $(this).parents('html body #wrapper #container #main .center .quick')
          .find('.left').show()
      else if ($(this).parents('html body #wrapper #container #main .center .quick .feed')
                 .scrollLeft() == 0)
        $(this).parents('html body #wrapper #container #main .center .quick')
          .find('.left').hide()
          if (enableDrag) {
              var delta = e.pageX - dragStartX
              $(this).parents('html body #wrapper #container #main .center .quick .feed')
                .scrollLeft(marginLeftStart - delta)
          }
          $(this).unbind("mouseup")
          e.preventDefault()
  })
  .on('mouseup', document, function(e) {
        if (enableDrag)
            enableDrag = false
        else mouseAsset = false
        if (((new Date().getTime()) - tap) < 150) {
              enableDrag = false
              if (mouseAsset){
                  var uri = '?q=&' + mouseAsset
                  uri.define().exit()
              }
          }
          e.preventDefault()
  })
  .on('touchmove', 'html body #wrapper #container #visit #main #page #front .quick .feed',
  function(e) {
      quick(40)
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $('html body #wrapper #container #main #visit #page #front .quick .feed .asset:first').remove()
  })
  .on('touchmove', 'html body #wrapper #container #main .center .quick .feed', function(e) {
      feed(40)
      if ($(this).scrollLeft() >= 3300)
        for (i = 0; i < 40; i++)
          $('html body #wrapper #container #main .center .quick .feed .asset:first').remove()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .right, ' +
    'html body #wrapper #container #main #visit #page #front .quick .right, ' +
    'html body #wrapper #container #main .center .quick .fa-angle-double-right, ' +
    'html body #wrapper #container #main #visit #page #front .quick .fa-angle-double-right',
    function(e) {
        var leftPos = $(this).parents('html body #wrapper #container #main #visit #page #front .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main #visit #page #front .quick')
          .find('.feed').animate({
            scrollLeft: leftPos + 639
          }, 'fast')
          if (leftPos >= $(this).parents('html body #wrapper #container #main #visit #page #front .quick')
                           .find('.feed')[0]
                .scrollWidth - $(this).parents('html body #wrapper #container #main #visit #page #front .quick')
                               .find('.feed').width() - 639)
              $(this).hide()
        if ($(this).parents('html body #wrapper #container #main #visit #page #front .quick')
              .find('.feed')
          .scrollLeft() >= 0) $(this).parents('html body #wrapper #container #main #visit #page #front .quick')
                                .find('.left').show()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .quick .left, ' +
    'html body #wrapper #container #main #visit #page #front .quick .left, ' +
    'html body #wrapper #container #main .center .quick .fa-angle-double-left, ' +
    'html body #wrapper #container #main #visit #page #front .quick .fa-angle-double-left',
    function(e) {
        var leftPos = $(this).parents('html body #wrapper #container #main .center .quick')
                        .find('.feed').scrollLeft()
        $(this).parents('html body #wrapper #container #main .center .quick')
          .find('.feed').animate({
            scrollLeft: leftPos - 639
          }, 'slow')
        if ($(this).parents('html body #wrapper #container #main .center .quick')
              .find('.feed')
          .scrollLeft() <= 639) {
            $(this).parents('html body #wrapper #container #main .center .quick')
              .find('.left').hide()
            $(this).parents('html body #wrapper #container #main .center .quick')
              .find('.right, .fa-angle-double-right').show()
        }
        else $(this).parents('html body #wrapper #container #main .center .quick')
               .find('.left').show()
  })
  .on('touch click', 'html body #wrapper #container #guide, ' +
    'html body #wrapper #container #guide .checkmark', function (e) {
      $('html body #wrapper #container #main').removeClass('guide')
      $('#guide, #container .checkmark').fadeOut(250)
  })
  .on('touch click', 'html body #wrapper #container #guide .sticky .item .image .img',
    function (e) {
      $(this).attr('src').blank()
      e.stopPropagation()
    })
  .on('touch click', 'html body #wrapper #container #main .center .channel .item',
    function(e) {
      $(this).attr('ext').blank()
      e.stopPropagation()
  })
  .on('touch click',
    'html body #wrapper #container #main .center .channel .item .image .img', function(e) {
      if (tap == 0) {
          $this = $(this)
          // set first click
          tap = new Date().getTime();
          img = $(this).attr('id')
          setTimeout(function () {
            if (((new Date().getTime()) - tap) > 300 && ((new Date().getTime()) - tap) < 350)
              if (category == 'Social' &&
                !$this.hasClass('default')) $this.attr('src').blank()
              else if ($this.hasClass('default') ||
                category != 'Social')
                  $this.parents('html body #wrapper #container #main .center .channel .item')
                    .attr('ext').blank()
            tap = 0
          }, 325)
      } else {
          // compare first click to this click and see if they occurred within double click threshold
          if (((new Date().getTime()) - tap) < 300) {
              // double click occurred
              $(this)
                .parents('html body #wrapper #container #main .center .channel .item, ' +
                  'html body #wrapper #container #guide .sticky')
                .find('.fa-gratipay, .fa-heart-o')
                .toggleClass('fa-heart-o fab fa-gratipay')
              e.stopPropagation()
              visual()
              tap = 0;
          }
      }
      e.stopPropagation()
      visual()
  })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .tag .fa-gratipay',
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-heart-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-gratipay',
    function(e) {
        $(this).toggleClass('fa-heart-o fab fa-gratipay')
        e.stopPropagation()
        visual()
  })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .tag .fa-bookmark-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-bookmark, ' +
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-bookmark-o',
    function(e) {
        $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
          'html body #wrapper #container #main .center .item .classic .wrap').find('.source').select()
        document.execCommand('copy')
        if (!$(this).hasClass('fa-bookmark'))
          $(this).toggleClass('fa-bookmark-o fa-bookmark')
          notify('Source Copied to Clipboard')
        e.stopPropagation()
        visual()
      })
  .on('touch click',
    'html body #wrapper #container #guide .sticky .tag .fa-sticky-note-o, ' +
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-sticky-note, ' +
    'html body #wrapper #container #main .center .channel .item .classic .image .tag .fa-sticky-note-o',
    function(e) {
      if (contrast == true)
        if (!$(this).parents('html body #wrapper #container #main .center .channel .item , ' +
          'html body #wrapper #container #main .center .item .classic .wrap').find('.share').val().match(/\+1/g))
          $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
            'html body #wrapper #container #main .center .item .classic .wrap').find('.share')
          .val($(this).parents('html body #wrapper #container #main .center .channel .item , ' +
            'html body #wrapper #container #main .center .item .classic .wrap').find('.share').val() + '+1')
      if (contrast == false && $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
        'html body #wrapper #container #main .center .item .classic .wrap').find('.share').val()
        .match(/\+1/g))
        $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
          'html body #wrapper #container #main .center .item .classic .wrap').find('.share').val(
          $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
            'html body #wrapper #container #main .center .item .classic .wrap').find('.share').val().replace(/\+1/g, '')
        )
      $(this).parents('html body #wrapper #container #main .center .channel .item , ' +
        'html body #wrapper #container #main .center .item .classic .wrap').find('.share').select()
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
  .on('touch click',
    'html body #wrapper #container #main .center #bottom .back, ' +
    'html body #wrapper #container #main .center #bottom .next',
    function(e) {
      var uri = menu[$(this).attr('index').trim()].id.toLowerCase().replace(/\s|\.|\//g, '-')
      uri = '?q=&' + uri
      uri.define().exit()
  })
  .on('touch click', 'html body #wrapper #container #main .center #bottom .bottom',
    function(e) {
      if (location.href.match('\\?q=')) {
        var uri = location.search.split('?q=')[1].match(/[^&]+/g)
        if (location.href.match('\\+1'))
          var res = uri[0].replace(/\+1/g, '')
        else var res = uri[0]
        response(false, false, uri, true)
        uri = '?q=' + res.replace(/\-/g, '+')
        uri.define().exit()
      }
      else {
        if (location.href.split('?')[1].match(/^[a-z0-9\+1]+$/i))
            var id = location.href.split('?')[1].slice(0, 2)
            var i = menu.findIndex((item) => item.hash === id)
            response(false, false,
              menu[i].id.toLowerCase().replace(/\s|\/|\./g, ' '),
              true
            )
      }
    })
  .on('touch click',
    'html body #wrapper #container #main .content .suggestions .combine div', function(e) {
       var uri = '?q=&' + $(this).attr('response')
       uri.define().exit()
  })
  .on('touch click',
    'html body #wrapper #container #main .content .status .asset .radial', function(e) {
       var uri = '?q=&' + $(this).parents('html body #wrapper #container #main .content .status .asset')
                            .attr('response')
       uri.define().exit()
  })
  .on('mouseenter',
    'html body #wrapper #container #main #visit #page #front .focus .button, ' +
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      if (op == 0)
        $('html body #wrapper #container #main #visit #page #front .focus')
          .removeClass('pageInputOut').addClass('pageInput')
  })
  .on('mouseleave',
    'html body #wrapper #container #main #visit #page #front .focus .button, ' +
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      if (op == 0)
        $('html body #wrapper #container #main #visit #page #front .focus')
          .removeClass('pageInput').addClass('pageInputOut')
  })
  .on('touch click',
    'html body #wrapper #container #main #visit #page #front .focus .button .buttonSearch',
    function(e) {
      if ($('html body #wrapper #container #main #visit #page #front input[type=text]').val().length > 0 &&
          $('html body #wrapper #container #main #visit #page #front input[type=text]').val() != 'Search')
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
      $('html body #wrapper #container #main #visit #page #front #first').css('visibility','visible')
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
       $('html body #wrapper #container #main #visit #page #front #first').css('visibility','hidden')
       $('html body #wrapper #container #main .center, ' +
         'html body #wrapper #container #main .content, ' +
         'html body #wrapper #container #main .group .air, ' +
         'html body #wrapper #container #main .suggestions, ' +
         'html body #wrapper #container #main .group .result').show()
      } else if (e.keyCode == 40 || e.keyCode == 34) {
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
      } else if (e.keyCode == 38 || e.keyCode == 33) {
        $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
          .prev().focus()
          .removeClass('index').addClass('hover')
        $(this).val(keyup)
        $(this).focus()
        $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
          .next().removeClass('hover').addClass('index')
      } else if (e.keyCode == 27) {
        $('html body #wrapper #container #main #visit #page #front #first .listing').css('z-index', '0')
        $('html body #wrapper #container #main #visit #page #front #first').hide()
        $(this)
          .css({
            'caret-color': 'transparent',
            'text-align': 'center',
            'padding': '0'
          })
           .val('Search')
           .siblings('.icon')
           .removeClass('slide')
      }
    visual()
  })
  .on('touch click',
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      $('html body #wrapper #container #main #visit #page #front #first .listing').css('z-index', '3')
      $('html body #wrapper #container #main #visit #page #front #first').css('visibility', 'visible')
      $('html body #wrapper #container #main #visit #page #front #first .listing').empty()
      $.each(translations, function(i) {
        $('html body #wrapper #container #main #visit #page #front #first .listing').append(
          "<div class='index' tabIndex='-1' response='" + translations[i].toLowerCase() + "'>" +
          "<div class='background'></div>" +
          "  <div class='detail' response='" + translations[i].toLowerCase() + "'>" +
          "    <div class='radial'></div>" +
          "    <img class='typeTranslation' src='images/" + translations[i] + '.png' + "'>" +
          "    <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
          "      <br>&emsp;" + translations[i].grep() + " feeds" +
          "    </div>" +
          "  </div>" +
          "</div>"
        )
      })
      $('html body #wrapper #container #main #visit #page #front #first .listing')
        .append()
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
  .on('focusout blur',
    'html body #wrapper #container #main #visit #page #front .focus input[type=text]',
    function(e) {
      if ($(this).val().length == 0)
      $(this).css({
          'caret-color': 'transparent',
          'padding-left': '40px',
          'text-align': 'center'
        })
        .val('Search')
  })
  .on('keyup', 'html body #wrapper #container #top #arm #search #input input[type=text]',
    function(e) {
      if ($(this).val() != 'Search') var keyup = $(this).val()
      if (e.keyCode == 13) {
        $('html body #wrapper #container #main #top #arm #search #match').hide()
        return false
      } else if ($(this).val().length >= 3 && e.keyCode >= 65 && e.keyCode <= 90)
          list($(this).val())
      else if ($(this).length >= 2 && e.keyCode == 8)
          list($(this).val())
      else if ($(this).val().length <= 2 && e.keyCode == 8) {
        $('html body #wrapper #container #main #top #arm #search #match').hide()
        $('html body #wrapper #container #main .center, ' +
          'html body #wrapper #container #main .content, ' +
          'html body #wrapper #container #main .group .air, ' +
          'html body #wrapper #container #main .suggestions, ' +
          'html body #wrapper #container #main .group .result').show()
      } else if (e.keyCode == 40 || e.keyCode == 34) {
        if (!$('html body #wrapper #container #main #top #arm #search #match .listing .hover').length)
          $('#search .listing .index:first')
            .addClass('hover')
            .removeClass('index')
        else {
          $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
            .next().focus()
            .attr('class', 'hover')
          $(this).val(keyup)
          $(this).attr('tabIndex', -1)
            .focus()
          $('html body #wrapper #container #arm #search #match .listing .hover')
            .prev().attr('class', 'index')
        }
      } else if (e.keyCode == 38 || e.keyCode == 33) {
        $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
          .prev().focus()
          .attr('class', 'hover')
        $(this).val(keyup)
        $(this).focus()
        $('html body #wrapper #container #main #top #arm #search #match .listing .hover')
          .next()
          .attr('class', 'index')
      } else if (e.keyCode == 27) {
        $('html body #wrapper #container #main #top #arm #search #match').hide()
        $(this)
          .css({
            'caret-color': 'transparent',
            'padding': '0',
            'text-align': 'center'
          })
          .val('Search')
          .siblings('.icon')
          .removeClass('slide')
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
            "<div class='index' tabIndex='-1' response='" + translations[i].toLowerCase() + "'>" +
            "<div class='background'></div>" +
            "<div class='detail' response='" + translations[i].toLowerCase() + "'>" +
            "  <div class='radial'></div>" +
            "  <img class='typeTranslation' src='images/" + translations[i] + '.png' + "'>" +
            "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
            "    <br>&emsp;" + translations[i].grep() + " feeds" +
            "  </div>" +
            "  </div>" +
            "</div>")
      })
      $('html body #wrapper #container #arm #search #match .listing')
        .append("<div class='background'></div>")
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
  .on('focusout blur',
    'html body #wrapper #container #top #arm #search #input input[type=text]',
    function(e) {
      $this = $(this)
        if ($('html body #wrapper #container #arm #search #input .icon').hasClass('slide'))
          $(this)
            .css({
              'caret-color': '#e4e4e4',
              'padding-left': '30px',
              'text-align': 'left'
            })
        else if (!$('html body #wrapper #container #arm #search #input .icon').hasClass('slide')) {
          setTimeout(function() {
            $this.css({
              'caret-color': '#e4e4e4',
              'padding-left': '30px',
              'text-align': 'left',
            })
          }, 500)
          $('html body #wrapper #container #arm #search #input .icon')
            .addClass('slide')
        }
        return false
  })
  .on('focusout blur',
    'html body #wrapper #container #top #arm #search #input input[type=text]',
    function(e) {
      $(this).css({
        'caret-color': 'transparent',
        'text-align': 'center',
        'padding': '0'
      }).val('Search')
  })
  .on('submit', 'html body #wrapper #container #top #arm #search', function(e) {
    $('html body #wrapper #container #main .air, #main .result, #main .center, #main .content, #main .translation').remove()
    $('html body #wrapper #container #arm #search #match').hide()
    if ($('html body #wrapper #container #arm #search .listing .hover').length) {
      if (translations.indexOf($('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response')) > -1) {
        category = $('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response')
        populate($('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response'))
        var uri = '?q=' + $('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response').toLowerCase()
        air(id)
        state('?q=' + $('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response').toLowerCase())
        document.title = $('html body #wrapper #container #arm #search #match .listing .hover')
          .attr('response')
        progress(true, 100)
      } else {
        var uri = '?q=' + $('html body #wrapper #container #arm #search #match .listing .hover')
        .attr('response')
        .toLowerCase()
        uri.define().exit()
      }
    } else {
      if ($('html body #wrapper #container #arm #search input[type=text]').val().length) {
        var uri = '?q=' + $('html body #wrapper #container #arm #search input[type=text]').val()
          .toLowerCase()
          .replace(/\s/g, '+')
        uri.define().exit()
      }
    }
    $('html body #wrapper #container #arm #search input[type=text]').val('Search').blur()
    e.preventDefault()
    visual()
  })
  .on('submit', 'html body #wrapper #container #main #visit #page #front', function(e) {
    $('html body #wrapper #container #main #visit #page #front .icon, #main #visit #page .button')
      .css('visibility','hidden')
    if ($('html body #wrapper #container #main #visit #page #front #first .listing .hover').length) {
        var uri = '?q=&' + $('html body #wrapper #container #main #visit #page #front #first .listing .hover')
          .attr('response')
        uri.define().exit()
    } else {
      var uri = '?q=' + $('html body #wrapper #container #main #visit #page #front input[type=text]').val()
        .toLowerCase()
        .replace(/\s/g, '+')
      uri.define().exit()
    }
    e.preventDefault()
  })
  .on('mouseenter',
    'html body #wrapper #container #main #visit #page #front #first .index, ' +
    'html body #wrapper #container #main #visit #page #front #first .hover, ' +
    'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
    'html body #wrapper #container #main #top #arm #search #match .listing .hover',
    function(e) {
      $('html body #wrapper #container #arm #search #match .listing .hover, ' +
        '#main #visit #page #front #first .listing .hover')
          .attr('class', 'index')
      if (op == 0) $(this).addClass('hover contrast.hover')
      else $(this).addClass('hover visual.hover')
  })
  .on('mouseleave',
  'html body #wrapper #container #main #visit #page #front #first .index, ' +
  'html body #wrapper #container #main #visit #page #front #first .hover, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .hover',
    function(e) {
      if (op == 1) $('html body #wrapper #container #arm #search #match .listing .hover, ' +
        '#main #visit #page #front #first .listing .hover')
          .attr('class', 'index contrast')
      else $('html body #wrapper #container #arm #search #match .listing .hover, ' +
        '#main #visit #page #front #first .listing .hover')
          .attr('class','index visual')
  })
  .on('touch click',
  'html body #wrapper #container #main #visit #page #front #first .index, ' +
  'html body #wrapper #container #main #visit #page #front #first .hover, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .index, ' +
  'html body #wrapper #container #main #top #arm #search #match .listing .hover',
    function(e) {
      $('html body #wrapper #container #main .result, #main .air, #main .translation, #main .center, #main .content').remove()
      category = $(this).attr('response')
      uri = '?q=' + $(this).attr('response')
      document.title = category.capitalize()
      uri.define().exit()
  })
