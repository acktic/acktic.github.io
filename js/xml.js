var xml = function(e, s, n, post) {
  id = n
  obj = []
  var local
  var pub = []
  var src = ''
  category = menu[n].cat
  var img = 'images/png/' + menu[n].img + '.png'
  if (e == 'search') {
    uri = cors + menu[n].uri + s + '&format=RSS'
  } else uri = cors + menu[n].uri
  if (filter.length > 1) var next = filter.indexOf(menu.indexOf(menu[n]))
  else var next = n
  if (filter[next + +1]) var plus = filter[next + +1]
  else if (n == menu.length - 1) var plus = 1 + +1
  else var plus = n + +1
  if (filter[next - +1]) var back = filter[next - +1]
  else if (n == 0) var back = menu.length - 1
  else var back = n - +1
  document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
  progress(false, Math.floor(Math.random() * (55 - 25 + 1) + 25))
  var complete = setInterval(function() {
    $('#progressBar').width($('#progressBar').width() + Math.floor(Math.random() *
      (5 - 0 + 1) + 0))
  }, 350)
  $('#main .result, #main .center, #main .air, #main .suggestions').remove()
  $.get({
    url: uri,
    method: 'GET',
    dataType: 'xml',
    contentType: 'text/html; charset=utf-8',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      Accept: 'text/html; charset=utf-8',
      'X-Requested-With': '*'
    }
  }).fail(function() {
    $('#main').append(
      "<div class='center' style='display:none'>" +
      "  <div class='quick'>" +
      "    <div class='feed'></div>" +
      "    <div class='left fa-angle-double-left' style='display:none'></div>" +
      "    <div class='right fa-angle-double-right'></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>"
    )
    $('#main .channel').html("This site could not be reached.")
    clearInterval(complete)
    progress(true, 100)
    feed()
    visual()
  }).done(function(xhr) {
    if ($(xhr).find('entry').length > 0) var channel = "entry"
    else var channel = 'item'
    var quit = $(xhr).find(channel).length - 2
    $(xhr).find(channel).each(function(i) {
      if (channel == 'entry') {
        var ref = $(this).find('link').attr('href')
        var dst = zulu($(this).find('updated').text());
        var since = new Date($(this).find('updated').text()).getTime()
        var gen = $(this).find('updated').text().toLocaleString()
        gen = parseInt(
          gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
            .replace(/\:/g, '')
          ).toString(36)
      } else if (channel = 'item') {
        var ref = $(this).find('link').text()
        if ($(this).find('pubDate').text().length > 0) {
          var dst = zulu($(this).find('pubDate').text());
          var since = new Date($(this).find('pubDate').text())
          var gen = new Date($(this).find('pubDate').text()).toLocaleString()
          gen = parseInt(
            gen.match(/([0-9]+\:[0-9]+\:[0-9]+)/g).toString()
              .replace(/\:/g, '')
            ).toString(36)
        } else if ($(this).find('dc\\:date, date').text()) {
          var dst = zulu($(this).find('dc\\:date, date').text());
          var gen = new Date($(this).find('dc\\:date, date').text()).getTime()
        } else {
          var dst = []
          dst.push('')
        }
      }
      if ($('#search input[type=text]').val() != 'Search')
        var search = $('#search input[type=text]').val()
      else var search = menu[n].cat.toLowerCase()
      var share = menu[n].hash
      var ts = (gen).toString(36)
      var share = window.location.origin + '/?' + share + ts
      if ($(this).find('content').text()
      .match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g)) {
        src = String($(this).find('content').text()
          .match(/https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g))
      } else if ($(this).find('content').text()
      .match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)) {
          src = String($(this).find('content').text()
            .match(/https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g)
          )
      } else if ($(this).find('content').text()
      .match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text()
          .match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        if ($(this).find('link').attr('href').match(/youtube\.com/))
          src = 'https://www.youtube.com/embed/' +
            String($(this).find('link').attr('href').split('=')[1])
        else src = String($(this).find('link').attr('href'))
      } else if ($(this).find('content').text()
      .match(/src=['"]https:\/\/.+?(gif|png|jpg)['"]/)) {
        src = String($(this).find('content').text().match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('link').attr('href')) {
        src = String($(this).find('link').attr('href'))
      } else if ($(this).find('media\\:thumbnail, thumbnail').attr('url')) {
        src = String($(this).find('media\\:thumbnail, thumbnail').attr('url'))
      } else if ($(this).find('link').text().match(/https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('link').text()
          .match(/https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('image').find('link, url').text()
      .match(/https:\/\/.+?(gif|png|jpg)/)) {
        src = String($(this).find('image').find('link, url').text()
          .match(/https:\/\/.+?(gif|png|jpg)/)[0])
      } else if ($(this).find('enclosure').attr('url')) {
        src = String($(this).find('enclosure').attr('url'))
      } else if ($(this).find('media\\:content, content').attr('url')) {
        src = String($(this).find('media\\:content, content').attr('url'))
      } else if ($(this).find('content\\:encoded').text()
      .match(/img.+src=['"](.*?)['"]/)) {
        src = String($(this).find('content\\:encoded').text()
          .match(/img.+src=['"](.*?)['"]/)[1])
      } else if ($(this).find('description').text().toLowerCase()
      .match(/src=['"](.*?)['"]/)) {
        src = String($(this).find('description').text().toLowerCase()
          .match(/src=['"](.*?)['"]/)[1])
      } else if ($(this).find('image').text()) {
        src = String($(this).find('image').text())
      } else if (src.match(/comments|default|feeds|fsdn|undefined|[^https?:\/\/]/))
        src = ''
        console.log(src)
      if (src == '') courtesy = ''
      else courtesy =
        "<div class='courtesy' style='float:left'>" +
        "  <img class='id' src='" + img + "'>" +
        "  <a ext='" + menu[n].ext + "'>" +
        "    <b>" + menu[n].id.match(/([^\/]+)$/g) + "</b>" +
        "  </a>" +
        "</div>"
      if ($(this).find('title:first').text().length > 125)
        var more = "<div class='more'>more</div>"
      else var more = ""
      if (src.match(/youtube\.com/g)) {
        if ($(this).find('media\\:statistics, statistics').attr('views'))
            var views =
            "<div class='ago views'>" +
            "  views " + $(this).find('media\\:statistics, statistics').attr(
              'views').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "</div>"
        else var views = ''
        html =
          "<div id='yt' class='item' ext='" + ref.trim() + "'>" +
          "  <div class='header'>" + courtesy +
          "    <div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "  </div>" +
          "  <div class='yt'>" +
          "    <iframe src='" + src + "'></iframe>" +
               views +
          "  </div>" +
          "  <div class='tag'>" +
          "    <div class='ago fa-heart-o'></div>" +
          "    <div class='ago fa-comment-o'></div>" +
          "    <div class='ago fa-bookmark-o' title='Copy Source'></div>" +
          "  </div>" +
          "  <div class='pub' " + "text='" + escape($(this).find('title:first').text()) + "'>" +
               escape($(this).find('title:first').text().truncate(125, true)) +
               more +
          "  </div>" +
          "  <div class='ago'>" + dst[0] + "</div>" +
          "  <input class='url' value='" + ref.trim() + "'>" +
          "  <input class='share' value='" + share + "'>" +
          "  <input class='source' value='" + src + "'>" +
/*          "  <form class='addComment' action'#'>" +
          "    <input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
          "    <div class='post'><b>Post</b></div>" +
          "  </form>" +
*/
          "</div>"
      } else {
        if (e == 'search') {
          var cat =
            "<div class='external'>" +
              ref.match(/^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g) +
            "</div>"
        } else var cat = ''
        html =
          "<div class='item " + i + "' item='" + i + "' ext='" + ref.trim() + "'>" +
          "  <div class='classic'>" +
          "    <div class='header'>" +
                 courtesy + "<div class='copy fa-ellipsis-h' title='Copy URL'></div>" +
          "    </div>" +
          "    <div class='fill'></div>" +
          "    <div class='image' style='display:none'>" +
          "      <img id='" + i + "' class='img' src='" + src + "'>" +
          "      <div class='tag'>" +
          "        <div class='ago fa-heart-o'></div>" +
          "        <div class='ago fa-comment-o'></div>" +
          "        <div class='ago fa-sticky-note-o' title='Copy Post'></div>" +
          "        <div class='ago fa-bookmark-o' title='Copy Source'></div>" +
          "      </div>" +
          "    </div>" +
          "    <div class='wrap'>" +
          "      <div class='pub' style='display:none' text='" + escape($(this).find('title:first').text()) + "'>" +
                   escape($(this).find('title:first').text().truncate(125, true)) +
                   more +
          "      </div>" +
          "      <div class='ago' style='display:none'>" + dst[0] + "</div>" +
          "    </div>" +
          "    <input class='url' value='" + ref.trim() + "'>" +
          "    <input class='share' value='" + share + "'>" +
          "    <input class='source' value='" + src + "'>" + cat +
          "    <form class='addComment' action'#'>" +
          "      <input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
          "      <div class='post'><b>Post</b></div>" +
          "    </form>" +
          "  </div>" +
          "</div>"
      }
      pub.push({
        title: escape($(this).find('title:first').text()),
        courtesy: courtesy,
        ref: ref.trim(),
        since: since,
        share: share,
        dst: dst[0],
        more: more,
        element: i,
        post: html,
        src: src,
        gen: gen
      })
      pub.sort(function(a, b) {
        return b.since - a.since
      })
      $.each(pub, function(i) {
        if (parseInt(pub[i].gen, 36) == post) local = i
      })
    })
    $('#main').append(
      "<div class='center' style='display:none'>" +
      "  <div class='quick'>" +
      "    <div class='feed'></div>" +
      "    <div class='left' style='display:none'><div class='fa-angle-double-left'></div></div>" +
      "    <div class='right'><div class='fa-angle-double-right'></div></div>" +
      "  </div>" +
      "  <div class='channel'></div>" +
      "</div>" +
      "<div class='content' style='visibility:hidden'>" +
      "  <div class='stats' style='visibility:hidden'></div>" +
      "  <div class='suggestions' style='visibility:hidden'>" +
      "    <b>suggested</b>&ensp;for you&ensp;...<br>" +
      "  </div>" +
      "</div>"
    )
    if ($.isNumeric(local)) {
      guide(
        i,
        pub[local].ref,
        pub[local].element,
        pub[local].courtesy,
        pub[local].title,
        pub[local].dst,
        pub[local].share,
        pub[local].src
      )
      image(true, pub[local].element, pub[local].src)
    } else $('#guide').hide()
      progress(false, Math.floor(Math.random() * (75 - 55 + 1) + 55))
      $.each(pub, function(i, k) {
        if (i == quit) return false
        if ($.isNumeric(local) && pub[local].element != pub[i].element) $('#main .center .channel').append(pub[i].post)
        else if (!$.isNumeric(local)) $('#main .center .channel').append(pub[i].post)
            image(true, pub[i].element, pub[i].src)
      })

    if (!id) id = menu.indexOf(menu[n])
    if (!$.isNumeric(local)) var posts = pub.length - 2
    else var posts = pub.length - 1
    var recent = pub[0].dst
    var oldest = pub[pub.length - 2].dst
    var images = $('#main .center .channel .item .image img.img[src!=""]').length
    if (e != 'search') $('#main .center').append(
      "<div id='bottom'>" +
      "  <button class='previous' index='" + menu.indexOf(menu[back]) + "'>Previous</button>&ensp;" +
      "  <div class='back'>" + menu[back].id.match(/[^\/]+$/g) + "</div>" +
      "  <div class='bottom'>acktic</div>" +
      "  <div class='back'>" + menu[plus].id.match(/[^\/]+$/g) + "</div>" +
      "  &ensp;<button class='next' index='" + menu.indexOf(menu[plus]) + "'>Next</button>" +
      "</div>")
    content(n, recent, oldest, images, posts)
    clearInterval(complete)
    progress(true, 100)
    suggest(id)
    feed()
  })
}
