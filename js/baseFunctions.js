var notifyOption = function (displayContent) {
  let notification = document.querySelector("#sidebar .notify");
  if (onScreen == true) var pos = "absolute";
  else var pos = "fixed";
  notification.innerHTML = displayContent;
  notification.style.display = "block";
  notification.style.position = pos;
  setTimeout(function () {
    let Elem = notification;
    Elem.animate(
      {
        right: ["0px", "280px"],
      },
      {
        duration: 750, // number in ms [this would be equiv of your speed].
        easing: "linear",
        iterations: 1, // infinity or a number.
        // fill: ''
      }
    );
  }, 750);

  setTimeout(function () {
    notification.style.display = "none";
  }, 1500);
};

var displayExpand = function (toggleOption) {
  if (document.body.contains(document.getElementById("feed")))
    document.getElementById("feed").remove();
  let group = document.getElementById("group");
  if (toggleOption == true) {
    groupType = "list";
    if (document.body.contains(document.getElementById("group"))) {
      group.style.display = "none";
      group
        .querySelectorAll(".hash")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".media")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".description")
        .forEach((a) => (a.style.display = "block"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => a.classList.add("expand"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.alignItems = "center"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.flexWrap = "nowrap"));
      document
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.backgroundColor = "var(--bg-color-primary)"));
      if (document.body.contains(document.getElementById(".air")))
        document.querySelector(".air").style.display = "block";
      if (document.body.contains(document.getElementById(".result`")))
        document.querySelector(".result").style.display = "block";
    }
  } else if (toggleOption == false) {
    groupType = "blocks";
    if (document.body.contains(document.getElementById("group"))) {
      group.style.display = "none";
      group
        .querySelectorAll(".hash")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".media")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".description")
        .forEach((a) => (a.style.display = "none"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => a.classList.remove("expand"));
      group
        .querySelectorAll(".populate")
        .forEach((a) => (a.style.flexWrap = "wrap"));
      document
        .querySelectorAll(".populate")
        .forEach(
          (a) => (a.style.backgroundColor = "var(--bg-color-secondary)")
        );
      if (document.body.contains(document.querySelector(".air")))
        document.querySelector(".air").style.display = "inline-flex";
      if (document.body.contains(document.getElementById(".result")))
        document.querySelector(".result").style.display = "inline-flex";
    }
  }
  unloading();
};

var sideBarDisplay = function (toggleOption) {
  let content = document.querySelector("#content");
  if (!document.body.contains(document.querySelector(".cat"))) {
    for (i = 0; i <= translations.length - 1; i++) {
      let cat = document.createElement("div");
      cat.classList.add("cat", translations[i]);
      cat.setAttribute("aria-item", translations[i]);
      cat.innerHTML = translations[i];
      content.append(cat);
      content.append(sideBarCategoryBuild(translations[i]));
    }
    content.append(sideBarThemeListing());
    let list = document.querySelector(".themes");
    for (i = 0; i <= themes.length - 1; i++) {
      let visual = document.createElement("div");
      visual.classList.add("theme", themes[i].class);
      visual.innerHTML = themes[i].name;
      list.append(visual);
      list.append(sideBarThemeBuild(themes[i].icon));
    }
    for (i = 0; i <= selections.length - 1; i++) {
      content.append(
        sideBarOptionBuild(selections[i].name, selections[i].class)
      );
      let fontawesome = document.createElement("div");
      fontawesome.classList.add("fa", selections[i].icon);
      content.append(fontawesome);
    }
    content.append(basicFormBuild());
  }
  if (toggleOption == true) {
    let Elem = document.querySelector("#sidebar");
    Elem.style.position = "fixed";
    Elem.animate(
      {
        width: ["0px", "240px"],
      },
      {
        duration: 300, // number in ms [this would be equiv of your speed].
        easing: "linear",
        iterations: 1, // infinity or a number.
        // fill: ''
      }
    );
    let Hide = document.querySelector("#hide");
    Hide.animate(
      {
        left: ["0px", "240px"],
      },
      {
        duration: 300, // number in ms [this would be equiv of your speed].
        easing: "linear",
        iterations: 1, // infinity or a number.
        // fill: ''
      }
    );
    document.querySelector("#hide").style.left = "240px";
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector("#content").style.display = "block";
    document.querySelector("#sidebar").style.left = "0px";
    if (_main.clientWidth >= 769) {
      _top.style.width = "calc(100% - 256px)";
      _main.style.width = "calc(100% - 240px)";
      _main.style.left = "240px";
      document.querySelector("#sidebar").style.left = "0";
    }
    setTimeout(function () {
      document
        .querySelectorAll("#dots .fill")
        .forEach((a) => (a.style.marginLeft = "150px"));
      document.querySelector(".sideFilter").style.display = "block";
      document.querySelector("#progressBar").style.left = "240px";
      document.querySelector("#basic").style.display = "block";
    }, 300);
  }
  if (toggleOption == false || onScreen == false) {
    document
      .querySelectorAll("#dots .fill")
      .forEach((a) => (a.style.marginLeft = "0"));
    _top.style.width = "calc(100% - 16px)";
    document.querySelector(".sideFilter").style.display = "none";
    document.querySelector("#sidebar").style.left = "-242px";
    document.querySelector("#progressBar").style.left = "0";
    _main.style.width = "100%";
    _main.style.left = "0";
  }
};

