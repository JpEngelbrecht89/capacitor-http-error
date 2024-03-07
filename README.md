# Capacitor HTTP interceptor error


## Description

Small reproduction for the capacitor http interceptor error.

The interceptor is removing the query params when using native `fetch` api.

Happens since `@capacitor/android` version 5.7.1

## Run

```bash
pnpm install
pnpm generate:sync
npx cap open android
```

Use android studio to run the app on a device or emulator.


