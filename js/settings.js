// initial theme

let set = `Alpenglow`;

/*
    backgroundImage [array]

      Applications
        main, container

      Result
        set background

*/

let backgroundImage = [
  {
    path: "images/ffe869c642be33cbb2c3e609e27beb29.webp",
    element: "container", //container or main
    position: "center",
    size: "cover",
  },
];

//  {
//    name: `Example function (in example file in /js/themes)`,
//    class: `Element Class Click Event (unique)`,
//    icon: `fa-example`
//  }

const themes = [
  { name: `Day`, class: `Day`, icon: `fa-terminal` },
  { name: `Night`, class: `Night`, icon: `fa-code` },
  { name: `Nord`, class: `Nord`, icon: `fa-signature` },
  { name: `Gruvbox`, class: `Gruvbox`, icon: `fa-lemon` },
  { name: `Solarized`, class: `Solarized`, icon: `fa-digital-tachograph` },
  { name: `Alpenglow`, class: `Alpenglow`, icon: `fa-paint-brush` },
];

//create js theme file from example.js rename file and function.
//example.js function = themes.name
//above and below the theme and file

let visuals = [
  `day`,
  `night`,
  `nord`,
  `gruvbox`,
  `solarized`,
  `alpenglow`,
  //  `example file`, in /js/themes
];

/*
    topBar [boolean/integer]

      Applications
        sideBarDisplay

      Result
        toggle hidden in guide

*/

let topBar = true;

/*
    showOption [boolean/integer]

      Applications
        guide, group, xml

      Result
        toggle option icons in topBar

*/

let showOption = true;

/*
    reader [boolean/integer]

      Applications
        sideBarDisplay, options

      Result
        scroll call anyRandomMenuObject

*/

let reader = false;

/*
    onScreen [boolean/integer]

      Applications
        mainevents.js, onload, hide

      Result
        show sideBar

*/

let onScreen = true;

/*
    expand [boolean/integer]

      Applications
        sideBarDisplay, option, displayExpand

      Result
        false `blocks`
        true `list`

*/

let expand = true;

/*
    expandVisual [boolean/integer]

      Applications
        sidebar, onload

      Result
        Visual expanded

*/

let expandVisual = false;

/*
    expandFilter [boolean/integer]

      Applications
        sidebar, onload

      Result
        Filter expanded

*/

let expandFilter = false;

/*
    expandSettings [boolean/integer]

      Applications
        sidebar

      Result
        Settings expanded

*/

let expandSettings = false;

/*
    expandBackground [boolean/integer]

      Applications
        sideBar

      Result
        Background expanded

*/

let expandBackground = false;

/*
    showRipple [boolean/integer]

      Applications
        sideBar, populate

      Result
        ripple coloring effect.

*/

let showRipple = true;

/*
    showRipple [boolean/integer]

      Applications
        sideBar, populate

      Result
        ripple coloring effect.

*/

let showDescription = true;

/*
    quickFeeds [boolean/integer]

      Applications
        mainEvents.js, onLoad, clientWidth

      Result
        toggle quickFeedDisplay

*/

let quickFeeds = true;

/*
    quickFeedsTranslations [boolean/integer]

      Applications
        mainEvents.js, onload

      Result
        translations in quick feeds

*/

let quickFeedsTranslations = true;

/*
    scrollIntoView [string]

      Applications
        xml, group

      Result
        adds padding-top and animates out

*/

let scrollIntoView = false;

/*
    fadeIntoView [string]

      Applications
        xml, progressBackdrop

      Result
        fades img in with scaling

*/

let fadeIntoView = false;

/*
    loading [boolean/integer]

      Applications
        progressBackdrop

      Result
        group, xml paddingTop scrolls intoView

*/

let loading = `percent`;

/*
    titleTruncate [integer]

      Applications
        xmlRequestParsing

      Result
        trim xhr title

*/

let titleTruncate = 125;

/*
    category [translations/legacy]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader,
        quickFeedAsset, topBar

      Result
        Social, News, Entertainment, Sports, Technology, World, Youtube
        display, read, random

*/

let category = `Social`;

/*
    onlyImages [boolean/integer]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader

      Result
        display, read, random

*/

let onlyImages = false;

/*
    suggestiongBuffer [integer]

      Applications
        inputFilterIndex

      Result
        input response buffered to [integer]

*/

let suggestionBuffer = 7;

/*
    contentStatusBuffer [integer]

      Applications
        xmlStatusSuggestions, xmlRequestParsing

      Result
        random generated integer

*/

let contentStatusBuffer = 5;

/*
    safeSearch [integer]

      Applications
        xmlImageAttributes

      Result
        blur filter nsfw

*/

let safeSearch = true;

/*
    safeSearchScore [string]

      Applications
        xmlImageAttributes

      Result
        less than string filtered

*/

let safeSearchScore = `0.3369845151901245`;

/*
    safeSearchCategory [array]

      Applications
        xmlImageAttributes

      Result
        category applied searchSearch (faster)

*/

