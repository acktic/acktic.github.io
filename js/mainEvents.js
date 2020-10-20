window.onload = function () {
  document.querySelector("#input").style.display = "block";
  document.querySelector("#input").style.display = "block";
  var guest = document.querySelector(".guest");
  guest.setAttribute("placeholder", "Search Feeds");
  guest.style.caretColor = "#e4e4e4";
  guest.style.paddingLeft = "40px";
  guest.style.textAlign = "left";
  guest.value = "";
  document.querySelector("#front .icon").classList.add("search");
  document.querySelector(".focus .guest").focus();
  quickFeedDisplay(quickFeeds);
  if (document.querySelector('#main').clientWidth <= 425) quickFeedAsset(7);
  else quickFeedAsset(8)
  visual();
  if (document.querySelector("#main").clientWidth < 768) return true;
  else {
    sidebarFirst = "false";
    sideBarDisplay(onScreen);
  }
};
document.addEventListener(
  "scroll",
  function (event) {
    if (event.target.id == "main") {
      if (
        document.querySelector("#main").scrollHeight -
          document.querySelector("#main").scrollTop -
          document.querySelector("#main").clientHeight <=
          350 &&
        reader == true &&
        httpRequest.status == 200
      ) {
        init();
        xmlRequestParsing(null, null, anyMenuRandomObject());
      }
    }
  },
  true
); //:before pseudo-elements not loaded in DOM
var transitionEvent = whichTransitionEvent();
document.addEventListener(transitionEvent, function () {
  if (!complete) {
    progressBackDrop(true, 0);
  }
});
document.addEventListener(
  "ontouchmove",
  function (event) {
    if (event.target.id == "main") {
      if (
        document.querySelector("#main").scrollHeight -
          document.querySelector("#main").scrollTop -
          document.querySelector("#main").clientHeight <=
          350 &&
        reader == true &&
        httpRequest.status == 200
      ) {
        init();
        xmlRequestParsing(null, null, any());
      }
    }
    if (event.target.id == "feed") {
      feed(8);
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
document.addEventListener(
  "click",
  function (event) {
    if (
      event.target.classList.contains("link") ||
      event.target.classList.contains("fa-angle-up") ||
      event.target.classList.contains("show")
    ) {
      quickFeeds = quickFeeds != true;
      quickFeedDisplay(quickFeeds);
    }
    if (event.target.id == "home") {
      id = 0;
      document.querySelector("#top").style.display = "block";
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      document.title = category.capitalize();
      populateCategoryGroup(category);
      if (expand == true) var groupType = "list";
      else var groupType = "blocks";
      displayExpand(expand);
      unloading();
      visual();
    }
    if (
      !document
        .querySelectorAll(".attribute")
        .forEach((a) => (a.style.display = "none"))
    ) {
      document
        .querySelectorAll(".attribute")
        .forEach((a) => (a.style.display = "none"));
      var attr = document.querySelectorAll(".fa-ellipsis-v");
      for (i = 0; i < attr.length; i++) {
        attr[i].classList.remove("fa-ellipsis-v");
        attr[i].classList.add("fa-ellipsis-h");
      }
    }
    if (
      event.target.classList.contains("feed") ||
      event.target.classList.contains("cat") ||
      event.target.classList.contains("sel") ||
      event.target.id == "hide" ||
      event.target.id == "container" ||
      event.target.id == "search" ||
      event.target.id == "option" ||
      event.target.id == "visit" ||
      event.target.id == "group" ||
      event.target.id == "feed" ||
      event.target.id == "main" ||
      event.target.id == "page" ||
      event.target.id == "top" ||
      event.target.id == "arm" ||
      event.target.classList.contains("fa")
    ) {
      if (document.getElementById("match").style.display === "block") {
        document.getElementById("match").style.display = "none";
        document.querySelector("#input .view").blur();
        document.querySelector("#input .view").setAttribute("placeholder", "");
        document.querySelector("#input .view").style.caretColor = "#e4e4e4";
        document.querySelector("#input .view").style.textAlign = "center";
        document.querySelector("#input .view").style.paddingLeft = "0px";
        document.querySelector("#input .icon").classList.remove("slide");
        document.querySelector("#input .view").value = "Search";
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
      }
    }
    if (event.target.classList.contains("fa-expand-alt")) {
      if (!document.body.contains(document.querySelector("#main #group"))){
        populateCategoryGroup(category)
      }
      topMenuBarDisplay(topBar)
      document.querySelector("#visit").style.display = "none";
      expand = expand != true;
      displayExpand(expand);
      if (expand == true) var groupType = "list";
      else var groupType = "blocks";
      visual();
    }
    if (
      event.target.classList.contains("description") ||
      event.target.classList.contains("populate") ||
      event.target.classList.contains("reload") ||
      event.target.classList.contains("display") ||
      event.target.classList.contains("title") ||
      event.target.classList.contains("media") ||
      event.target.classList.contains("hash")
    ) {
      if (document.getElementById("match").style.display === "block") {
        document.getElementById("match").style.display = "none";
        document.querySelector("#search .view").blur();
        return false;
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
        return false;
      }
      init();
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      if (document.body.contains(document.querySelector("#group")))
        document.querySelector("#group").remove();
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".populate").getAttribute("aria-item")
      );
    }
    if (
      event.target.classList.contains("filter") ||
      event.target.classList.contains("status") ||
      event.target.classList.contains("ext") ||
      event.target.classList.contains("exit") ||
      event.target.classList.contains("tag")
    ) {
      event.target.closest(".filter").getAttribute("aria-item").blank();
    }
    if (
      event.target.classList.contains("entity") ||
      event.target.classList.contains("query") ||
      event.target.classList.contains("asset")
    ) {
      init();
      var feed = document.querySelector(".feed");
      while (feed.firstChild) {
        feed.removeChild(feed.lastChild);
      }
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      topMenuBarDisplay(topBar);
      xmlRequestParsing(null, null, event.target.closest('.asset').
        getAttribute("aria-item"));
    }
    if (
      event.target.classList.contains("blur") ||
      event.target.classList.contains("checkmark__circle") ||
      event.target.classList.contains("checkmark__check") ||
      event.target.classList.contains("checkmark")
    ) {
      document.querySelector("#guide").style.display = "none";
      while (event.target.firstChild) {
        event.target.removeChild(event.target.lastChild);
      }
      topMenuBarDisplay(topBar);
      document.querySelector("#main").classList.remove("guide");
    }
    if (event.target.classList.contains("bottom")) {
      init();
      document.title = category;
      if (location.href.match("\\?q=")) {
        var uri = location.search.split("?q=")[1].match(/[^&]+/g);
        if (location.href.match("\\+1"))
          var query = uri[0].replace(/\+1/g, "").space();
        else var query = uri[0].space();
        filterInputResponse(false, false, query, true);
      } else populateCategoryGroup(category);
      displayExpand(expand);
      visual();
      id = 0;
    }
    if (event.target.classList.contains("more")) {
      event.target.parentNode.innerHTML = event.target.parentNode.getAttribute(
        "text"
      );
      event.target.style.display = "none";
      event.stopPropagation();
    }
    if (
      event.target.classList.contains("courtesy") ||
      event.target.classList.contains("classic") ||
      event.target.classList.contains("header") ||
      event.target.classList.contains("item") ||
      event.target.classList.contains("wrap") ||
      event.target.classList.contains("pub") ||
      event.target.classList.contains("ago")
    ) {
      event.target.closest(".item").getAttribute("ext").blank();
    }
    if (
      event.target.classList.contains("combine") ||
      event.target.classList.contains("circle") ||
      event.target.classList.contains("random") ||
      event.target.classList.contains("bold") ||
      event.target.classList.contains("suggest")
    ) {
      init();
      document.querySelector("#feed").remove();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".suggest").getAttribute("aria-item")
      );
    }
    if (event.target.classList.contains("asset")) {
      init();
      xmlRequestParsing(null, null, event.target.getAttribute("aria-item"));
    }
    if (
      event.target.classList.contains("front") ||
      event.target.classList.contains("flip-front") ||
      event.target.classList.contains("flip-bank") ||
      event.target.classList.contains("next") ||
      event.target.classList.contains("back")
    ) {
      init();
      if (document.body.contains(document.querySelector("#feed")))
        document.querySelector("#feed").remove();
      xmlRequestParsing(
        null,
        null,
        event.target.closest(".btn").getAttribute("aria-item")
      );
    }
    if (event.target.classList.contains("img")) {
      if (tap == 0) {
        // set first click
        tap = new Date().getTime();
        setTimeout(function () {
          if (
            new Date().getTime() - tap >= 350 &&
            new Date().getTime() - tap < 400
          )
            if (
              !event.target.classList.contains('guide') &&
              event.target.classList.contains('default')
            ) {
              var sticky = [];
              sticky.push({
                courtesy: event.target.closest(".item").querySelector(".header")
                  .innerHTML,
                element: event.target.closest(".item").getAttribute("item"),
                title: event.target
                  .closest(".item")
                  .querySelector(".pub")
                  .getAttribute("text"),
                share: event.target.closest(".item").querySelector(".share")
                  .value,
                dst: event.target
                  .closest(".item")
                  .querySelector(".ago:last-child").innerHTML,
                src: event.target.closest(".item").querySelector(".source")
                  .value,
                re: event.target.closest(".item").getAttribute("ext"),
                id: event.target.getAttribute("id"),
              });
              guideDisplay(sticky);
            } else if (event.target.classList.contains('guide'))
              event.target.getAttribute("src").blank();
            else if (!event.target.classList.contains('default'))
              event.target.closest(".item").getAttribute("ext").blank();
            else if (category != "Social")
              event.target.closest(".item").getAttribute("ext").blank();
          tap = 0;
        }, 350);
      } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (new Date().getTime() - tap < 350) {
          // double click occurred
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.animation =
            "scale .7s ease-in-out .1s both";
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.display = "block";
          event.target
            .closest(".image")
            .querySelector(".fa-heart").style.zIndex = "1";
          setTimeout(function () {
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.animation = "none";
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.display = "none";
            event.target
              .closest(".image")
              .querySelector(".fa-heart").style.zIndex = "0";
          }, 1500);
          visual();
          tap = 0;
        }
      }
      event.stopPropagation();
      visual();
    }
    if (
      event.target.classList.contains("copy") ||
      event.target.classList.contains("fa-ellipsis-h") ||
      event.target.classList.contains("fa-ellipsis-v")
    ) {
      if (event.target.closest(".copy").querySelector(".fa-ellipsis-v")) {
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-v")
          .classList.add("fa-ellipsis-h");
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-h")
          .classList.remove("fa-ellipsis-v");
        event.target
          .closest(".copy")
          .querySelector(".attribute").style.display = "none";
      } else if (
        event.target.closest(".copy").querySelector(".fa-ellipsis-h")
      ) {
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-h")
          .classList.add("fa-ellipsis-v");
        event.target
          .closest(".copy")
          .querySelector(".fa-ellipsis-v")
          .classList.remove("fa-ellipsis-h");
        event.target
          .closest(".copy")
          .querySelector(".attribute").style.display = "block";
      }
      event.stopPropagation();
    }
    if (
      event.target.classList.contains("site") ||
      event.target.classList.contains("fa-at")
    ) {
      event.target.closest(".item").querySelector(".url").select();
      document.execCommand("copy");
      event.stopPropagation();
      notifyOption("URL Copied to Clipboard.");
    }
    if (
      event.target.classList.contains("post") ||
      event.target.classList.contains("fa-share")
    ) {
      if (location.href.match("\\+1"))
        event.target.closest(".item").querySelector(".share").value =
          event.target.closest(".item").querySelector(".share").value + "+1";
      else if (!location.href.match("\\+1"))
        event.target
          .closest(".item")
          .querySelector(".share").value = event.target
          .closest(".item")
          .querySelector(".share")
          .value.replace(/\+1/g, "");
      event.target.closest(".item").querySelector(".share").select();
      document.execCommand("copy");
      notifyOption("Post Copied to Clipboard.");
      event.stopPropagation();
      visual();
    }
    if (
      event.target.classList.contains("picture") ||
      event.target.classList.contains("fa-camera")
    ) {
      event.target.closest(".item").querySelector(".source").select();
      document.execCommand("copy");
      notifyOption("Source Copied to Clipboard.");
      visual();
    }
    if (
      event.target.classList.contains("translation") ||
      event.target.classList.contains("quickTranslation")
    ) {
      if (document.getElementById("match").style.display === "block") {
        document.getElementById("match").style.display = "none";
        document.querySelector("#search .view").blur();
      } else if (
        document.querySelector("#main #first").style.display === "block"
      ) {
        document.querySelector("#main #first").style.display = "none";
        document.querySelector(".focus .guest").blur();
      }
      id = 0;
      location.pathname.state();
      if (document.body.contains(document.querySelector(".selected")))
        document.querySelector(".selected").classList.remove("selected");
      document.querySelector("#toggle").style.display = "none";
      document.querySelector("#visit").style.display = "none";
      category = event.target.closest(".translation").getAttribute("aria-item");
      populateCategoryGroup(
        event.target.closest(".translation").getAttribute("aria-item")
      );
      topMenuBarDisplay(topBar);
      visual();
    }
    if (
      event.target.classList.contains("right") ||
      event.target.classList.contains("fa-plus")
    ) {
      quickFeedAsset(8);
      var leftPos = event.target.closest(".quick").querySelector(".feed")
        .scrollLeft;
      event.target.closest(".quick").querySelector(".feed").scrollLeft =
        leftPos +
        event.target.closest(".quick").querySelector(".feed").clientWidth;
      if (event.target.closest(".quick").querySelector(".feed").scrollLeft >= 0)
        document.querySelector(".left").style.display = "block";
      visual();
    }
    if (
      event.target.classList.contains("left") ||
      event.target.classList.contains("fa-minus")
    ) {
      var leftPos = event.target.closest(".quick").querySelector(".feed")
        .scrollLeft;
      event.target.closest(".quick").querySelector(".feed").scrollLeft =
        leftPos -
        event.target.closest(".quick").querySelector(".feed").clientWidth;
      if (
        event.target.closest(".quick").querySelector(".feed").scrollLeft -
          event.target.closest(".quick").querySelector(".feed").clientWidth <=
        0
      )
        document.querySelector(".left").style.display = "none";
    }
    event.preventDefault();
  },
  false
); //:before pseudo-elements not loaded in DOM
