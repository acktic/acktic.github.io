// initial theme
let set = `Night`;

/*
    backgroundImage [array]

      Applications
        main, container

      Result
        set background

*/

// backgroundImage path is being overwritten in themes files
let backgroundImage = [
  {
    path: "",
    element: "container",
    position: "center",
    size: "cover",
  },
];

//  {
//    obFn: `Object Function (in example file in js/themes)`,
//    class: `class click Event (generated from this array)`,
//    icon: https://fontawesome.com/cheatsheet
//  }

let themes = [
  { obFn: `Light`, class: `Light`, icon: `fa-terminal` },
  { obFn: `Night`, class: `Night`, icon: `fa-code` },
  { obFn: `Informative`, class: `Informative`, icon: `fa-info` },
  { obFn: `Camoflage`, class: `Camoflage`, icon: `fa-angle-double-up` },
  { obFn: `Solarized`, class: `Solarized`, icon: `fa-digital-tachograph` },
];

const favorites = [
  `Reddit/Wallpaper`,
  `Reddit/Wallpapers`,
  `Reddit/Los Angeles`,
  `Reddit/San Francisco`,
  `4Chan/Wallpapers`,
  `4Chan/Technology`,
]

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
    Reader [boolean/integer]

      Applications
        sideBarDisplay, options

      Result
        scroll call anyRandomMenuObject

*/

let Reader = false;

/*
    Reader [boolean/integer]

      Applications
        xmlRequestParsing, sidebar

      Result
        random array reset category switch

*/

let readPrevious = true;

/*
    onScreen [boolean/integer]

      Applications
        mainevents.js, onload, hide

      Result
        show sideBar

*/

let onScreen = false;


/*
    sideBarLock [boolean/integer]

      Applications
        mainEvents.js mousemove, wheel

      Result
        lock sideBar onScreen

*/

let sideBarLock = false;

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
    expandFavorites [boolean/integer]

      Applications
        sidebar, onload

      Result
        Favorites expanded

*/

let expandFavorites = false;

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
    showSplash [boolean/integer]

      Applications
        init.js, xmlRequestParsing

      Result
        Show Loading Splash.

*/

let showSplash = false;

/*
    sideBarCenter [boolean/integer]

      Applications
        sideBar, sideBarEvents

      Result
        center sidebar (false mobile)

*/

let sideBarCenter = true;

/*
    sideBarBackdrop [boolean/integer]

      Applications
        sideBar, sideBarEvents

      Result
        add backdrop sidebar (jumpy wheel)

*/

let sideBarBackdrop = false;

/*
    sideBarMousewheel [boolean/integer]

      Applications
        sideBar, sideBarEvents

      Result
        display sideBar with Mousewheel.

*/

let sideBarMousewheel = false;

/*
    topBarBackdrop [boolean/integer]

      Applications
        sideBarEvents

      Result
        add backdrop filter to top bar.

*/

let topBarBackdrop = true;

/*
    toggleBorders [boolean/integer]

      Applications
        xml item

      Result
        toggle border.

*/

let toggleBorders = true;

/*
    showDescription [boolean/integer]

      Applications
        content status, list

      Result
        toggle descriptions.

*/

let showDescription = true;

/*
    sideBarTranslations [boolean/integer]

      Applications
        sideBarDisplay, sideBarEvents.js

      Result
        translations in sideBar

*/

let sideBarTranslations = true;

/*
    quickFeeds [boolean/integer]

      Applications
        mainEvents.js, onLoad, clientWidth

      Result
        toggle quickFeedDisplay

*/

let quickFeeds = false;

/*
    quickFeedsTranslations [boolean/integer]

      Applications
        mainEvents.js, onload

      Result
        translations in quick feeds

*/

let quickFeedsTranslations = true;

/*
    scrollIntoView [boolean/integer]

      Applications
        xml, group

      Result
        adds padding-top and animates out

*/

let scrollIntoView = true;

/*
    imageLoader [boolean/integer]

      Applications
        xmlHTMLBuild

      Result
        `double-circle`
        `ring-circle`
        `v-bars`
        false

*/