var topMenuBarDisplay = function (toggleOption) {
  if (document.body.contains(_top)) {
    let top = document.getElementById("top");
    if (toggleOption == true) top.style.display = "block";
    else if (toggleOption == false) top.style.display = "none";
  }
};

var quickFeedDisplay = function (toggleOption) {
  if (toggleOption == true) {
    _quick.classList.remove("invisible");
    _front.classList.add("toggleHidden");
    _front.classList.remove("toggle");
    _quick.classList.add("visible");
    if (document.body.contains(document.querySelector(".link"))) {
      document
        .querySelector(".link .fa-angle-up")
        .classList.remove("rotateReverse");
      document.querySelector(".link .fa-angle-up").classList.add("rotate");
      document.querySelector(".show").style.visibility = "hidden";
      setTimeout(function () {
        document.querySelector(".fa-angle-up").classList.add("rotate");
      }, 1000);
    }
  } else if (toggleOption == false) {
    _quick.classList.remove("visible");
    _quick.classList.add("invisible");
    _front.classList.remove("toggleHidden");
    _front.classList.add("toggle");
    if (document.body.contains(document.querySelector(".link"))) {
      document.querySelector(".fa-angle-up").classList.add("rotateReverse");
      document.querySelector(".fa-angle-up").classList.remove("rotate");
      document.querySelector(".show").style.visibility = "visible";
    }
  }
};

var guideDisplay = function (pubArray) {
  let guide = _guide;
  while (_guide.firstChild) _guide.removeChild(_guide.lastChild);
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _top.style.display = "hide";
  _guide.append(guideBuild(pubArray[0]));
  guideImageAttributes(pubArray[0].src);
  _guide.style.display = "flex";
};

var guideDisplayYoutube = function (pubArray) {
  var guide = _guide;
  while (_guide.firstChild) _guide.removeChild(_guide.lastChild);
  _guide.innerHTML = `
  <svg class='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
    <circle class='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
    <path class='checkmark__check' fill='none' d='M16 16 36 36 M36 16 16 36' />
  `;
  _top.style.display = "hide";
  _guide.append(guideBuildYoutube(pubArray[0]));
  _guide.style.display = "flex";
};

var contentStatusDisplay = function (
  menuIndex,
  recentPost,
  oldestPost,
  postsCount
) {
  if (document.body.contains(document.querySelector("#xml .status"))) {
    var status = document.querySelector("#xml .status");
    status.append(contentBuild(oldestPost, recentPost, postsCount, menuIndex));
  }
};

var quickFeedAsset = function (feedAssets) {
  let duplicate = [];
  if (feedAssets == 7)
    for (var i = 0; i <= translations.length - 1; i++) {
      _feed.append(translationBuild(translations[i]));
    }
  else
    for (var i = 1; i <= menu.length - 1; i++) {
      let randomMenuObject = menu.indexOf(
        menu[Math.floor(Math.random() * menu.length - 1)]
      );
      if (
        menu[randomMenuObject] &&
        !duplicate.includes(randomMenuObject) &&
        menu[randomMenuObject].media == true &&
        randomMenuObject != 0
      ) {
        duplicate.push(randomMenuObject);
        _feed.append(
          assetBuild(
            menu.indexOf(menu[randomMenuObject]),
            menu[randomMenuObject].image.image(),
            menu[randomMenuObject].id
          )
        );
        if (duplicate.length === feedAssets) return false;
      }
    }
};

