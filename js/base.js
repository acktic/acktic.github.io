var id
var img
var post
var op = 0
var tap = 0
var filter = []
var object = []
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

var tag = "  <div class='tag' style='display:none'>" +
          "    <div class='images fa-heart-o'></div>" +
          "    <div class='images fa-comment-o'></div>" +
          "    <div class='images fa-sticky-note-o' title='Copy Post'></div>" +
          "    <div class='images fa-bookmark-o' title='Copy Source'></div>" +
          "  </div>"

var svg = "<svg>" +
          "  <defs>" +
          "    <linearGradient id='gradientOpposite'>" +
          "      <stop offset='0%' stop-color='#ef4063' />" +
          "      <stop offset='99%' stop-color='#e557c6' />" +
          "    </linearGradient>" +
          "    <linearGradient id='gradientInvert'>" +
          "      <stop offset='0%' stop-color='#F7797d' />" +
          "      <stop offset='99%' stop-color='#fbd786' />" +
          "    </linearGradient>" +
          "  </defs>" +
          "  <circle></circle>" +
          "</svg>"


var fill ="<svg width='51px' height='50px' viewBox='0 0 51 50'>" +
          "    <rect class='one' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0s' dur='1s' repeatCount='indefinite' />" +
          "    </rect> " +
          "    <rect class='second' x='19' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0.2s' dur='1s' repeatCount='indefinite' />" +
          "    </rect>" +
          "    <rect class='third' x='38' y='0' width='2' height='50'>" +
          "        <animate attributeName='height' values='20;5;20' begin='0.6s' dur='1s' repeatCount='indefinite' />" +
          "        <animate attributeName='y' values='0;20;0' begin='0.4s' dur='1s' repeatCount='indefinite' />" +
          "    </rect>" +
          "</svg>"

var select = function(n) {

  $.each(translations, function(i) {
  $('#main .translation')
    .append(
      "<div class='select' response='" + translations[i] + "'>" +
      "  <div class='radial'></div>" +
      "  <img class='type' src='images/" + translations[i] + '.png' + "'>" +
      "  <div class='text'>&emsp;<b>" + translations[i] + "</b>" +
      "    <br>&emsp;" + translations[i].grep() + " feeds" +
      "  </div>" +
      "</div>"
    )
  })

}

var guide = function(n, ref, element, courtesy, title, dst, share, src) {

  $('#guide').empty().css('display','flex').append(
    "<svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>" +
    "  <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />" +
    "  <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />" +
    "</svg>" +
    "<div class='blur'></div>" +
    "<div class='sticky'>" +
    "  <div class='fill'></div>" +
    "  <div class='item " + n + "' item='" + n + "' ext='" + ref + "'>" +
    "    <div class='image'>" +
    "      <img class='img guide' style='display:none' id='" + element + "'>" +
    "    </div>" +
    "  </div>" +
    "  <div class='wrap' style='display:none'>" +
    "  <div class='header' style='display:none'>" + courtesy +
    "    <div class='copy fa-ellipsis-h' title='Copy URL'>" +
    "  </div>" +
    "  </div>" +
    "  <div class='pub' style='display:none'>" + title + "</div>" +
    "  <div class='ago' style='display:none'>" + dst + "</div>" +
    "  <input class='url' value='" + ref + "'>" +
    "  <input class='share' value='" + share + "'>" +
    "  <input class='source' value='" + src + "'>" +
        tag +
    "</div>"
  )
}

var content  = function(n, recent, oldest, posts) {

    var images = 0
    var img = 'images/png/' + menu[n].img + '.png'
    $('#main .stats').append(
      "<div class='asset' response='" + menu[n].id.toLowerCase().replace(/\s|\/|\./g, '-') + "'>" +
      "<div class='radial'></div>" +
      "<img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
      "</div>" +
      "<div class='info'>" +
      "  <a ext='" + menu[n].ext + "'>" +
        menu[n].id.match(/[^\/]+$/g) +
      "  </a>" +
      "  <br>" +
      "  <b>Most recent</b> " + recent +"<br>" +
      "  <b>Oldest post </b> " + oldest + "<br>" +
      "  <b>Images</b> <div class='images'>" + images + "</div><br>" +
      "  <b>Posts</b> " + posts +
      "</div>"
    )

}

var list = function(e, n) {

  $('#arm #search #match .listing').empty()
  $('#main #visit #front #first .listing').empty()
  for (var i = menu.length - 1; i >= 1; i--) {
    if (menu[i].des.toLowerCase().match(n) || menu[i].cat.toLowerCase().match(n)) {
      $('#' + e + ' .listing').prepend(
        "<div class='index' index='" + menu.indexOf(menu[i]) + "'" +
        "  tabIndex='-1'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') + "'" +
        "  search='" + menu[i].cat.toLowerCase() + "'>" +
        "<div class='detail'>" + svg + "</div>" +
        "<img class='type' src='" + "images/png/" + menu[i].img + '.png' + "'>" +
        "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
        "<br>&emsp;" +
          menu[i].id.match(/[^\/]+$/g) + "</div>" +
        "</div>"
      )
      if ($('#' + e + ' .listing .' + i).length > 1) $('#search .listing .' + i + ':last')
        .remove()
    }
  }
  if (!$('#arm #search #match').is(':visible')) {
    setTimeout(function() {
      $('#arm #search #match').show()
    }, 50)
  }

}