let imageLoader = `v-bars`;

/*
    cropImages [boolean/integer]

      Applications
        xmlImageDimensions, sidebar

      Result
        crop images to center

*/

let cropImages = true;

/*
    fadeIntoView [boolean/integer]

      Applications
        xml, progressBackdrop

      Result
        fades img in with scaling

*/

let fadeIntoView = true;

/*
    loading [string]

      Applications
        coreHelpers.js, progressBackdrop

      Result
        group, xml paddingTop scrolls intoView

      Option
        `dots`
        `percent`

*/

let loading = `dots`;

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

let category = `Reddit`;

/*
    roundedEdge [boolean/integer]

      Applications
        xmlHTMLBuild

      Result
        round image edges

*/

let roundedEdge = true;

/*
    onlyImages [boolean/integer]

      Applications
        populateCategoryGroup, reverseCategoryGroup, sideBar, reader

      Result
        toggle feeds with images

*/

let onlyImages = false;

/*
    feedImages [boolean/integer]

      Applications
        xmlAppendPublication

      Result
        display images

*/

let feedImages = true;

/*
    youtubeMedia [boolean/integer]

      Applications
        xmlFunctions.js, xmlImageParsing, xmlRequestParsing, xmlImageAttributes

      Result
        false = Images
        true = Videos

*/

let youtubeMedia = false;

/*
    suggestionBuffer [integer]

      Applications
        inputFilterIndex

      Result
        input response buffered to [integer]

*/

let suggestionBuffer = 30;

/*
    contentStatusBuffer [integer]

      Applications
        xmlStatusSuggestions, xmlRequestParsing

      Result
        random generated integer

*/

let contentStatusBuffer = 7;

/*
    omitGuide [boolean/integer]

      Applications
        xmlRequestParsing

      Result
        Guide Posts not in feed

*/

let omitGuide = true;

/*
    hash [boolean/integer]

      Applications
        init.js xmlRequestParsing xmlTimestampParsing

      Result
        `long`
        `short`
        `title`

*/

let hash = `title`;

/*
    safeSearch [integer]

      Applications
        xmlImageAttributes

      Result
        blur filter nsfw

*/

let safeSearch = true;

/*
    guideSafeSearch [boolean/integer]

      Applications
        xmlImageAttributes

      Result
        apply safeSearch to guide

*/

let guideSafeSearch = false;

/*
    safeSearchScore [string]

      Applications
        xmlImageAttributes

      Result
        greater than string filtered

*/

let safeSearchScore = `0.06374358385801315`;

/*
    safeSearchIDs [array]

      Applications
        xmlImageAttributes

      Result
        ids applied searchSearch

*/

let safeSearchIDs = [
  `Reddit/Celebs`,
  `Reddit/Celebhub`,
  `Reddit/Goddesses`,
  `Reddit/Internet Stars`,
  `Reddit/High Res Celebs`,
  `Reddit/UHQ Celebs`,
  `4Chan/Sports`,
  `4Chan/Technology`,
  `4Chan/Wallpapers`,
  `4Chan/High Resolution`,
  `4Chan/Gif`
];

/*
    exclude [array]

      Applications
        sidebar, xmlRequestParsing

      Result
        filter titles excluded

*/

let exclude = [`Buy`, `Sale`, `Shop`];

/*
    cors [string]

      Applications
        xmlRequestParsing, httpRequest

      Result
        ty heroku (cors-anywhere instance)

*/

const cors = `https://acktic-github-io.herokuapp.com/`;

/*
    api [string]

      Applications
        xmlImageAttributes

      Result
        ty heroku (filter nsfw feeds with score)

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
  `Reddit`,
  `News`,
  `Media`,
  `Sports`,
  `Tech`,
  `World`,
  `Youtube`,
];

/* Feel free to edit the above. */

let verticalbars
let doublecircle
let loaderfalse
let ringcircle
let Dots;
let Percent;
let Blocks;
let List;