let safeSearchIDs = [
  `Imgur/Celebs`,
  `Reddit/Celebs`,
  `Imgur/Celebhub`,
  `Reddit/Celebhub`,
  `Imgur/Goddesses`,
  `Reddit/Goddesses`,
  `4Chan/HR High Resolution`,
  `4Chan/Wallpapers General`,
];

/*
    exclude [array]

      Applications
        sidebar, xmlRequestParsing

      Result
        titles excluded

*/

let exclude = [
  `Buy`,
  `Sale`,
  `Shop`,
];

/*
    cors [string]

      Applications
        xmlRequestParsing, httpRequest

      Result
        cors-anywhere instance

      Fail
        ABC in cloudflare worker

*/

const cors = `https://acktic-github-io.herokuapp.com/`;

/*
    api [string]

      Applications
        xmlImageAttributes

      Result
        filter nsfw feeds

*/

const api = `https://acktic-github-io-api.herokuapp.com/?url=`;

/*  translations [array]

      Applications
        populateCategoryGroup, reverseCategoryGroup, quickFeedAsset, sideBarDisplay

      Result
        menu array filtered and shown

      Option
        Reorder.

*/

const translations = [
  `Social`,
  `News`,
  `Entertainment`,
  `Sports`,
  `Technology`,
  `World`,
  `Youtube`,
];

/* Feel free to edit the above. */

let post; //from init.js global timestamp for guide
let id = 0; //feed indexOf menu
let tap = 0; //used in mainEvents.js for images
let complete; //coreHelpers.js interval for progress
let httpRequest; //uri xml httpRequest
let random = []; //core.js random feed in category
let filter = []; //response array for menu objects
let first = true; //reader append feed center channel
let touchendX = 0; //
let touchstartX = 0; // swipe variables
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

if (expand == true) {
  faList = `fa-check`;
  faBlocks = `fa-circle-notch`;
} else if (expand == false) {
  faList = `fa-circle-notch`;
  faBlocks = `fa-check`;
}
if (loading == `percent`) {
  faPercent = `fa-check`;
  faDots = `fa-circle-notch`;
} else if (loading == `dots`) {
  faDots = `fa-check`;
  faPercent = `fa-circle-notch`;
}
let faRipple;
if (showRipple == true) faRipple = `fa-check`;
else faRipple = `fa-circle-notch`;
let faImages;
if (onlyImages == true) faImages = `fa-check`;
else faImages = `fa-circle-notch`;
let faTopBar;
if (topBar == true) faTopBar = `fa-check`;
else faTopBar = `fa-circle-notch`;
let faFade;
if (fadeIntoView == true) faFade = `fa-check`;
else faFade = `fa-circle-notch`;
let faOption;
if (showOption == true) faOption = `fa-check`;
else faOption = `fa-circle-notch`;
let faDescription;
if (showDescription == true) faDescription = `fa-check`;
else faDescription = `fa-circle-notch`;
let faScroll;
if (scrollIntoView == true) faScroll = `fa-check`;
else faScroll = `fa-circle-notch`;

const selections = [
  { name: `Home`, class: `sideHome`, icon: `fa-home` },
  { name: `Reader`, class: `Reader`, icon: `fa-heart` },
  { name: `Random`, class: `Random`, icon: `fa-chart-pie` },
  { name: `Random Image`, class: `RandomImages`, icon: `fa-tablet-alt` },
  { name: `Random in Category`, class: `RandomCategory`, icon: `fa-sliders-h` },
  { name: `Repository`, class: `Info`, icon: `fa-exclamation-circle` },
];

const settings = [
  { name: `List`, class: `List`, icon: faList },
  { name: `Blocks`, class: `Blocks`, icon: faBlocks },
  { name: `Percent`, class: `Percent`, icon: faPercent },
  { name: `Dots`, class: `Dots`, icon: faDots },
  { name: `Images`, class: `toggleImages`, icon: faImages },
  { name: `Top Bar`, class: `TopBar`, icon: faTopBar },
  { name: `Use Ripples`, class: `showRipple`, icon: faRipple },
  { name: `Fade in Images`, class: `fadeElement`, icon: faFade },
  { name: `Scroll Into View`, class: `scrollView`, icon: faScroll },
  { name: `Show Option`, class: `ShowOption`, icon: faOption },
  { name: `Show Description`, class: `showDescription`, icon: faDescription },
];

const background = [
  { name: `Fit`, class: `fitBackground`, icon: `fa-crop-alt` },
  { name: `Cover`, class: `coverBackground`, icon: `fa-expand` },
  { name: `Set`, class: `setBackground`, icon: `fa-user` },
  { name: `Save`, class: `saveBackground`, icon: `fa-download` },
  { name: `Reset Path`, class: `resetBackground`, icon: `fa-cloud` },
  { name: `Remove`, class: `removeBackground`, icon: `fa-certificate` },
  { name: `Choose Main`, class: `mainBackground`, icon: `fa-book-open` },
  {
    name: `Choose Container`,
    class: `containerBackground`,
    icon: `fa-layer-group`,
  },
];

const repository = `https://github.com/acktic/acktic.github.io`;
