# Regression: User gesture error inside click event

Receiving this error in Chrome v70 (Canary) on Mac OS X 10.13.5 when requesting permissions inside a click event:

> This function must be called during a user gesture permission

Appears to be related to the “User Activation v2” feature: chrome://flags/#user-activation-v2

Simplified from https://github.com/mrcoles/test-chrome-extension-per-promise-chrome-69
