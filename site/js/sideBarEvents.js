setTimeout(function () {
    _guide.addEventListener('touchstart', (evt) => {
        touchstartX = evt.changedTouches[0].screenX
        touchstartY = evt.changedTouches[0].screenY;
      },
      {
        passive: true
      }
    );

    _guide.addEventListener('touchend', (evt) => {
        touchendX = evt.changedTouches[0].screenX;
        touchendY = evt.changedTouches[0].screenY;
        handleGuide();
      },
      {
        passive: true
      }
    );
    if (
      sideBarMouse &&
      _main.clientWidth >= 769
    ) {
      _sidebar.addEventListener('mousemove', (evt) => {
          onScreen = true;
        },
        {
          passive: true
        }
      );
      _guide.addEventListener('mousemove', (evt) => {
          guideOnScreen = onScreen;
          onScreen = false;
          setTimeout(function() {
            sideBarDisplay(onScreen);
          }, 1250)
        },
        {
          passive: true
        }
      );
      _main.addEventListener('mousemove', (evt) => {
          if (
            event.pageX <= 100 &&
            !onScreen
          ) {
            onScreen = true;
            _sb.style.display = `none`;
            _min.style.display = `block`;
            setTimeout(function () {
              sideBarDisplay(onScreen);
            }, 300)
          }
          if (
            event.pageX >= 180 &&
            !sideBarLock &&
            onScreen
          ){
            onScreen = false;
            setTimeout(function() {
              sideBarDisplay(onScreen);
            }, 750)
          }
        },
        {
          passive: true
        }
      );
    }
  }, 250)

  if (
    sideBarMousewheel
  ) {
    _main.addEventListener("wheel", function(evt) {
      if (
        onScreen == true &&
        _main.clientWidth >= 769 &&
        Math.sign(evt.deltaY) == 1 &&
        sideBarLock == false
      ) {
        onScreen = false;
        sideBarDisplay(onScreen);
      } else if (
        onScreen == false &&
        _main.clientWidth >= 769 &&
        Math.sign(evt.deltaY) == -1
      ) {
        setTimeout(function() {
          onScreen = true;
          sideBarDisplay(onScreen);
        }, 1250)
      }
    {
      passive: true
    }
  });
}