if (imageLoader == `v-bars`) {
  circleloader = false;
  ringloader = false;
  verticalbars = true;
} else if (imageLoader == `double-circle`){
  verticalbars = false;
  ringloader = false;
  circleloader = true;
} else if (imageLoader == `ring-circle`){
  circleloader = false;
  verticalbars = false;
  ringloader = true;
} else if (imageLoader == false){
  circleloader = false;
  verticalbars = false;
  ringloader = false;
  loaderfalse = true;
}

if (loading == `percent`) {
  Dots = false;
  Percent = true;
} else {
  Dots = true;
  Percent = false;
}
if (expand == true) {
  Blocks = false;
  List = true;
} else {
  Blocks = false;
  List = true;
}

let quit;
let post; //from init.js global timestamp for guide
let id = 0; //feed indexOf menu
let tap = 0; //used in mainEvents.js for images
let httpRequest; //uri xml httpRequest
let random = []; //core.js random feed in category
let filter = []; //response array for menu objects
let justRead = false; //anyRandomMenuObject
let first = true; //reader append feed center channel
let count = []; //progressBackdrop init calls
let pub = []; //raw html of publication
let local; //copy of post in base36
let index; //copy of id used in guide
let complete; //progressBar interval
let images = []; //array of images in request
let touchendY = 0;
let touchstartY = 0;
let touchendX = 0; //
let touchstartX = 0; // swipe variables
let contrast = false; //opposite of op +1
let sideBarFirst = true; //first click show
let imageDuplicate = []; //image src duplicate catch
let randomDuplicate = []; //core.js random duplicate xml
let guideOnScreen; //temporarly store onScreen for guide

const selections = [
  { name: `Home`, class: `sideHome`, icon: `fa-home` },
  { name: `Random`, class: `Random`, icon: `fa-chart-pie` },
  { name: `Random Image`, class: `RandomImages`, icon: `fa-tablet-alt` },
  { name: `Random in Category`, class: `RandomCategory`, icon: `fa-sliders-h` },
  { name: `Repository`, class: `Info`, icon: `fa-exclamation-circle` },
];

const settings = [
  { name: `Loading Circles`, class: `circleloader` },
  { name: `Loading Ring`, class: `ringloader` },
  { name: `Loading Bars`, class: `verticalbars` },
  { name: `Loading False`, class: `loaderfalse` },
  { name: `List`, class: `List` },
  { name: `Blocks`, class: `Blocks` },
  { name: `Percent`, class: `Percent` },
  { name: `Dots`, class: `Dots` },
  { name: `Safe Search`, class: `safeSearch` },
  { name: `Read Previous`, class: `readPrevious` },
  { name: `Images`, class: `onlyImages` },
  { name: `Feed Images`, class: `feedImages` },
  { name: `Top Bar`, class: `topBar` },
  { name: `Youtube Media`, class: `youtubeMedia` },
  { name: `Crop Images`, class: `cropImages` },
  { name: `Round Edges`, class: `roundedEdge` },
  { name: `Fade in Images`, class: `fadeIntoView` },
  { name: `Scroll Into View`, class: `scrollIntoView` },
  { name: `Toggle Borders`, class: `toggleBorders` },
  { name: `Show Option`, class: `showOption` },
  { name: `Show Description`, class: `showDescription` },
  { name: `Top Bar Backdrop`, class: `topBarBackdrop` },
  { name: `Sidebar Center`, class: `sideBarCenter` },
  { name: `Sidebar Backdrop`, class: `sideBarBackdrop` },
  { name: `Sidebar Mousewheel`, class: `sideBarMousewheel` },
];

const background = [
  { name: `Fit Container`, class: `fitBackground`, icon: `fa-crop-alt` },
  { name: `Set Background`, class: `setBackground`, icon: `fa-user` },
  { name: `Save Path`, class: `saveBackground`, icon: `fa-download` },
  { name: `Layer Group`, class: `containerBackground`, icon: `fa-layer-group` },
  { name: `Cover Background`, class: `coverBackground`, icon: `fa-expand` },
  { name: `Reset Path`, class: `resetBackground`, icon: `fa-cloud` },
  { name: `Remove`, class: `removeBackground`, icon: `fa-certificate` },
];

const repository = `https://github.com/acktic/acktic.github.io`;