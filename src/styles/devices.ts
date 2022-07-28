export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 600,
  tabletM: 768,
  tabletL: 900,
  laptopS: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktopS: 1768,
  desktopM: 1920,
  desktopL: 2560,
};

export const sizeInPx = {
  mobileS: `${size.mobileS}px`,
  mobileM: `${size.mobileM}px`,
  mobileL: `${size.mobileL}px`,
  tabletS: `${size.tabletS}px`,
  tabletM: `${size.tabletM}px`,
  tabletL: `${size.tabletL}px`,
  laptopS: `${size.laptopS}px`,
  laptopM: `${size.laptopM}px`,
  laptopL: `${size.laptopL}px`,
  desktopS: `${size.desktopS}px`,
  desktopM: `${size.desktopM}px`,
  desktopL: `${size.desktopL}px`,
};

export const device = {
  mobileS: `(max-width: ${sizeInPx.mobileS})`,
  mobileM: `(max-width: ${sizeInPx.mobileM})`,
  mobileL: `(max-width: ${sizeInPx.mobileL})`,
  tabletS: `(max-width: ${sizeInPx.tabletS})`,
  tabletM: `(max-width: ${sizeInPx.tabletM})`,
  tabletL: `(max-width: ${sizeInPx.tabletL})`,
  laptopS: `(max-width: ${sizeInPx.laptopS})`,
  laptopM: `(max-width: ${sizeInPx.laptopM})`,
  laptopL: `(max-width: ${sizeInPx.laptopL})`,
  desktopS: `(max-width: ${sizeInPx.desktopS})`,
  desktopM: `(max-width: ${sizeInPx.desktopM})`,
  desktopL: `(max-width: ${sizeInPx.desktopL})`,
};

export const deviceMinWidth = {
  mobileS: `(min-width: ${sizeInPx.mobileS})`,
  mobileM: `(min-width: ${sizeInPx.mobileM})`,
  mobileL: `(min-width: ${sizeInPx.mobileL})`,
  tabletS: `(min-width: ${sizeInPx.tabletS})`,
  tabletM: `(min-width: ${sizeInPx.tabletM})`,
  tabletL: `(min-width: ${sizeInPx.tabletL})`,
  laptopS: `(min-width: ${sizeInPx.laptopS})`,
  laptopM: `(min-width: ${sizeInPx.laptopM})`,
  laptopL: `(min-width: ${sizeInPx.laptopL})`,
  desktopS: `(min-width: ${sizeInPx.desktopS})`,
  desktopM: `(min-width: ${sizeInPx.desktopM})`,
  desktopL: `(min-width: ${sizeInPx.desktopL})`,
};
