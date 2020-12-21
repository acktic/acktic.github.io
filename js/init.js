/* Init.js does some handling of location.

  * Translation Example
  > /?q=[translation]

  * Hash Example
  > /?[hash] fails to search.

  * Feed Example
  > /?q=[unique+id] fails to search.
  > /?q=[tranlsation] translation found populate.

*/

setTimeout(function() {

  if (
    !location.href.match(`\\?fbclid`) &&
    !location.search.split(`?q=`)[1] &&
    !location.href.match(`\\?\\#`) &&
    location.href.split(`?`)[1]
  ) {
    let i;
    let id;
    var uri = location.href.split(`?`)[1];
    if (uri.match(/^[a-zA-Z0-9\-]+$/g)) {
      id = uri.slice(0, 2);
      if (hash == true) post = uri.slice(2, 64);
      else if (hash == false) post = parseInt(uri.slice(2), 36);
      setTimeout(function () {
        if (menu.findIndex((item) => item.hash === id))
          i = menu.findIndex((item) => item.hash === id);
        if (i !== -1)
          xmlRequestParsing(null, null, i);
        else if (i === -1)
          filterInputResponse(location.href.split(`?`)[1]);
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        guideOnScreen = onScreen;
        onScreen = false;
        sideBarDisplay(onScreen);
      }, 250);
    }
  } else if (location.search.split(`?q=`)[1]) {
    var uri = location.search.split(`?q=`)[1];
    var uri = uri.toLowerCase().space();
    _toggle.style.display = `none`;
    guideOnScreen = true;
    setTimeout(function () {
      if (showSplash == true) _check.style.visibility = `visible`;
      topMenuBarDisplay(topBar);
      filterInputResponse(uri);
    }, 250);
  } else if (isNaN(parseFloat(post)) && !isFinite(post)) {
    setTimeout(function () {
      _visit.style.display = `flex`;
      guideOnScreen = true;
      _guest.focus();
    }, 250);
  }
  if (
    isNaN(parseFloat(post)) && !isFinite(post) &&
    _main.clientWidth >= 426
  ) {
    sideBarDisplay(onScreen);
  } else if (!isNaN(parseFloat(post)) && isFinite(post) && showSplash == true)
    _check.style.visibility = `visible`;

  if (_main.clientWidth <= 425) {
    setTimeout(function () {
      guideOnScreen = onScreen;
      onScreen = false;
      sideBarDisplay(onScreen);
      expand = false;
      Blocks = true;
      List = false;
    }, 250)
  }
}, 100)
