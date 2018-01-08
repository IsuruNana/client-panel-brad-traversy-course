// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyAmLb4QFzZZIt-lk808PqV2jDXaM42LPTg",
      authDomain: "clientpanelapp-50f4f.firebaseapp.com",
      databaseURL: "https://clientpanelapp-50f4f.firebaseio.com",
      projectId: "clientpanelapp-50f4f",
      storageBucket: "clientpanelapp-50f4f.appspot.com",
      messagingSenderId: "597642150728"
  }
};
