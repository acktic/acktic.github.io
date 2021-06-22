var California = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(10, 10, 10, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color`,
    `rgba(158, 123, 167, 1)`
  );
  document.documentElement.style.setProperty(`--fill-color`, `#aaaaaa`);
  document.documentElement.style.setProperty(
    `--color-primary`,
    `rgba(0, 0, 0, .6)`
  );
  document.documentElement.style.setProperty(
    `--color-secondary`,
    `rgba(93, 98, 145, 1)`
  );
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(26,26,26, .4)`
  );
  document.documentElement.style.setProperty(
    `--border-color`,
    `.3px solid #262626`
  );
  document.documentElement.style.setProperty(
    `--borderless-color`,
    `rgba(7,7,7,.3)`
  );
  document.querySelector(`#favicon`).setAttribute(`href`, `favicon.ico`);
  if (backgroundImage[0].path != `https://ackti.files.wordpress.com/2020/02/wallhaven-vmkyp5.jpg`)
    backgroundImage[0].path = `https://ackti.files.wordpress.com/2020/02/wallhaven-vmkyp5.jpg`
  document.querySelector(`#${backgroundImage[0].element}`)
    .style.backgroundImage = `url(${backgroundImage[0].path})`
};