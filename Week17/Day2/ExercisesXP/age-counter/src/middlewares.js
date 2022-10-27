export const myMiddleware = (store) => (next) => (action) => {
  next(action);
  console.log("caught in the middleware " + JSON.stringify(store.getState()));
};
