var visual = function(n) {
  if (n == 'op') op = op != true
  else if (n == 1 || n == 0) op = n
  if (op == 1) {
    $('#container, #top, #arm, #visit, #option, .page, .classic, .item, .feed, .asset, .asset a, ' +
      '.index, .filter, .populate, .result, .air, .blur, input[type=text], #main, .group'
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
    $('.filter, .populate').removeClass('invertOverBorderless').css('border','1px solid #0e0e0e')
    $('.detail .radial, .select .radial').removeClass('selectInvert').addClass('selectOpposite')
    $('.feed .radial, .stats .radial').removeClass('feedInvert').addClass('feedOpposite')
    $('.item, .filter, .populate').addClass('oppositeOver').removeClass('invertOver')
    $('#progressBar').removeClass('responseInvert').addClass('responseOpposite')
    $('.focus').removeClass('pageinput pageInputOut').css('box-shadow','none')
    $('.page .button').removeClass('buttonInvert').addClass('buttonOpposite')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(90deg)')
    $('.index, .hover').removeClass('visual').addClass('contrast')
    $('.listing').addClass('opposite').removeClass('invert')
    $('.second').css('cssText','fill: #e557c6 !important')
    $('.third').css('cssText','fill: #ff6289 !important')
    $('.one').css('cssText','fill: #ef4063 !important')
    $('.page .fill').css('background-color','#ffffff')
    $('#favicon').attr('href', 'images/Opposite.ico')
    $('#top').css('border-bottom', '1px solid #333')
    $('#home, .fas, .images, a').css('color','#fff')
    $('.category').css('border','1px solid #000')
    $('.hover').addClass('contrast.hover')
    $('#placeholder').css('color','#fff')
  } else if (op == 0) {
    $('#container, #notification, #top, #arm, #option, .index, .item, .classic, ' +
      '.center .feed, .page input[type=text], .air, .result, .background, .group'
    ).css({
      'background-color': '#fff',
      'border': 'none',
      'color': '#666'
    })
    $('.hover, #visit, .page, .page .feed, .right, .left, ' +
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
    $('.link, .filter, .populate, .page .asset, .asset a')
      .addClass('invertOverBorderless').removeClass('oppositeOverBorderless')
    $('#guide .wrap, .page input, .item, .right, .left, .page .id').css('box-shadow', '1px 1px 1px #eee')
    $('.link, .page .asset, .asset a').addClass('invertOverBorderless').removeClass('oppositeOverBorderless')
    $('.header .radial, .suggestions .radial').removeClass('suggestOpposite').addClass('suggestInvert')
    $('.item, .filter, .populate, .right, .left').addClass('invertOver').removeClass('oppositeOver')
    $('.detail .radial, .select .radial').removeClass('selectOpposite').addClass('selectInvert')
    $('.feed .radial, .stats .radial').removeClass('feedOpposite').addClass('feedInvert')
    $('#search input[type=text], .filter, .populate').css('border', '1px solid #eaeaea')
    $('#progressBar').removeClass('responseOpposite').addClass('responseInvert')
    $('.page .button').removeClass('buttonOpposite').addClass('buttonInvert')
    $('.select .type, .typeTranslation').css('filter','hue-rotate(0deg)')
    $('#search input[type=text]').css('border', '1px solid #eaeaea')
    $('.index, .hover').addClass('visual').removeClass('contrast')
    $('.item, .center .feed').css('border','.3px solid #ddd')
    $('#top, .index').css('border-bottom', '1px solid #ccc')
    $('.listing').addClass('invert').removeClass('opposite')
    $('.second').css('cssText','fill: #12d8fa !important')
    $('.third').css('cssText','fill: #06ffcb !important')
    $('.one').css('cssText','fill: #1fa2ff !important')
    $('.page .fill').css('background-color','#383838')
    $('#home, .fas, .images, a').css('color','#000')
    $('#favicon').attr('href', 'favicon.ico')
    $('.hover').addClass('visual.hover')
  }
}
