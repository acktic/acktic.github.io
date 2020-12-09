window.onload = function () {
  quickFeedDisplay(quickFeeds);
  if (sideBarCenter == false) _content.style.position = `relative`;
  else _content.style.position = `absolute`;
  if (_main.clientWidth <= 425 || quickFeedsTranslations == true)
    quickFeedAsset(7);
  else if (quickFeedsTranslations == false) quickFeedAsset(8);

  if (sideBarCenter == true)
    _sidebar.querySelector(`#content`).style.position = `absolute`;

  if (sideBarBackdrop == true)
    _sidebar.style.cssText = `backdrop-filter: blur(10px)`

  if (backgroundImage[0].element == `container`)
    _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
  else if (backgroundImage[0].element == `main`)
    _main.style.backgroundImage = `url(${backgroundImage[0].path})`;

  _container.style.backgroundPosition = `${backgroundImage[0].position}`;
  _main.style.backgroundPosition = `${backgroundImage[0].position}`;
  _container.style.backgroundSize = `${backgroundImage[0].size}`;
  _main.style.backgroundSize = `${backgroundImage[0].size}`;
  setTimeout(function () {
    if (expandBackground == true)
      document.querySelector(`.bg`).style.height = `${
        (background.length + 1) * 35
      }px`;
    if (expandSettings == true)
      document.querySelector(`.set`).style.height = `${
        (settings.length + 1) * 35
      }px`;
    if (expandVisual == true)
      document.querySelector(`.themes`).style.height = `${
        (themes.length + 1) * 35
      }px`;
    if (expandFilter == true)
      document.querySelector(`.exclude`).style.height = `${
        exclude.length * 34.25 + 75
      }px`;
      _main.addEventListener("wheel", function(evt) {
        if (
          sideBarMousewheel == true
        ) {
          if (Math.sign(evt.deltaY) == 1 && onScreen == true) {
            onScreen = false;
            sideBarDisplay(onScreen);
          } else if (Math.sign(evt.deltaY) == -1 && onScreen == false) {
            onScreen = true;
            sideBarDisplay(onScreen);
          }
        }
      });

  }, 250)

  _container.style.display = `block`;

};

document.addEventListener('touchstart', (evt) => {
    touchstartX = evt.changedTouches[0].screenX;
  },
  { passive: true }
);

document.addEventListener('touchend', (evt) => {
    touchendX = evt.changedTouches[0].screenX;
    handleSwipe();
  },
  { passive: true }
);

