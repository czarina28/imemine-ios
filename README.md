# I Me Mine — iOS

English grammar practice, built with Vite and Capacitor.

## Local web preview (Windows)

```powershell
npm install
npm run dev
```

## iOS build validation (GitHub Actions)

Go to **Actions → iOS build check → Run workflow**. The workflow uses a GitHub-hosted macOS runner to compile an **unsigned iOS Simulator app**. It does not upload to TestFlight and does not require Apple credentials.

The native `ios/` folder is generated on the runner by `npx cap add ios`, then synced from the Vite `dist/` directory. A successful simulator build confirms that the native project compiles. Apple signing and App Store Connect upload are separate steps.

### Before TestFlight

- Confirm the bundle identifier in `capacitor.config.json` is registered to your Apple Developer account.
- Set up signing and provisioning securely; do not commit certificates or API keys.
- Add a separately approved release workflow for a signed device archive and TestFlight upload.
- Verify purchases on a real iOS device before enabling the Plus purchase button.

No Bitrise required.
