# Capacitor HTTP interceptor error


## Description

Small reproduction for the capacitor http interceptor error.

When CapacitorHttp plugin is enabled, it's not making the request when we have conditional checks for the request like readyState.
Browser works fine but when on the app in decive/emulator it's not making the request.

Happens since `@capacitor/android` version 5.7.1

## Run

```bash
pnpm install
pnpm generate:sync
npx cap open android
```

Use android studio to run the app on a device or emulator and inspect the logs, to see 


