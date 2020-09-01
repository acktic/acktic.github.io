var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('#container, #top, #arm, #visit, .page, .classic, .item, .feed, .asset, .asset a, ' +
      '.index, .filter, .populate, .result, .air, .blur, input[type=text], #main, .group, .background'
    ).css({
      'background-color': '#000',
      'box-shadow': 'none',
      'border': 'none',
      'color': '#fff'
    })
    $('#notification, #top, #arm, #home a, #arm #option, .page input[type=text], .right, .left, #guide'
    ).css({
      'background-color': '#0e0e0e',
      'box-shadow': 'none',
      'color': '#fff'
    })
    $(':root').css({
      '--loader-color-primary': '#f7426C',
      '--loader-color-secondary': '#e86d8a'
    })
    $('.link, .page .asset, .right, .left').addClass('oppositeOverBorderless').removeClass('invertOverBorderless')
    $('.header .radial, .suggestions .radial').removeClass('suggestInvert').addClass('suggestOpposite')
    $('.filter, .populate').removeClass('invertOverBorderless').css('border','.3px solid #0e0e0e')
    $('.detail .radial, .select .radial').removeClass('selectInvert').addClass('selectOpposite')
    $('.feed .radial, .stats .radial').removeClass('feedInvert').addClass('feedOpposite')
    $('.item, .filter, .populate').addClass('oppositeOver').removeClass('invertOver')
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.focus').removeClass('pageinput pageInputOut').css('box-shadow','none')
    $('.page .button').removeClass('buttonInvert').addClass('buttonOpposite')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(90deg)')
    $('.index, .hover').removeClass('visual').addClass('contrast')
    $('.listing').addClass('opposite').removeClass('invert')
    $('.page .fill').css('background-color','#ffffff')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#top').css('border-bottom', '.3px solid #333')
    $('#home, .fas, .images, a').css('color','#fff')
    $('.hover').addClass('contrast.hover')
  } else if (op == 0) {
    $('#container, #notification, #top, #arm, #option, .index, .item, .classic, .feed .asset, ' +
      '.center .feed, .page input[type=text], .air, .result, .background, .group'
    ).css({
      'background-color': '#fff',
      'border': 'none',
      'color': '#666'
    })
    $('#main, .hover, #visit, .page, .page .feed, .right, .left, .stats .asset, ' +
      '.filter, .populate, .blur, #search input[type=text]'
    ).css({
      'background-color': '#f7f7f7',
      'border': 'none',
      'color': '#666'
    })
    $(':root').css({
      '--loader-color-primary': '#0078D4',
      '--loader-color-secondary': '#5baff0',
    })
    $('.link, .right, .left, .filter, .populate, .page .asset, .asset a')
      .addClass('invertOverBorderless').removeClass('oppositeOver oppositeOverBorderless')
    $('#guide .wrap, .page input, .item, .right, .left, .page .id').css('box-shadow', '1px 1px 1px #eee')
    $('.header .radial, .suggestions .radial').removeClass('suggestOpposite').addClass('suggestInvert')
    $('.detail .radial, .select .radial').removeClass('selectOpposite').addClass('selectInvert')
    $('.feed .radial, .stats .radial').removeClass('feedOpposite').addClass('feedInvert')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('.page .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(0deg)')
    $('#search input[type=text], .background').css('border', '.3px solid #eaeaea')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.item').addClass('invertOver').removeClass('oppositeOver')
    $('.item, .center .feed').css('border','.3px solid #ddd')
    $('#top, .index').css('border-bottom', '.3px solid #ccc')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.page .fill').css('background-color','#383838')
    $('#home, .fas, .images, a').css('color','#000')
    $('#favicon').attr('href', 'favicon.ico')
    $('.hover').addClass('visual.hover')
  }
}
