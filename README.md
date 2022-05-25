# Openfin Workspace

## BUG

When running the @openfin/workspace-platform v7.3.10 you will see the following error in the console for the Workspace Provider:

```
Uncaught (in promise) Error: Runtime version is not supported.  24.98.69.* is required
    at Sn (index.ts:105)
    at async init (provider.ts:12)
    at async provider.ts:56
```

### Revert deps to v6.1.6...

- rm -rf node_modules
- Update package.json to:
  - "@openfin/workspace": "6.1.6",
  - "@openfin/workspace-platform": "6.1.6"
- Run the Workspace Provider again

## Run the Workspace Provider

- `npm i` to install dependencies
- `npm run start` to start the server
- `openfin:run` to launch the provider

## Configs

Config files are located in [./config](./config).
[workspace.json](./config/workspace.json) - This is the manifest file Openfin uses to run the workspace provider.

## Scripts

- `npm start` - Starts the vite dev server
- `npm run openfin:run` - Launch the provider application in Openfin
