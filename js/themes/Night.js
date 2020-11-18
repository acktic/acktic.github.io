var Night = function () {
  document.documentElement.style.setProperty(
    `--box-shadow`,
    `8px 8px 16px rgba(10, 10, 10, 1)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-primary`,
    `rgba(0, 120, 212, .4)`
  );
  document.documentElement.style.setProperty(
    `--loader-color-secondary`,
    `rgba(0,0,0,0)`
  );
  document.documentElement.style.setProperty(`--fill-color-primary`, `#ffffff`);
  document.documentElement.style.setProperty(
    `--fill-color-secondary`,
    `#f54e75`
  );
  document.documentElement.style.setProperty(`--bg-color-primary`, `#0f0f0f`);
  document.documentElement.style.setProperty(`--bg-color-secondary`, `#0f0f0f`);
  document.documentElement.style.setProperty(
    `--hover-background-color`,
    `rgba(10, 10, 10, .3)`
  );
  document.documentElement.style.setProperty(
    `--not-hover-border-color`,
    `.3px solid transparent`
  );
  document.documentElement.style.setProperty(
    `--hover-border-color`,
    `.3px solid #262626`
  );
  document.documentElement.style.setProperty(
    `--borderless-hover-color`,
    `rgba(7,7,7,.8)`
  );
  document.documentElement.style.setProperty(
    `--sticky-background`,
    `rgba(0,0,0,.4)`
  );
  document.documentElement.style.setProperty(
    `--hue-rotate`,
    `saturate(1)`
  );
  document
    .querySelector(`#favicon`)
    .setAttribute(`href`, `images/Opposite.ico`);
  document.querySelector(`#${backgroundImage[0].element}`).style.backgroundImage =
    `url(images/e54430a6cf0248fa8d1d5961e02a71e4.png)`
};
