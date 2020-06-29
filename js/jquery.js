var id
var op = 0
var request
var quit = 15
var object = []
var filter = []
var reverse = false
var contrast = false
var category = 'Social'
var cors = 'https://acktic-github-io.herokuapp.com/'
var translations = ['Social', 'News', 'Media', 'Sports', 'Technology', 'World', 'Youtube']

function applyVisual(n) {

    if (n == 'op') {
        op = op != true
    } else if (n == 1 || n == 0) op = n
    if (op == 1) {
        $('#main, #arm, #home, #option, #bottom, .fa-user-circle, .fa-terminal, .fa-git, .fa-circle, input[type=text], #visit, .result, .filter, .populate, .feed, .comment, .channel, .suggestions, .combine, .listing, .index, .title, .category, .description, .type, .item, .item .pub, .ago, a')
            .css({
                'background-color': '#000',
                'color': '#fff',
                'border': 'none',
                'box-shadow': 'none'
            })
        $('#arm, .description, .comment').css({
            'border-bottom': '1px solid #333',

        })
    	$('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#fff')
        $('.more').css('color', '#333')
        $('svg circle').css('stroke', 'url(#gradientOpposite)')
        $('.right, .left').css('background-color', 'rgba(0,0,0,.5)')
        $('.hover').css('background-color', '#333')
        $('#progressBar').removeClass('responseInvert').addClass(
            'responseOpposite')
        $('#main, .listing').addClass('opposite').removeClass(
            'invert')
        $('.bottom').attr('src', 'images/opposite.png').css('filter', 'none')
        $('#favicon').attr('href', 'images/opposite.png')
    } else if (op == 0) {
        $('.suggestions, .combine, .comment, .channel, .air, .result, .filter, .populate, .feed, .title, .item, .item .pub, .type, .ago, a')
            .css({
                'background-color': '#fff',
                'color': '#666',
                'border': 'none'
            })
        $('input[type=text], .category, .listing')
            .css({
                'background-color': '#fafafa',
                'border': '1px solid #ddd',
                'color': '#666'
            })
        $('#arm, #option, .index').css({
            'background-color': '#fff',
            'border': 'none',
            'color': '#666'
        })
        $('#main, #visit, #bottom, .filter, .populate, .description, .channel, #bottom')
            .css({
                'background-color': '#fafafa',
                'color': '#666'
            })
        $('#home, .fa-user-circle, .fa-git, .fa-terminal, .fa-circle-thin')
            .css({
                'background-color': 'transparent',
                'color': '#333'
            })
    	$('.fa-bookmark, .fa-comments, .fa-sticky-note').css('color', '#000')
        $('svg circle').css('stroke', 'url(#gradientInvert)')
        $('.right, .left').css('background-color', 'rgba(255,255,255,.5)')
        $('.feed, .item, .title, .suggestions').css('border', '1px solid #ddd')
        $('.hover').css('background-color', '#fafafa')
        $('#progressBar').removeClass('responseOpposite').addClass(
            'responseInvert')
        $('.description, .index').css({
            'border-bottom': '1px solid #ccc'
        })
        $('.listing, .item, .feed, .suggestions').css('box-shadow',
            '1px 1px 6px #eee')
        $('#main, .listing').addClass('invert').removeClass(
            'opposite')
        $('.bottom').attr('src', 'images/transparent.png').css({
            'filter': 'brightness(50%) saturate(20%) invert(90%)'
        })
        $('#favicon').attr('href', 'images/invert.png')
        $('#arm').css({
            'border-bottom': '1px solid #ddd'
        })
    }
    $('.fa-heart').css('color', 'lightcoral')

}