var feed  = function(l, n) {

  var dupe = []
  for (var i = 1; i <= n; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    if (menu[e] && e != 0 && $.inArray(e, dupe) == -1){
      dupe.push(e)
      if (menu[e]) var img = 'images/png/' + menu[e].img + '.png'
        $('#main .' + l + ' .feed').append(
          "<div class='asset' " +
              "response='" + menu[e].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'>" +
            svg +
          "<img src='" + img + "' class='id " + menu.indexOf(menu[e]) + "'" +
          "  search='" + menu[e].cat.toLowerCase() + "'> " +
          "<a style='left:0;width:100%' ext='" + menu[e].ext + "' " +
          "  title='" + menu[e].id + "'>" +
            String(menu[e].id.match(/[^\/]+$/g)).substring(0,9) +
          '...' +
          "</a>" +
          "</div>"
       )
     }
  }
  visual()
}

var comment = function (n) {

	var emoji = []
	var comment = []
	var e = Math.floor(Math.random() * (3 - 1) + 1)
	for (i = 0; i <= e; i++) {
		comment.push(emojis.indexOf(emojis[Math.floor(Math.random() * emojis.length - 1)]))
	}
	$.each(comment, function(k, i) {
		emoji.push('&ensp;' + emojis[comment[k]] + '&ensp;')
	})
	$('.' + n + ' .pub:last').html($('.' + n + ' .pub:last').html() + emoji.join(''))
	$('.' + n + ' .addComment .comment').val('')
	visual()

}

var progress = function(complete, n) {

  $(document).ready(function() {
    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
      $('#progressBar').on(
        'transitionend webkitTransitionEnd oTransitionEnd',
        function(e) {
          $(this).removeClass('response').width(0)
          $('#main #visit, #arm #search #match').hide()
          if ($('#main .translation').length == 1) $(
            '#main .translation').css('visibility', 'visible')
          if ($('#main .content').length == 1) $(
            '#main .stats').css('visibility', 'visible')
          if ($('#main .suggestions').length == 1) $(
            '#main .suggestions').css('visibility', 'visible')
          if ($('#main .result').length == 1) $('#main .result').show()
          if ($('#main .center').length == 1) $('#main .center').show()
          if ($('#main .air').length == 1) {
            $('#main .air').show()
            $('#main').scrollTop($('.air').outerHeight())
          }
          $('#main').attr('tabindex', -1).focus()
          $('#top').css('visibility','visible')
        })
      visual()
    }
  })

}

var suggest = function(n) {

  var dupe = []
  for (var i = 0; i <= 7; i++) {
    var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
    dupe.push(e)
    if (menu[e] && e != 0 && $.inArray(dupe, e) === -1){
    var img = 'images/png/' + menu[e].img + '.png'
      $('#main .suggestions').append(
        "<div class='combine'>" +
        "  <img src='" + img + "' class='id " + menu.indexOf(menu[n]) + "'>" +
        "  <div title='" + menu[e].id.replace(/\//g, ' ') + "'" +
        "    response='" + menu[e].id.toLowerCase().replace(/(\/|\.|\s)/g, '-') + "'" +
        "    search='" + menu[e].cat.toLowerCase() + "'>" +
             menu[e].id.match(/[^\/]+$/g) +
             "<br>" + "<b>" + menu[e].cat + "</b>" +
        "  </div>" +
        "</div>"
      )
    }
    if (i == 9) return false
  }

}

var populate = function(n) {
  $('#main .air, #main .translation, #main .center, #main .content').remove()
  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  for (var i = 1; i <= menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .result').append(
        "<div class='populate' index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  <div class='display'>" +
        "    <img class='id' src='" + img + "' " +
        "       response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "' title='" + menu[i].id + "'>" +
               menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
    }
  }
  air(category)
}

var air = function(n) {

  if ($('#main .air').length < 1)
    $('#main .result').before(
      "<div class='air' style='display:none'></div>"
    )
  for (var i = 1; i < menu.length - 1; i++) {
    if (id != menu.indexOf(menu[i]) && category == menu[i].cat) {
      var tag = menu[i].id.match(/[^\/]+$/g)
      var hilight = menu[i].des.replace(tag, "<b>" + tag + '</b>')
      var img = 'images/png/' + menu[i].img + '.png'
      $('#main .air').append(
        "<div class='populate' + index='" + menu.indexOf(menu[i]) + "'" +
        "  response='" +
             menu[i].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'> " +
        "  <div class='display'>" +
        "    <img class='id' src='" + img + "' " +
        "       response='" + menu[i].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
        "  </div>" +
        "    <a class='title' ext='" + menu[i].ext + "' title='" + menu[i].id + "'>" +
                    menu[i].id.match(/[^\/]+$/g) +
        "    </a>" +
        "</div>"
      )
    }
  }

}

var write = function(n) {

  if ($('#main .result').length < 1)
    $('#main').append(
      "<div class='result' style='display:none'></div>"
    )
  var tag = menu[n].id.match(/[^\/]+$/g)
  var img = 'images/png/' + menu[n].img + '.png'
  var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
  if (n != id || n != filter[filter.length - 1] || filter.length >= 1)
    $('#main .result').append(
      "<div class='filter' " +
      "  index='" + menu.indexOf(menu[n]) + "'" +
      "  response='" + menu[n].id.toLowerCase().replace(/[\/|\.|\s|\-]/g, '-') + "'" +
      "  search='" + menu[n].cat.toLowerCase() +
      "'> " +
      "  <div class='display'>" +
      "    <img class='id' src='" + img + "' " +
      "      response='" + menu[n].id.toLowerCase().replace(/\/|\.|\s|\-/g, '-') + "'> " +
      "  </div>" +
      "    <a class='title' ext='" + menu[n].ext + "' title='" + menu[n].id + "'>" +
             menu[n].id.match(/[^\/]+$/g) +
      "    </a>" +
      "</div>"
    )

}