var inputListingIndex = function (inputFilter, listingWrapper) {
  var suggest = [];
  var listing = document.querySelector(listingWrapper + " .listing");
  while (listing.lastChild) listing.removeChild(listing.lastChild);
  document.querySelector(listingWrapper).style.display = "block";
  if (inputFilter != "")
    for (var i = menu.length - 1; i >= 1; i--) {
      if (menu[i].description.toLowerCase().match(inputFilter)) {
        if (suggest.length >= suggestionBuffer) return false;
        listing.append(
          listingIndexBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].category,
            false,
            i
          )
        );
        suggest.push(i);
      }
      setTimeout(500);
    }
  for (i = 1; i <= menu.length - 1; i++) {
    let randomMenuObject = menu.indexOf(
      menu[Math.floor(Math.random() * menu.length - 1)]
    );
    if (
      menu.indexOf(menu[randomMenuObject]) &&
      menu[randomMenuObject].media == true &&
      !suggest.includes(randomMenuObject)
    )
      if (suggest.length >= suggestionBuffer) return false;
    listing.append(
      listingIndexBuild(
        menu[randomMenuObject].id.match(/[^\/]+$/g),
        menu.indexOf(menu[randomMenuObject]),
        menu[randomMenuObject].image.image(),
        menu[randomMenuObject].category,
        true,
        i
      )
    );
    suggest.push(randomMenuObject);
    setTimeout(500);
  }
};

var progressBackDrop = function (done, percent) {
  if (done == true) {
    _progress.style.transition = "width .15s ease-in-out";
    _progress.style.transitionDelay = "none";
    _progress.style.width = percent + "%";
    if (document.body.contains(document.getElementById("xml")))
      document.querySelector("#xml").style.display = "block";
    if (document.body.contains(document.getElementById("group")))
      document.querySelector("#group").style.display = "block";
    if (onlyImages == false) {
      if (document.body.contains(document.querySelector(".air")))
        _main.scrollTop = document.querySelector(
          ".air"
        ).clientHeight;
    } else if (onlyImages == true)
      if (document.body.contains(document.querySelector(".result")))
        _main.scrollTop = 0;
    if (document.body.contains(document.querySelector("#xml .channel")))
      if (reader == true && first == true) {
        if (
          _main.innerHeight >=
          document.querySelector("#xml .channel").innerHeight
        )
          if (httpRequest.status == 200) {
            first = false;
            xmlRequestParsing(null, null, anyRandomMenuObject());
          }
      }
    setTimeout(function () {
      _progress.style.transitionDelay = "none";
      _progress.style.transition = "none";
      _progress.style.width = "0%";
    }, 250);
  }
};