function categoryResponse(n) {

	$('#main .air, #main .result, #main .center, #main .suggestions').remove()
    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    for (var i = 1; i <= menu.length - 1; i++) {
        if (n == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag,
                "<b>" + tag + '</b>')
            if (!menu[i].img) var img = 'images/apply' + '.png'
            else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
            $('#main .result').append(
                "<div class='populate " + menu.indexOf(menu[n]) +
                "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "' search='" +
                menu[i].cat.toLowerCase() + "'> " +
                "<div class='pub'><div class='category'>" + menu[
                    i].cat + "</div><a class='title' ext='" +
                menu[i]
                .ext + "'>" + menu[i].id.match(/[^\/]+$/g) +
                "</a></div>" +
                "<div class='description'>&emsp;" + hilight +
                "</div>" +
                "<img class='id' style='top:10px' src='" + img + "'>" +
                "</div>"
            )
        }
    }
	progressResponse(true, 100)
}

function expandImage(n) {

    if ($('#' + n).hasClass('expand min')) {
        object.push({
            element: n,
            item: $('#' + n).parents('.item').width(),
            parent: $('#' + n).parent().width(),
            less: $('#' + n).width()
        })
        $('#' + n).removeClass('min').addClass('full')
            .width('100%').parent().width('100%')
    } else if ($('#' + n).hasClass('expand full')) {
        object.forEach(function(e) {
            if (n == e.element && e.less) $('#' + n)
                .removeClass('full').addClass('min').width(e
                    .less).parent().width(e.less)
        })
    }

}


function feedResponse(n) {

    if (n == 0) n = menu.indexOf(menu[Math.floor(Math.random() * menu
        .length - 1)])
    else if (n >= menu.length - 13) n = 1
    if (reverse == true) reverseArray(menu.reverse())
    for (var i = n; i <= n + 13; i++) {
        if (!menu[i].img) var img = 'images/apply' + '.png'
        else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
        $('#main .center .feed').append(
            "<div class='asset'>" +
            "<svg>" +
            "<defs>" +
            "<linearGradient id='gradientOpposite'>" +
            "<stop offset='0%' stop-color='#ef4063' />" +
            "<stop offset='99%' stop-color='#e557c6' />" +
            "</linearGradient>" +
            "<linearGradient id='gradientInvert'>" +
            "<stop offset='0%' stop-color='#F7797d' />" +
            "<stop offset='99%' stop-color='#fbd786' />" +
            "</linearGradient>" +
            "</defs>" +
            "<circle cx='36' cy='36' r='28' class='border'></circle></svg>" +
            "<img src='" + img + "' class='id " + menu.indexOf(menu[i]) +
            "' response='" + menu[i].id.toLowerCase().replace(
                /[\/|\.|\s|\-]/g, '-') + "' search='" + menu[i].cat
            .toLowerCase() + "'> " +
            "<a style='left:0;width:100%' ext='" + menu[i].ext +
            "' rel='nofollow'>" + String(menu[i].id.match(/[^\/]+$/g))
            .substring(0, 9) + '...' +
            "</a>" +
            "</div>"
        )
    }
    applyVisual()
}

function filterResponse(passthrough, n, post) {
    filter = []
    $('#main .result, #main .air, #main .center, #main .suggestions').remove()
    $('#main #visit, #main #placeholder').show()
    var n = n.toLowerCase().replace(/(%20|\-|\_|\s|\+)/g, ' ')
    $('#main').scrollTop(0)
    if (reverse) reverseResponse(menu.reverse())
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase() == n) {
            filter.push(menu.indexOf(menu[i]))
            writeResponse(menu.indexOf(menu[i]))
            var exact = i
            id = i
            break
        } else if (menu[i].id.replace(/(\/|\.)/g, ' ').toLowerCase()
            .match(n)) {
            filter.push(menu.indexOf(menu[i]))
            writeResponse(menu.indexOf(menu[i]))
            id = i
        } else if (menu[i].des.replace(/(\/|\.)/g, ' ').toLowerCase()
            .match(n)) {
            filter.push(menu.indexOf(menu[i]))
            writeResponse(menu.indexOf(menu[i]))
        } else if (menu[i].cat.toLowerCase().match(n)) {
            filter.push(menu.indexOf(menu[i]))
            writeResponse(menu.indexOf(menu[i]))
        }
    }
    if (!id) id = filter[filter.length - 1] + +1
    if ($.isNumeric(exact)) {
        xmlResponse(null, null, exact, post)
        return false
    } else if ($.isNumeric(id) && filter.length == 1) {
        xmlResponse(null, null, id, post)
        return false
    } else if (!$.isNumeric(exact) && filter.length == 0) {
        xmlResponse('search', $('input[type=text]').val().replace(
            /\s/g, '+'), 0)
        return false
    }
    if (passthrough == false) progressResponse(true, 100)
    $('#main').attr('tabindex', -1)
    applyVisual()

}