document.addEventListener('scroll', (evt) => {
    if (evt.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 350 &&
        Reader == true &&
        stop == false
      ) {
        first = false;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
  },
  true
);

document.addEventListener('ontouchmove', (evt) => {
    if (evt.target.id == `main`) {
      if (
        _main.scrollHeight - _main.scrollTop - _main.clientHeight <= 350 &&
        Reader == true &&
        stop == false
      ) {
        first = false;
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
  },
  true
);
document.addEventListener('click', (evt) => {
    if (
      evt.target.classList.contains(`construct`) ||
      evt.target.classList.contains(`picture`) ||
      evt.target.classList.contains(`header`) ||
      evt.target.classList.contains(`result`) ||
      evt.target.classList.contains(`post`) ||
      evt.target.classList.contains(`site`) ||
      evt.target.classList.contains(`cat`) ||
      evt.target.classList.contains(`sel`) ||
      evt.target.id == `container` ||
      evt.target.id == `search` ||
      evt.target.id == `option` ||
      evt.target.id == `visit` ||
      evt.target.id == `group` ||
      evt.target.id == `main` ||
      evt.target.id == `hide` ||
      evt.target.id == `page` ||
      evt.target.id == `xml` ||
      evt.target.id == `air` ||
      evt.target.id == `top` ||
      evt.target.id == `arm`
    ) {
      if (_match.style.display === `block`) {
        document.querySelector(`#input .icon`).classList.remove(`slide`);
        _view.setAttribute(`placeholder`, ``);
        _view.style.textAlign = `center`;
        _view.style.paddingLeft = `10px`;
        _match.style.display = `none`;
        _view.value = `Search`;
        _view.blur();
        return false;
      } else if (_first.style.display === `block`) {
        if (quickFeeds == false) _show.style.visibility = `visible`;
        _label.style.visibility = `visible`;
        _quick.style.visibility = `visible`;
        _link.style.visibility = `visible`;
        _just.style.visibility = `visible`;
        _first.style.display = `none`;
        _guest.blur();
        return false;
      } else if (
        !document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`))
      ) {
        document
          .querySelectorAll(`.attribute`)
          .forEach((a) => (a.style.display = `none`));
        var attribute = document.querySelectorAll(`.fa-ellipsis-v`);
        for (i = 0; i < attribute.length; i++) {
          attribute[i].classList.remove(`fa-ellipsis-v`);
          attribute[i].classList.add(`fa-ellipsis-h`);
        }
      }
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`fa-long-arrow-alt-left`)
    ) {
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove();
      _visit.style.display = `flex`;
      _top.style.display = `none`;
    }
    if (
      evt.target.classList.contains(`joi`)
    ) {
      id = 0;
      first = true;
      randomDuplicate = [];
      _visit.style.display = `none`;
      Reader = Reader != true;
      if (Reader == false) {
        sideBarStar(document.querySelector(`.Reader`), Reader);
        justRead = false;
        first = true;
        id = 0;
        xmlChannelFooter();
      } else if (Reader == true) {
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        if (showSplash == true) _check.style.display = `block`;
        sideBarStar(document.querySelector(`.Reader`), Reader);
        xmlRequestParsing(null, null, anyRandomMenuObject());
      }
    }
    if (
      evt.target.classList.contains(`fa-sun`) ||
      evt.target.id == `toggle`
    ) {
      var iteration = themes.findIndex((item) => item.obFn === set);
      if (iteration == themes.length - 1) iteration = -1;
      iteration = iteration + 1;
      set = themes[iteration].obFn;
      console.log(set);
      window[set]();
    }
    if (evt.target.id == `just`) {
      Reader = true;
      justRead = true;
      onlyImages = true;
      randomDuplicate = [];
      if (showSplash == true) _check.style.display = `block`;
      document
        .querySelector(`.Reader`)
        .nextElementSibling.classList.remove(`fa-minus`);
      document
        .querySelector(`.Reader`)
        .nextElementSibling.classList.add(`fa-star`);
      document
        .querySelector(`.onlyImages`)
        .nextElementSibling.classList.remove(`fa-minus`);
      document
        .querySelector(`.onlyImages`)
        .nextElementSibling.classList.add(`fa-star`);
      xmlRequestParsing(null, null, anyRandomMenuObject());
    }
    if (
      evt.target.classList.contains(`exit`) ||
      evt.target.classList.contains(`ext`)
    )
      evt.target.closest(`.courtesy`).getAttribute(`ext`).blank();
    if (evt.target.id == `check`) repository.blank();
    if (
      evt.target.classList.contains(`fa-angle-up`) ||
      evt.target.id == `link` ||
      evt.target.id == `show`
    ) {
      quickFeeds = quickFeeds != true;
      quickFeedDisplay(quickFeeds);
    }
    if (evt.target.id == `home`) {
      id = 0;
      document.title = category.capitalize();
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove()
      setTimeout(function () {
        populateCategoryGroup(category);
        displayDescription(showDescription);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }, 25)
    }
    if (evt.target.classList.contains(`construct`)) {
      let url = menu[id].uri.match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.([a-z]{2,6}){1}/g
      );
      url.toString().blank();
    }
    if (evt.target.classList.contains(`fa-expand-alt`)) {
      expand = expand != true;
      if (document.body.contains(document.querySelector(`#group`)))
        document.querySelector(`#group`).remove()
      if (expand == false) {
        sideBarStar(document.querySelector(`.Blocks`), true);
        sideBarStar(document.querySelector(`.List`), false);
      } else if (expand == true) {
        sideBarStar(document.querySelector(`.Blocks`), false);
        sideBarStar(document.querySelector(`.List`), true);
      }
      setTimeout(function () {
        populateCategoryGroup(category);
        displayDescription(showDescription);
        topMenuBarDisplay(topBar);
        displayExpand(expand);
        unloading();
      }, 25)
    }
    if (evt.target.classList.contains(`select`)) {
      let setPause;
      if (showFireworks == true) {
        explode(event);
        setPause = 450;
      }
      if (showRipple == true) {
        rippleBuild(evt, evt.target.closest(`.populate`));
        setPause = 500;
      } else setPause = 0;
      setTimeout(function () {
        if (_match.style.display === `block`) {
          _match.style.display = `none`;
          _view.blur();
          return false;
        } else if (_first.style.display === `block`) {
          _first.style.display = `none`;
          _guest.blur();
          return false;
        }
        xmlRequestParsing(
          null,
          null,
          evt.target.closest(`.populate`).getAttribute(`aria-item`)
        );
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
      }, setPause);
    }
    if (evt.target.classList.contains(`translation`)) {
      id = 0;
      first = true;
      category = evt.target.closest(`.translation`).getAttribute(`aria-item`);
      if (Reader == true) {
        randomDuplicate = [];
        xmlRequestParsing(null, null, anyRandomMenuObject());
      } else {
        let setPause;
        let target = event;
        if (showFireworks == true) {
          setTimeout(function() {
            explode(target);
          }, 25)
          setPause = 25;
        }
        if (showRipple == true) {
          rippleBuild(evt, evt.target.closest(`.translation`));
          setPause = 250;
        }
        if (!setPause) setPause = 0;
        if (document.body.contains(document.querySelector(`#xml`)))
          document.querySelector(`#xml`).remove();
        if (document.body.contains(document.querySelector(`#group`)))
          document.querySelector(`#group`).remove();
        setTimeout(function () {
          populateCategoryGroup(
            evt.target.closest(`.translation`).getAttribute(`aria-item`)
          );
          topMenuBarDisplay(topBar);
          displayExpand(expand);
          _toggle.style.display = `none`;
          _visit.style.display = `none`;
        }, setPause);
      }
    }
    if (
      evt.target.classList.contains(`entity`) ||
      evt.target.classList.contains(`asset`) ||
      evt.target.classList.contains(`query`)
    ) {
      xmlRequestParsing(
        null,
        null,
        evt.target.closest(`.asset`).getAttribute(`aria-item`)
      );
      topMenuBarDisplay(topBar);
      _toggle.style.display = `none`;
      _visit.style.display = `none`;
    }
    if (
      evt.target.classList.contains(`checkmark__circle`) ||
      evt.target.classList.contains(`checkmark__check`) ||
      evt.target.classList.contains(`checkmark`) ||
      evt.target.id == `guide`
    ) {
      _main.classList.remove(`guide`);
        while (_guide.lastChild) _guide.removeChild(_guide.lastChild);
      _guide.style.display = `none`;
      sideBarFirst = true;
      onScreen = guideOnScreen;
      if (_main.clientWidth >= 426) sideBarDisplay(onScreen);
      _check.style.display = `none`;
      topMenuBarDisplay(topBar);
      local = null;
      post = null;
    }
    if (evt.target.classList.contains(`bottom`)) {
      evt.target.closest(`#xml`).remove();
      if (id === 0) populateCategoryGroup(category);
      else {
        if (location.href.match(`\\?q=`)) {
          var uri = location.search.split(`?q=`)[1].match(/[^&]+/g);
          let description = menu.filter(function (item) {
            return item.description.space().toLowerCase()
              .match(uri.toString().toLowerCase().space());
          })
          groupBuild();
          for (i = 0; i <= description.length - 1; i++)
            writeFilterResponse(menu.indexOf(description[i]));
          displayDescription(showDescription);
          displayExpand(expand);
          populateCategoryGroup(category)
          unloading();
        } else populateCategoryGroup(category);
        document.title = category;
        displayExpand(expand);
      }
    }
    if (evt.target.classList.contains(`more`)) {
      evt.target.parentNode.innerHTML = evt.target.parentNode.getAttribute(
        `text`
      );
      evt.target.style.display = `none`;
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`classic`) ||
      evt.target.classList.contains(`item`) ||
      evt.target.classList.contains(`wrap`) ||
      evt.target.classList.contains(`pub`) ||
      evt.target.classList.contains(`ago`)
    ) {
      evt.target.closest(`.item`).getAttribute(`ext`).blank();
    }
    if (
      evt.target.classList.contains(`combine`) ||
      evt.target.classList.contains(`suggest`) ||
      evt.target.classList.contains(`circle`) ||
      evt.target.classList.contains(`random`) ||
      evt.target.classList.contains(`bold`)
    ) {
      if (document.body.contains(document.querySelector(`#xml`)))
        document.querySelector(`#xml`).remove();
      xmlRequestParsing(
        null,
        null,
        evt.target.closest(`.suggest`).getAttribute(`aria-item`)
      );
    }
    if (evt.target.classList.contains(`asset`))
      xmlRequestParsing(null, null, evt.target.getAttribute(`aria-item`));
    if (
      evt.target.classList.contains(`flip-front`) ||
      evt.target.classList.contains(`flip-back`) ||
      evt.target.classList.contains(`front`) ||
      evt.target.classList.contains(`next`) ||
      evt.target.classList.contains(`back`)
    ) {
      evt.target.closest(`#xml`).remove();
      xmlRequestParsing(
        null,
        null,
        evt.target.closest(`.btn`).getAttribute(`aria-item`)
      );
    }
    if (evt.target.classList.contains(`option`)) {
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          let i = exclude.indexOf(evt.target.innerHTML);
          exclude.splice(i, 1);
          evt.target.remove();
          if (exclude.length == 0)
            document.querySelector(`.exclude`).style.height = `70px`;
          else
            document.querySelector(`.exclude`).style.height = `${
              exclude.length * 34.25 + 65
            }px`;
          tap = 0;
        }
      }
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`filterBlur`) ||
      evt.target.classList.contains(`img`)
    ) {
      if (tap == 0) {
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`) &&
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            ) {
              count = [];
              let sticky = [];
              sticky.push({
                courtesy: evt.target.closest(`.item`).querySelector(`.header`)
                  .innerHTML,
                element: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
                image: menu[
                  evt.target.closest(`.item`).getAttribute(`aria-object`)
                ].image.image(),
                title: evt.target
                  .closest(`.item`)
                  .querySelector(`.pub`)
                  .getAttribute(`text`),
                share: evt.target.closest(`.item`).querySelector(`.share`)
                  .value,
                dst: evt.target
                  .closest(`.item`)
                  .querySelector(`.ago:last-child`).innerHTML,
                src: evt.target.closest(`.item`).querySelector(`.source`)
                  .value,
                externalURI: evt.target.closest(`.item`).getAttribute(`ext`),
                menuObject: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-object`),
                pubIndex: evt.target
                  .closest(`.item`)
                  .getAttribute(`aria-item`),
              });
              if (safeSearchIDs.includes(menu[id].id))
                if (showSplash == true) _check.style.display = `block`;
              guideDisplay(sticky);
            } else if (
              evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`guide`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (
              !evt.target
                .closest(`.item`)
                .querySelector(`.img`)
                .classList.contains(`default`)
            )
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
            else if (category != `Social`)
              evt.target.closest(`.item`).getAttribute(`ext`).blank();
          tap = 0;
        }, 350);
      } else {
        if (new Date().getTime() - tap < 350) {
          if (evt.target.classList.contains(`leave`)) {
            evt.target.closest(`.item`).getAttribute(`ext`).blank();
            return false;
          }
          evt.target
            .closest(`.image`)
            .querySelector(
              `.fa-heart`
            ).style.animation = `scale .7s ease-in-out .1s both`;
          evt.target
            .closest(`.image`)
            .querySelector(`.fa-heart`).style.display = `block`;
          evt.target
            .closest(`.image`)
            .querySelector(`.fa-heart`).style.zIndex = `12`;
          setTimeout(function () {
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.animation = `none`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.display = `none`;
            evt.target
              .closest(`.image`)
              .querySelector(`.fa-heart`).style.zIndex = `0`;
          }, 1500);
          tap = 0;
        }
      }
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`fa-ellipsis-h`) ||
      evt.target.classList.contains(`fa-ellipsis-v`) ||
      evt.target.classList.contains(`copy`)
    ) {
      if (evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-v`)) {
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.add(`fa-ellipsis-h`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.remove(`fa-ellipsis-v`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `none`;
      } else if (
        evt.target.closest(`.copy`).querySelector(`.fa-ellipsis-h`)
      ) {
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-h`)
          .classList.add(`fa-ellipsis-v`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.fa-ellipsis-v`)
          .classList.remove(`fa-ellipsis-h`);
        evt.target
          .closest(`.copy`)
          .querySelector(`.attribute`).style.display = `block`;
      }
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`fa-at`) ||
      evt.target.classList.contains(`site`)
    ) {
      evt.target.closest(`.item`).querySelector(`.url`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`fa-share`) ||
      evt.target.classList.contains(`post`)
    ) {
      evt.target.closest(`.item`).querySelector(`.share`).select();
      document.execCommand(`copy`);
      evt.stopPropagation();
    }
    if (
      evt.target.classList.contains(`fa-camera`) ||
      evt.target.classList.contains(`picture`)
    ) {
      evt.target.closest(`.item`).querySelector(`.source`).select();
      document.execCommand(`copy`);
    }
    if (
      evt.target.classList.contains(`fa-plus`) ||
      evt.target.classList.contains(`right`)
    ) {
      quickFeedAsset(6);
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos + _feed.clientWidth;
      if (_feed.scrollLeft >= 0)
        document.querySelector(`.left`).style.display = `block`;
    }
    if (
      evt.target.classList.contains(`fa-minus`) ||
      evt.target.classList.contains(`left`)
    ) {
      let leftPos = _feed.scrollLeft;
      _feed.scrollLeft = leftPos - _feed.clientWidth;
      if (_feed.scrollLeft - _feed.clientWidth <= 0)
        document.querySelector(`.left`).style.display = `none`;
    }
    evt.preventDefault();
  },
  false
);