var populateCategoryGroup = function (translation) {
  if (!document.body.contains(document.querySelector("#group"))) groupBuild();
  let result = document.querySelector(".result");
  if (id && id != 0 && !location.href.match("\\?q=")) {
    if (menu[id].media == true)
      var media = "<div class='media' style='display:none'>Images</div>";
    else var media = "<div class='blank'></div>";
    result.append(
      categoryBuild(
        menu[id].id.match(/[^\/]+$/g),
        menu.indexOf(menu[id]),
        menu[id].image.image(),
        menu[id].hash,
        menu[id].description,
        media
      )
    );
  }
  for (let i = 1; i <= menu.length - 1; i++) {
    if (menu[i].media == true)
      var media = "<div class='media' style='display:none'>Images</div>";
    else var media = "<div class='blank'></div>";
    if (onlyImages == true) {
      if (
        id != menu.indexOf(menu[i]) &&
        translation == menu[i].category &&
        menu[i].media == true
      ) {
        result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    } else if (onlyImages == false) {
      if (translation == menu[i].category && id != menu.indexOf(menu[i])) {
        result.append(
          categoryBuild(
            menu[i].id.match(/[^\/]+$/g),
            menu.indexOf(menu[i]),
            menu[i].image.image(),
            menu[i].hash,
            menu[i].description,
            media
          )
        );
      }
    }
  }
  id = 0;
  if (onlyImages == false) reverseCategoryGroup(translation);
  else if (onlyImages == true) {
    unloading();
  }
  main.setAttribute("tabindex", -1);
  main.focus();
};

var reverseCategoryGroup = function (translation) {
  let group = document.querySelector("#group");
  let result = document.querySelector(".result");
  if (!document.body.contains(document.querySelector(".air"))) {
    let div = document.createElement("div");
    div.classList.add("air");
    group.prepend(div);
  } else {
    document.querySelector(".air").remove();
    let div = document.createElement("div");
    div.classList.add("air");
    group.prepend(div);
  }
  let air = document.querySelector(".air");
  for (let i = 1; i < menu.length - 1; i++) {
    if (category == menu[i].category) {
      if (menu[i].media == true)
        var media = "<div class='media' style='display:none'>Images</div>";
      else var media = "<div class='blank'></div>";
      air.append(
        categoryBuild(
          menu[i].id.match(/[^\/]+$/g),
          menu.indexOf(menu[i]),
          menu[i].image.image(),
          menu[i].hash,
          menu[i].description,
          media
        )
      );
    }
  }
  displayExpand(expand);
  unloading();
};

var filterInputResponse = function (
  initPassthrough,
  extendedextendedURI,
  filterURI,
  categoryBloat
) {
  var exact;
  var match;
  filter = [];
  _visit.style.display = "none";
  if (translations.includes(filterURI.toString().capitalize())) {
    populateCategoryGroup(filterURI.capitalize());
    category = filterURI.capitalize();
    unloading();
    return false;
  }
  if (filterURI) var filterURI = filterURI.toString().toLowerCase().space();
  if (extendedURI)
    var extendedURI = extendedURI.toString().toLowerCase().space();
  else var extendedURI = filterURI;
  for (let i = 1; i <= menu.length - 1; i++) {
    let menuObject = menu[i].id.space().toLowerCase();
    let translation = menu[i].category.space().toLowerCase();
    let description = menu[i].description.space().toLowerCase();
    if (menu[i].hash == filterURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject == filterURI || id == extendedURI) {
      filter.push(menu.indexOf(menu[i]));
      exact = i;
      match = i;
      break;
    } else if (menuObject.match(filterURI) || menuObject.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (description.match(filterURI) || description.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
    else if (translation.match(filterURI) || translation.match(extendedURI))
      filter.push(menu.indexOf(menu[i]));
  }
  if (!match) match = filter[0];
  if (filter.length == 0)
    xmlRequestParsing("search", filterURI.toLowerCase(), 0, null);
  if (initPassthrough == false) {
    if (!document.body.contains(document.querySelector("#group"))) groupBuild();
    for (i = 0; i <= filter.length - 1; i++) writeFilterResponse(filter[i]);
  } else if (initPassthrough == true) {
    if (isNumeric(exact)) xmlRequestParsing(null, null, exact);
    else if (isNumeric(match) && filter.length == 1)
      xmlRequestParsing(null, null, match);
    return false;
  }
  if (categoryBloat == true && isNumeric(match))
    populateCategoryGroup(menu[match].category);
};

var writeFilterResponse = function (menuObject) {
  let result = document.querySelector(".result");
  if (menu[menuObject].media == true)
    var media = "<div class='media' style='display:none'>Images</div>";
  else var media = "<div class='blank'></div>";
  result.append(
    categoryBuild(
      menu[menuObject].id.match(/[^\/]+$/g),
      menu.indexOf(menu[menuObject]),
      menu[menuObject].image.image(),
      menu[menuObject].hash,
      menu[menuObject].description,
      media
    )
  );
};

var guideImageAttributes = function (src) {
  let newImg = new Image();
  newImg.setAttribute("src", src);
  newImg.onload = function () {
    _guide.querySelector(".img").setAttribute("src", src);
    //_guide.querySelector(".sticky").style.display = "block";
    //_guide.querySelector(".checkmark").style.display = "block";
    if (_main.clientWidth <= 425) {
      _main.classList.add("guide");
      document.querySelector("#guide .sticky .header").style.position =
        "absolute";
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide.querySelector(".img").style.maxHeight = "50vh";
        _guide.querySelector(".img").style.maxWidth = "75vw";
        _guide.querySelector(".wrap").style.display = "block";
        _guide.querySelector(".wrap").style.height = "fit-content";
        _guide.querySelector(".pub").style.height = "fit-content";
        document.querySelector("#guide .wrap").style.maxWidth = "100vw";
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide.querySelector(".img").style.maxWidth = "70vw";
        _guide.querySelector(".img").style.maxHeight = "50vh";
        document.querySelector("#guide .wrap").style.maxWidth = "75vw";
      }
      document.querySelector("#guide .sticky .header").style.top =
        ~document.querySelector("#guide .img").style.height - "60";
    } else {
      _main.classList.add("guide");
      if (newImg.naturalWidth >= newImg.naturalHeight) {
        _guide.querySelector(".img").style.maxHeight = "80vh";
        _guide.querySelector(".img").style.maxWidth = "70vw";
      } else if (newImg.naturalHeight >= newImg.naturalWidth) {
        _guide.querySelector(".img").style.maxWidth = "40vw";
        _guide.querySelector(".img").style.maxHeight = "70vh";
      }
    }
    _guide.querySelector(".sticky").style.display = "block";
    _guide.style.display = "flex";
  };
};