document.addEventListener(
  'click', (evt) => {
    if (
      event.target.classList.contains(
        `hide`
      )
    ) {
      !onScreen;
      sideBarDisplay(onScreen);
      if (_main.clientWidth <= 768) _sb.style.display = `block`;
      if (_main.clientWidth >= 768) _bar.style.display = `none`;
    }
    else if (
      event.target.classList.contains(
        `feed`
      )
    ) {
      if (event.target.getAttribute(`aria-item`) === -1)
        filterInputResponse(event.target.innerHTML)
      else xmlRequestParsing(event.target.getAttribute(`aria-item`))
      _toggle.style.display = `none`;
    }
    else if (
      event.target.classList.contains(
        `excludeInput`
      )
    ) {
      event.target.value = ``;
    }
    else if (
      event.target.classList.contains(
        `urlInput`
      )
    ) {
      event.target.select();
    }
    else if (
      event.target.classList.contains(
        `resetBackground`
      )
    ) {
      if (backgroundImage[0].element == `container`) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`;
        _main.style.backgroundImage = `url()`;
      } else if (backgroundImage[0].element == `main`) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`;
        _container.style.backgroundImage = `url()`;
      }
    }
    else if (
      event.target.classList.contains(
        `setBackground`
      )
    ) {
      let input = document.createElement(`input`);
      input.type = `file`;
      input.setAttribute(`accept`, `image/*`);
      input.onchange = (e) => {
        // getting a hold of the file reference
        var file = e.target.files[0];

        // setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url

        // here we tell the reader what to do when it`s done reading...
        reader.onload = (readerEvent) => {
          var content = readerEvent.target.result; // this is the content!
          if (
            typeof backgroundImage[0].path == `string` &&
            backgroundImage[0].element == `container` &&
            Array.isArray(backgroundImage)
          ) {
            _container.style.backgroundImage = `url(${content})`;
            _main.style.backgroundImage = `url()`;
            backgroundImage[0].path = content
          } else if (
            Array.isArray(backgroundImage) &&
            typeof backgroundImage[0].path == "string" &&
            backgroundImage[0].element == `main`
          ) {
            _main.style.backgroundImage = `url(${content})`;
            _container.style.backgroundImage = `url()`;
            backgroundImage[0].path = content
          }
        };
      };
      input.click();
    }
    else if (
      event.target.classList.contains(
        `saveBackground`
      ) &&
      _sidebar
        .querySelector(`.urlInput`)
        .value.match(
          /\b(https?:\/\/\S*?\.(?:png|jpe?g|gif|webp))/g
        )
    ) {
      var xhr = new XMLHttpRequest();
      var url = document.querySelector(`.urlInput`).value;
      if (showSplash == true) _check.style.display = `block`;

      xhr.responseType = `arraybuffer`;
      xhr.open(`GET`, cors + url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == xhr.DONE) {
          var file = new Blob([xhr.response], { type: `image` });
          saveAs(
            file,
            _sidebar
              .querySelector(`.urlInput`)
              .value.match(
                /\b(\/.+\.(?:png|jpe?g|gif|webp))/g
              )
          );
          if (showSplash == true) _check.style.display = `none`;
        }
      };

      xhr.send();
    }
    else if (
      event.target.classList.contains(
        `cropImages`
      )
    ) {
      cropImages = cropImages != true;
      if (cropImages == true) {
        _main
          .querySelectorAll(`.img`).forEach(
            (a) => a.closest(`.image`).style.height = `270px`
          );
      } else if (cropImages == false) {
        _main
          .querySelectorAll(`.image`).forEach(
            (a) => a.style.height = `auto`
          );
      }
      if (flexBox == true) displayFlex(flexBox);
      sideBarStar(event.target, cropImages);
    }
    else if (
      event.target.classList.contains(
        `sideBarBackdrop`
      )
    ) {
      sideBarBackdrop = sideBarBackdrop != true;
      if (sideBarBackdrop == true) {
        _sidebar.classList.add(`blur`);
        _sidebar.style.backgroundColor = `transparent`;
      } else if (sideBarBackdrop == false) {
        _sidebar.classList.remove(`blur`);
        _sidebar.style.backgroundColor = `var(--color-secondary)`;
      }
      sideBarStar(event.target, sideBarBackdrop);
    }
    else if (
      event.target.classList.contains(
        `containerBackground`
      )
    ) {
      if (
        _container.style.backgroundImage != ``
      ) {
        _main.style.backgroundImage = `url(${backgroundImage[0].path})`
        _container.style.backgroundImage = ``;
      } else if (
        _main.style.backgroundImage != ``
      ) {
        _container.style.backgroundImage = `url(${backgroundImage[0].path})`
        _main.style.backgroundImage = ``;
      }
    }
    else if (
      event.target.classList.contains(
        `coverBackground`
      )
    ) {
      if (
        _container.style.backgroundSize == `cover` ||
        _main.style.backgroundSize == `cover` ||
        _container.style.backgroundSize == `auto 100%` ||
        _main.style.backgroundSize == `auto 100%`
      ) {
        _container.style.backgroundSize = `initial`;
        _main.style.backgroundSize = `initial`;
      } else {
        _container.style.backgroundSize = `cover`;
        _main.style.backgroundSize = `cover`;
      }
    }
    else if (
      event.target.classList.contains(
        `fitBackground`
      )
    ) {
      if (
        _container.style.backgroundSize == `cover` ||
        _main.style.backgroundSize == `cover`
      ) {
        _container.style.backgroundSize = `contain`;
        _main.style.backgroundSize = `contain`;
      } else if (
        _container.style.backgroundSize == `contain` ||
        _main.style.backgroundSize == `contain`
      ) {
        _container.style.backgroundSize = `cover`;
        _main.style.backgroundSize = `cover`;
      }
    }
    if (
      event.target.classList.contains(
        `removeBackground`
      )
    ) {
      _container.style.backgroundImage = `none`;
      _main.style.backgroundImage = `none`;
    }
    else if (
      event.target.classList.contains(
        `cat`
      )
    ) {
      first = true;
      stageGroup();
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
        onScreen = onScreen != true;
        sideBarDisplay(onScreen);
      category = event.target.getAttribute(`aria-item`);
      if (Reader) xmlRequestParsing(anyRandomMenuObject());
      else {
        _toggle.style.display = `none`;
        _visit.style.display = `none`;
        location.pathname.state();
        populateCategoryGroup(
          event.target.getAttribute(`aria-item`)
        );
        topMenuBarDisplay(topBar);
        displayExpand(expand);
      }
    }
    else if (
      event.target.classList.contains(
        `fa-unlock`
      ) ||
      event.target.classList.contains(
        `fa-lock`
      )
    ) {
      sideBarLock = sideBarLock != true
      if (sideBarLock) {
        event.target.classList.remove(`fa-unlock`);
        event.target.classList.add(`fa-lock`);
      } else if (sideBarLock == false) {
        event.target.classList.remove(`fa-lock`);
        event.target.classList.add(`fa-unlock`);
      }
    }
    else if (
      event.target.classList.contains(
        `parse`
      )
    ) {
      expandFilter = expandFilter != true
      if (!expandFilter) {
        _sidebar.querySelector(`.exclude`).style.height = `31px`;
      } else if (expandFilter == true) {
        if (exclude.length == 0)
          document.querySelector(`.exclude`).style.height = `75px`;
        else {
          _sidebar.querySelector(`.exclude`).style.height = `${
            exclude.length * 34 + 80}px`;
        }
      }
    }
    else if (
      event.target.classList.contains(
        `favorite`
      )
    ) {
      if (location.href.split(`?`)[0]) location.href.split(`?`)[0].state();
      expandFavorites = expandFavorites != true
      if (!expandFavorites) {
        _sidebar.querySelector(`.fav`).style.height = `31px`;
      } else if (expandFavorites == true) {
        _sidebar.querySelector(`.fav`).style.height =
          `${(favorites.length + 1) * 36}px`;
      }
    }
    else if (
      event.target.classList.contains(
        `border`
      )
    ) {
      expandVisual = expandVisual != true
      if (!expandVisual) {
        _sidebar.querySelector(`.themes`).style.height = `31px`;
      } else if (expandVisual == true) {
        _sidebar.querySelector(`.themes`).style.height =
          `${(themes.length + 1) * 36}px`;
      }
    }
    else if (
      event.target.classList.contains(
        `adjust`
      )
    ) {
      expandBackground = expandBackground != true
      if (!expandBackground) {
        _sidebar.querySelector(`.bg`).style.height = `31px`;
      } else if (expandBackground == true) {
        _sidebar.querySelector(`.bg`).style.height =
          `${(background.length + 1) * 35 + 35}px`;
      }
    }
    else if (
      event.target.classList.contains(
        `choose`
      )
    ) {
      expandSettings = expandSettings != true
      if (!expandSettings) {
        _sidebar.querySelector(`.set`).style.height = `31px`;
      } else if (expandSettings == true) {
        _sidebar.querySelector(`.set`).style.height =
          `${(settings.length) * 36}px`;
      }
    }
    else if (
      event.target.classList.contains(
        `List`
      )
    ) {
      stageGroup();
      expand = true;
      groupType = `list`;
      sideBarStar(_sidebar.querySelector(`.Blocks`), false);
      populateCategoryGroup(category);
      sideBarStar(event.target, List);
      topMenuBarDisplay(topBar);
    }
    else if (
      event.target.classList.contains(
        `Blocks`
      )
    ) {
      stageGroup();
      expand = false;
      groupType = `blocks`;
      sideBarStar(_sidebar.querySelector(`.List`), false);
      sideBarStar(event.target, true);
      populateCategoryGroup(category);
      topMenuBarDisplay(topBar);
    }
    else if (
      event.target.classList.contains(
        `Dots`
      )
    ) {
      sideBarStar(_sidebar.querySelector(`.Percent`), false);
      sideBarStar(event.target, true);
      loading = `dots`;
    }
    else if (
      event.target.classList.contains(
        `loaderfalse`
      )
    ) {
      imageLoader = false;
      _main
        .querySelectorAll(`.bars`)
        .forEach(
          (a) => a.style.display = `none`
        );
      _main
        .querySelectorAll(`.animation`)
        .forEach(
          (a) => a.style.display = `none`
        );
      _main
        .querySelectorAll(`.loader`)
        .forEach(
          (a) => a.style.display = `none`
        );
      sideBarStar(event.target, true);
      sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
      sideBarStar(_sidebar.querySelector(`.circleloader`), false);
      sideBarStar(_sidebar.querySelector(`.ringloader`), false);
    }
    else if (
      event.target.classList.contains(
        `verticalbars`
      )
    ) {
      imageLoader = `v-bars`;
      _main
        .querySelectorAll(`.bars`)
        .forEach(
          (a) => a.style.display = `block`
        );
      _main
        .querySelectorAll(`.animation`)
        .forEach(
          (a) => a.style.display = `none`
        );
      _main
        .querySelectorAll(`.loader`)
        .forEach(
          (a) => a.style.display = `none`
        );
      sideBarStar(_sidebar.querySelector(`.circleloader`), false);
      sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
      sideBarStar(_sidebar.querySelector(`.ringloader`), false);
      sideBarStar(event.target, true);
    }
    else if (
      event.target.classList.contains(
        `circleloader`
      )
    ) {
      imageLoader = `double-circle`;
      _main
        .querySelectorAll(`.loader`)
        .forEach(
          (a) => a.style.display = `block`
        );
      _main
        .querySelectorAll(`.bars`)
        .forEach(
          (a) => a.style.display = `none`
        );
      _main
        .querySelectorAll(`.animation`)
        .forEach(
          (a) => a.style.display = `none`
        );
      sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
      sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
      sideBarStar(_sidebar.querySelector(`.ringloader`), false);
      sideBarStar(event.target, true);
    }
    else if (
      event.target.classList.contains(
        `ringloader`
      )
    ) {
      imageLoader = `ring-circle`;
      _main
        .querySelectorAll(`.animation`)
        .forEach(
          (a) => a.style.display = `block`
        );
      _main
        .querySelectorAll(`.bars`)
        .forEach(
          (a) => a.style.display = `none`
        );
      _main
        .querySelectorAll(`.loader`)
        .forEach(
          (a) => a.style.display = `none`
        );
      sideBarStar(_sidebar.querySelector(`.verticalbars`), false);
      sideBarStar(_sidebar.querySelector(`.circleloader`), false);
      sideBarStar(_sidebar.querySelector(`.loaderfalse`), false);
      sideBarStar(event.target, true);
    }
    else if (
      event.target.classList.contains(
        `Percent`
      )
    ) {
      loading = `percent`;
      sideBarStar(event.target, _sidebar.querySelector(`.Percent`));
      sideBarStar(document.querySelector(`.Dots`), false);
    }
    else if (
      event.target.classList.contains(
        `fa-user-cog`
      )
  ) {
      safeSearch = safeSearch != true;
      if (safeSearch)
        notifyOption(`Safe Search`, `fa-check-circle`);
      else if (!safeSearch)
        notifyOption(`Safe Search`, `fa-times-circle`);
    }
    if (
      event.target.classList.contains(
        `fadeIntoView`
      )
    ) {
      fadeIntoView = fadeIntoView != true;
      sideBarStar(event.target, fadeIntoView);
      if (fadeIntoView == false) {
        _channel
          .querySelectorAll(`.img`)
          .forEach(
            (a) => a.classList.remove(`hidden`)
          );
      } else if (fadeIntoView == true) {
        if (
          document.body.contains(
            _channel.querySelector(`.img`)
          )
        ) {
          _channel
            .querySelectorAll(`.img`)
            .forEach(
              (a) => a.classList.remove(`fade-in-element`)
            );
          _channel
            .querySelectorAll(`.img`)
            .forEach(
              (a) => a.classList.add(`hidden`)
            );
          (function () {
            function startPosition() {
              let elements = _channel.querySelectorAll(".img");
              for (var i = 0; i < elements.length - 1; i++) {
                if (
                  elements[i].getBoundingClientRect().top - _main.clientHeight <= 0
                ) {
                  if (fadeIntoView) {
                    elements[i].classList.add("fade-in-element");
                    elements[i].classList.remove("hidden");
                  }
                  if (!fadeIntoView) {
                    _main
                      .querySelectorAll(`.img`)
                      .forEach(
                        (a) => a.classList.remove(`hidden`)
                      );
                    _main.removeEventListener("scroll", startPosition);
                  }
                }
              }
            }
            if (!sideScroll)
              _main.addEventListener("scroll", startPosition);
            else if (sideScroll) _main.addEventListener("scroll", startPosition);
            startPosition();
          })();
        }
      }
    }
    event.preventDefault();
  },
  false
);