function imageResolution(n) {

    var mobile = 1480
    var minimum = 299
    var maximum = 799
    if ($('#' + n).attr('src')) {
        $('#' + n).one('load', function() {
            if ($('#' + n).get(0).naturalHeight > mobile) {
                $('#' + n).addClass('expand min').width('100%')
                    .parent().css({
                        'margin': '0 auto',
                        'width': '45%'
                    })
            } else if ($('#' + n).get(0).naturalWidth >
                minimum) {
                expand = ''
                $('#' + n).width('100%')
            } else if ($('#' + n).get(0).naturalWidth <
                maximum) {
                expand = ''
                $('#' + n).width($('#' + n).get(0)
                    .naturalWidth + 30).css({
                    'margin-left': '10px',
                    'margin-top': '10px'
                }).parent().width($('#' + n).width() + 20)
            }
            $('#' + n).css('display', 'block')
        })
    } else $('#' + n).parents('.item').find('.tag, .header').hide()
}

function listResponse(n) {

	$('#arm #search #match .listing').empty()
    for (var i = menu.length - 1; i >= 1; i--) {
        if (menu[i].des.toLowerCase()
            .match(n) || menu[i].cat.toLowerCase().match(n)) {
            $('#arm #search #match .listing').prepend(
                "<div class='index " +
                menu.indexOf(menu[i]) + "' tabIndex='-1' response='" +
                menu[i].id.toLowerCase().replace(/\s|\/|\./g, '-') +
                "' search='" + menu[i].cat.toLowerCase() + "'>" +
                "<img class='type' src='" +
                "images/ID/JPG/" + menu[i].img + '.jpg' + "'>" +
                "<div class='text'>&emsp;<b>" + menu[i].cat + "</b>" +
                "<br>&emsp;" + menu[i].id.match(/[^\/]+$/g) + "</div>" +
                "</div>"
            )
            if ($('#search .listing .' + i).length > 1) $(
                '#search .listing .' + i + ':last').remove()
        }
    }
    if (!$('#arm #search #match').is(':visible')) {
        setTimeout(function() {
            $('#arm #search #match')
                .show()
        }, 50)
    }
}

function populateResponse(n) {

    if (!n) n = 1
    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    for (var i = 1; i <= menu.length - 1; i++) {
        if ($.inArray(menu.indexOf(menu[i]), filter) == -1 && menu[n]
            .cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag,
                "<b>" + tag + '</b>')
            if (!menu[i].img) var img = 'images/apply' + '.png'
            else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
            $('#main .result').append(
                "<div class='populate " + menu.indexOf(menu[n]) +
                "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "' search='" +
                menu[i].cat.toLowerCase() + "'> " +
                "<div class='pub'><div class='category'>" + menu[
                    i].cat + "</div><a class='title' ext='" +
                menu[i]
                .ext + "'>" + menu[i].id.match(/[^\/]+$/g) +
                "</a></div>" +
                "<div class='description'>&emsp;" + hilight +
                "</div>" +
                "<img class='id' style='top:10px' src='" + img + "'>" +
                "</div>"
            )
        }
    }
    applyVisual()
}

