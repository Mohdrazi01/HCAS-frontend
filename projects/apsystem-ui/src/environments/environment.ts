// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: "https://localhost:5001",
  appInsights: {
    instrumentationKey: "14c68382-bf0a-4dab-b0ca-c9d07c8f18ed",
    disableAjaxTracking: false,
    disableExceptionTracking: false,
    enableAutoRouteTracking: true,
    autoTrackPageVisitTime: true,
    enableAjaxErrorStatusText: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    enableCorsCorrelation: true,
    disableCorrelationHeaders: false,
    disableFlushOnBeforeUnload: false,
    enableDebugExceptions: true,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
