// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyA3Ldqa3ZfPYzeEJU5nihm--nZrtbdNSrI",
  authDomain: "konz-projekt.firebaseapp.com",
  projectId: "konz-projekt",
  storageBucket: "konz-projekt.appspot.com",
  messagingSenderId: "825536417698",
  appId: "1:825536417698:web:620cfdaca9a2f37649acfb"
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