function precedeResponse(n) {

    if (!n) n = 1
    if ($('#main .air').length < 1) $('#main').prepend(
        "<div class='air' style='display:none'></div>")
    if (reverse == true) reverseArray(menu.reverse())
    for (var i = 1; i < menu.length - 1; i++) {
        if (menu[n].cat == menu[i].cat) {
            var tag = menu[i].id.match(/[^\/]+$/g)
            var hilight = menu[i].des.replace(tag,
                "<b>" + tag + '</b>')
            if (!menu[i].img) var img = 'images/apply' + '.png'
            else var img = 'images/ID/JPG/' + menu[i].img + '.jpg'
            $('#main .air').append(
                "<div class='populate " + menu.indexOf(menu[i]) +
                "' response='" + menu[i].id.toLowerCase()
                .replace(/[\/|\.|\s|\-]/g, '-') + "' search='" +
                menu[i].cat.toLowerCase() + "'> " +
                "<div class='pub'><div class='category'>" + menu[
                    i].cat + "</div><a class='title' ext='" +
                menu[i]
                .ext + "' rel='nofollow'>" + menu[i].id.match(
                    /[^\/]+$/g) + "</a></div>" +
                "<div class='description'>&emsp;" + hilight +
                "</div>" +
                "<img class='id' style='top:10px' src='" + img + "'>" +
                "</div>"
            )
        }
    }
    applyVisual()

}

var progressResponse = function (complete, n) {

    $('#progressBar').addClass('response').width(n + '%')
    if (complete == true) {
        $('#progressBar').on(
            'transitionend webkitTransitionEnd oTransitionEnd',
            function(e) {
                $(this).removeClass('response').width(0)
                $('#main #visit, #main #placeholder, #arm #search #match')
                    .hide()
                if ($('#main .suggestions').length == 1) $(
                    '#main .suggestions').css('visibility', 'visible')
                if ($('#main .result').length == 1) $(
                    '#main .result').show()
                if ($('#main .center').length == 1) $(
                    '#main .center').show()
                if ($('#main .air').length == 1) {
                    $('#main .air').show()
                    $('#main').scrollTop($('.air').outerHeight())
                } 
            })
    }

}

function suggestResponse(n) {

    for (var i = 0; i <= 9; i++) {
        var e = menu.indexOf(menu[Math.floor(Math.random() * menu.length - 1)])
        if (menu[e])
            $('#main .suggestions').append(
                "<div class='combine'>" +
                "<div response='" + menu[e].id.toLowerCase()
                .replace(/(\/|\.|\s)/g, '+') + "' search='" + menu[e].cat
                .toLowerCase() +
                "'>" + menu[e].id.match(/[^\/]+$/g) +
                "</div>" +
                "</div>"
            )
        if (i == 9) return false
    }
    applyVisual()
}

function writeResponse(n) {

    if ($('#main .result').length < 1) $('#main').append(
        "<div class='result' style='display:none'></div>")
    var tag = menu[n].id.match(/[^\/]+$/g)
    var hilight = menu[n].des.replace(tag, "<b>" + tag + '</b>')
    $('#main .result').prepend(
        "<div class='filter " + menu.indexOf(menu[n]) +
        "' response='" + menu[n].id.toLowerCase().replace(
            /[\/|\.|\s|\-]/g, '-') + "' search='" + menu[n].cat
        .toLowerCase() + "'> " +
        "<div class='pub'><div class='category'>" + menu[n].cat +
        "</div><a class='title' ext='" + menu[n]
        .ext + "'>" + menu[n].id.match(/[^\/]+$/g) +
        "</a></div>" +
        "<div class='description'>&emsp;" + hilight + "</div>" +
        "<img class='id' style='top:10px' src='" +
        "images/ID/JPG/" + menu[n].img + ".jpg'>" +
        "</div>"
    )

}

