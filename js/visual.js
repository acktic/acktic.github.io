var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $(
      '#container, #arm, #main, #main #option, #visit, #bottom, ' +
      '.feed, .channel, .suggestions, .combine, .index, a, ' +
      '.result, .air, .wrap, #main #page, #main #page .id, .sticky'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.fas, .fa-bookmark, .fa-comments, .fa-sticky-note, .fa-sun' +
      '.fa-angle-double-left, .fa-angle-double-right'
    ).css('color', '#fff')
    $(
      '#top, #arm, #home a, #arm #option, .filter, .populate, .wrap, ' +
      '.header, .title, .category, .type, .item, .comment, .ago, ' +
      '.pub, .tag, .stats, .suggestions, .combine, .right, .left'
    ).css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('.fas, input[type=text], .item .pub').css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'border': 'none'
    })
    $('input[type=text]').css({
      'background-color': '#1a1a1a',
      'color': '#ddd'
    })
    $(
      '#home a, .description, .fa-times-circle, ' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#fff'
    })

    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.filter, .populate, .category, .title').css('border','1px solid #0e0e0e')
    $('#top, .description, .comment').css('border-bottom', '1px solid #333')
    $('#option .fa-circle-notch').toggleClass('fa-circle-notch fa-circle')
    $('.index, .hover').addClass('contrast').removeClass('visual')
    $('.listing').addClass('opposite').removeClass('invert')
    $('#placeholder img').attr('src', 'images/opposite.png')
    $('svg circle').css('stroke', 'url(#gradientOpposite)')
    $('.blur').css('background-color','rgba(0, 0, 0, .3)')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.first').css('cssText','fill: #ef4063 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('#placeholder').css('color','#fff')
    $('.more').css('color', '#333')
  } else if (op == 0) {
    $(
      '#top, #arm, #container, .wrap, ' +
      '.comment, .channel, #main .center .feed, .title, .header, .tag, ' +
      '.item, .item .pub, .type, .ago, a'
    ).css({
      'background-color': '#fff',
      'color': '#666',
      'border': 'none'
    })
    $('input[type=text], .category').css({
      'background-color': '#f7f7f7',
      'border': '1px solid #ddd',
      'color': '#aaa'
    })
    $('#arm, #arm #option, .index').css({
      'background-color': '#fff',
      'color': '#666'
    })
    $(
      '#front #option, #main, #visit, .air, .result, #bottom, .hover, .info a, ' +
      '.channel, .stats, .suggestions, .combine, #bottom, #main #page .id, ' +
      '#main #page .feed, #main #page, .right, .left, #main #page .feed a'
    ).css({
      'background-color': '#f7f7f7',
      'border': 'none',
      'color': '#666'
    })
    $(
      '#home a, .description,' +
      '.fa-home, .fa-code, .fa-globe, .fa-git, ' +
      '.fa-terminal, .fa-circle-notch, .fa-circle'
    ).css({
      'background-color': 'transparent',
      'color': '#000'
    })
    $('.filter .pub, .populate .pub').css({
      'background-color': "#efefef",
      'border': 'none'
    })
    $('#page input[type=text]').css({
      'background-color': '#fff',
      'border': 'none'
    })
    $(
      '.filter, .populate, .item, #page input[type=text], ' +
      '.right, .left, #page .id, .sticky'
    ).css('box-shadow', '1px 1px 1px #ddd')
    $('.filter, .populate, #main .center .feed, .title').css('border', '1px solid #ddd')
    if ($('#container').width() <= 425) $('#option').css('background-color','#f7f7f7')
    $('.fa-sun, .fa-angle-double-left, .fa-angle-double-right').css('color', '#666')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('#top, .description, .index').css('border-bottom', '1px solid #ccc')
    $('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
    $('#option .fa-circle').toggleClass('fa-circle-thin fa-circle')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.blur').css('background-color','rgba(255, 255, 255, .3)')
    $('.filter, .populate').css('background-color', '#efefef')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.first').css('cssText','fill: #1fa2ff !important')
    $('svg circle').css('stroke', 'url(#gradientInvert)')
    $('#container').css('background-color','#f7f7f7')
    $('#placeholder img').attr('src', 'favicon.ico')
    $('#placeholder').css('color','#000')
    $('.hover').addClass('visual.hover')
  }
  $('.fa-gratipay').css('color', 'lightcoral')
}
