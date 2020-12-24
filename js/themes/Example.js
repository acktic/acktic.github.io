var Example = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(63, 92, 136, .4)`
  ); //not widely adapted
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(106, 66, 194, 1)`
  ); // Pending Circle                        Text
  document.documentElement.style.setProperty(`--fill-color`, `#ffffff`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `transparent`
  ); // Inputs
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(106, 66, 194, .9)`
  ); // SideBar, Sticky
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(63, 92, 136, .2)`
  ); // Feed Assets, Buttons
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #eeeeee`
  ); // Populate, Buttons
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(63, 92, 136, .4)`
  ); // Main, TopBar Input, Left Right (feed)
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `images/ffe869c642be33cbb2c3e609e27beb29.webp`)
    backgroundImage[0].path = `images/ffe869c642be33cbb2c3e609e27beb29.webp`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};