function xmlResponse(e, s, n, post) {
	id = n
    obj = []
    var local
    var pub = []
    var img = 'images/ID/JPG/' + menu[n].img + '.jpg'
    if (e == 'search') {
        uri = cors + menu[n].uri + s + '&format=RSS'
    } else uri = cors + menu[n].uri
    if (reverse) reverseResponse(menu.reverse())
    if (!$.isNumeric(id)) id = menu.length - +1
    document.title = menu[n].id.replace(/(\/|\.)/g, ' ').capitalize()
    progressResponse(false, Math.floor(Math.random() * (55 - 25 + 1) +
        25))
    var complete = setInterval(function() {
        $('#progressBar').width($('#progressBar').width() +
            Math.floor(Math.random() * (5 - 0 + 1) + 0))
    }, 350)
    $('#main .result, #main .center, #main .air, #main .suggestions').remove()
    request = $.get({
            url: uri,
            method: 'GET',
            dataType: 'xml',
            contentType: 'text/html; charset=utf-8',
            headers: {
                Accept: 'text/html; charset=utf-8',
                'Content-Type': 'text/html; charset=utf-8',
                'X-Requested-With': '*'
            }
        })
        .fail(function() {
            $('#main').append(
                "<div class='center' style='display:none'><div class='quick'><div class='feed'></div>" +
                "<div class='left fa fa-angle-double-left' style='display:none'></div><div class='right fa fa-angle-double-right'>" +
                "</div></div><div class='channel'></div></div>" +
                "<div class='suggestions' style='visibility:hidden'><b>suggested</b><br></div>"
            )
            $('#main .channel').html("This site could not be reached.")
            progressResponse(true, 100)
            clearInterval(complete)
            suggestResponse(id)
            feedResponse(id)
            applyVisual()
        })
        .done(function(xhr) {
            if ($(xhr).find('entry').length > 0) var channel =
                "entry"
            else var channel = 'item'
            if ($(xhr).find(channel).length < quit) quit = $(xhr)
                .find(channel).length - 1
            $(xhr).find(channel).each(function(i) {
                if (channel == 'entry') {
                    var ref = $(this).find('link').attr(
                        'href')
                    var dst = uncoordinatedTimeZone($(
                            this).find('updated')
                        .text());
                    var gen = new Date($(this).find(
                        'updated').text()).getTime()
                } else if (channel = 'item') {
                    var ref = $(this).find('link').text()
                    if ($(this).find('pubDate').text()
                        .length > 0) {
                        var dst = uncoordinatedTimeZone($(
                                this).find('pubDate')
                            .text());
                        var gen = new Date($(this).find(
                                'pubDate').text())
                            .getTime()
                    } else if ($(this).find(
                            'dc\\:date, date').text()) {
                        var dst = uncoordinatedTimeZone($(
                                this).find(
                                'dc\\:date, date')
                            .text());
                        var gen = new Date($(this).find(
                                'dc\\:date, date').text())
                            .getTime()
                    } else {
                        var dst = []
                        dst.push('')
                    }
                }
                if ($('#search input[type=text]').val() != 'Search')
                    var search = $(
                        '#search input[type=text]').val()
                else var search = menu[n].cat.toLowerCase()
                var share = window.location.origin + '/?q=' +
                    search + '&' +
                    menu[n].id.toLowerCase().replace(/\/|\.|\s/g,
                        '+') + '#' + gen
                if (contrast == true) share = share + '+1'
                if ($(this).find('content').text().match(
                        /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /https:\/\/i\.redd\.it\/.+?(gif|png|jpg)/g
                        ))
                } else if ($(this).find('content').text()
                    .match(
                        /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /https:\/\/.\.thumbs\.redditmedia\.com\/.+?(gif|png|jpg)/g
                        ))
                } else if ($(this).find('content').text()
                    .match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr(
                        'href')) {
                    if ($(this).find('link').attr('href')
                        .match(/youtube/)) src =
                        'https://www.youtube.com/embed/' +
                        String($(this).find('link').attr(
                            'href').split('=')[1])
                    else src = String($(this).find('link')
                        .attr('href'))
                } else if ($(this).find('content').text()
                    .match(
                        /src=['"]https:\/\/.+?(gif|png|jpg)['"]/
                    )) {
                    src = String($(this).find('content')
                        .text().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('link').attr(
                        'href')) {
                    src = String($(this).find('link')
                        .attr('href'))
                } else if ($(this).find(
                        'media\\:thumbnail, thumbnail')
                    .attr('url')) {
                    src = String($(this).find(
                        'media\\:thumbnail, thumbnail'
                    ).attr('url'))
                } else if ($(this).find('link').text()
                    .match(/https:\/\/.+?(gif|png|jpg)/)
                ) {
                    src = String($(this).find('link')
                        .text().match(
                            /https:\/\/.+?(gif|png|jpg)/
                        )[
                            0])
                } else if ($(this).find('image').find(
                        'link, url').text().match(
                        /https:\/\/.+?(gif|png|jpg)/)) {
                    src = String($(this).find('image')
                        .find('link, url').text()
                        .match(
                            /https:\/\/.+?(gif|png|jpg)/
                        )[0])
                } else if ($(this).find('enclosure').attr(
                        'url')) {
                    src = String($(this).find('enclosure')
                        .attr('url'))
                } else if ($(this).find(
                        'media\\:content, content').attr(
                        'url')) {
                    src = String($(this).find(
                        'media\\:content, content'
                    ).attr('url'))
                } else if ($(this).find(
                        'content\\:encoded').text().match(
                        /img.+src=['"](.*?)['"]/)) {
                    src = String($(this).find(
                            'content\\:encoded')
                        .text().match(
                            /img.+src=['"](.*?)['"]/)[
                            1])
                } else if ($(this).find('description')
                    .text().toLowerCase().match(
                        /src=['"](.*?)['"]/)) {
                    src = String($(this).find(
                            'description').text()
                        .toLowerCase().match(
                            /src=['"](.*?)['"]/)[1])
                } else if ($(this).find('image').text()) {
                    src = String($(this).find('image')
                        .text())
                } else src = ''
                if (src.match(
                        /comments|default|feeds|fsdn|undefined/
                    )) src = ''
                if (!src.match(/https?:\/\//)) src = ''
                if (src == '') courtesy = ''
                else courtesy =
                    "<div class='courtesy' style='float:left'><img class='id' src='" +
                    img + "'>" +
                    "<a onclick='event.stopPropagation();window.open(\"" +
                    menu[n].ext + "\")'>" + menu[n].id
                    .match(/([^\/]+)$/g) +
                    "</a></div>"
                if ($(this).find('title:first').text().length > 125)
                    var more =
                        "<div class='more'>more</div>"
                else var more = "<div class='more'></div>"
                if (src.match(/mp4|youtube/g)) {
                    if ($(this).find(
                            'media\\:statistics, statistics'
                        ).attr('views'))
                        var views =
                            "<div class='ago views' style='margin-bottom:20px'>views " +
                            $(this).find(
                                'media\\:statistics, statistics'
                            ).attr('views')
                            .toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ",") + "</div>"
                    else var views = ''
                    html =
                        "<div id='yt' class='item' ext='" + ref
                        .trim() + "'>" +
                        "<div class='header'>" + courtesy +
                        "<div class='copy fa fa-ellipsis-h' title='Copy URL'></div>" +
                        "</div>" +
                        "<div class='yt'>" + "<iframe src='" + src +
                        "'></iframe>" + views + "</div>" +
                        "<div class='tag' style='margin-left:10px'>" +
                        "<div class='fa fa-heart-o'></div>" +
                        "<div class='fa fa-comments-o'></div>" +
                        "<div class='fa fa-sticky-note-o' title='Copy Post'></div>" +
                        "<div class='fa fa-bookmark-o' title='Copy Source'></div>" +
                        "<input class='url' value='" + ref.trim() +
                        "'>" +
                        "<input class='share' value='" + share +
                        "'>" +
                        "<input class='source' value='" + src +
                        "'>" +
                        "</div>" +
                        "<div class='pub' " +
                        "text='" + escapeHtml($(this).find(
                            'title:first').text()) + "'>" +
                        $(this).find('title:first').text().truncate(
                            125, true) +
                        more + "</div>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
                        "<form class='addComment' action'#'>" +
                        "<input class='comment' onclick='event.stopPropagation()' maxlength='60' placeholder='Add a Comment'>" +
						"<div class='post'><b>Post</b></div>" +
                        "</form>" +
                        "</div>"
                } else {
                    if (e == 'search') {
                        var cat =
                            "<div style='width:98%;font-size:10;margin:10px;text-transform:lowercase'>" +
                            ref.match(
                                /^(?:http:\/\/|www\.|https:\/\/)([^\/]+)/g
                            ) + "</div>"
                    } else var cat = ''
                    html =
                        "<div class='item " + i + "' item='" + i +
                        "' ext='" + ref.trim() + "'>" +
                        "<div class='header'>" + courtesy +
                        "<div class='copy fa fa-ellipsis-h' title='Copy URL'></div>" +
                        "</div>" +
                        "<div class='image'>" +
                        "<img id='" + i +
                        "' style='display:none' src='" + src +
                        "' class='img'>" +
                        "<div class='tag'>" +
                        "<div class='ago fa fa-heart-o'></div>" +
                        "<div class='ago fa fa-comments-o'></div>" +
                        "<div class='ago fa fa-sticky-note-o' title='Copy Post'></div>" +
                        "<div class='ago fa fa-bookmark-o' title='Copy Source'></div>" +
                        "</div>" +
                        "</div>" +
                        "<div class='pub' text='" + escapeHtml($(
                            this).find('title:first').text()) + "'>" +
                        $(this).find('title:first').text().truncate(
                            125, true) + more + "</div>" +
                        "<input class='url' value='" + ref.trim() + "'>" +
                        "<input class='share' value='" + share + "'>" +
                        "<input class='source' value='" + src + "'>" +
                        "<div class='ago'>" + dst[0] + "</div>" +
                        cat +
                        "<form class='addComment' action'#'>" +
                        "<input class='comment' onclick='event.stopPropagation()' maxlength='88' placeholder='Add a Comment'>" +
						"<div class='post'><b>Post</b></div>" +
                        "</form>" +
                        "</div>"
                }
                pub.push({
                    element: i,
                    since: gen,
                    post: html
                })
                pub.sort(function(a, b) {
                    return b.since - a.since
                })
                $.each(pub, function(i) {
                    if (pub[i].since == post)
                        local = i
                })
            })
            $('#main').append(
                "<div class='center' style='display:none'><div class='quick'><div class='feed'></div>" +
                "<div class='left fa fa-angle-double-left' style='display:none'></div><div class='right fa fa-angle-double-right'>" +
                "</div></div><div class='channel'></div></div>" +
                "<div class='suggestions' style='visibility:hidden'><b>suggested</b>&ensp;for you...<br></div>"
            )
            if ($.isNumeric(local)) {
                $('#main .center .channel').append(pub[local].post)
                if ($('#' + pub[local].element).length)
                    imageResolution(pub[local].element)
            } else {
                $.each(pub, function(i, k) {
                    if (i == quit) return false
                    $('#main .center .channel').append(pub[i].post)
                    if ($('#' + pub[i].element).length) {
                        imageResolution(pub[i].element)
                    }
                })
            }
            if (!id) id = menu.indexOf(menu[n])
            $('#main .center').append(
                "<div id='bottom'><img class='bottom'></div>")
            progressResponse(true, 100)
            clearInterval(complete)
            suggestResponse(id)
            feedResponse(id)
            applyVisual()
        })

}