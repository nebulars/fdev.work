export const init = (app, components, extensions = {}) => {
  for (const key in components) {
    app.use(components[key]);
  }

  for (const key in extensions) {
    app.config.globalProperties[`$${key}`] = extensions[key];
  }
};

export const icon = (app, icons) => {
  for (const key in icons) {
    app.component(key, icons[key]);
  }

  app.config.globalProperties.$icons = icons;
};
