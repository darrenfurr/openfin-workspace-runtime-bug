# Openfin Workspace

<img src="./screenshot.PNG">

The Reactive Trader Openfin Workspace Provider is a standalone application that registers a platform provider with Openfin. It is built separately to the Reactive Trader client, and deployed to the Openfin bucket in Google Cloud Storage (under the subfolder/workspace)

The manifest file is available at - `http://openfin.dev|uat|prod.reactivetrader.com/workspace/config/workspace.json`

Branch builds are located at -
`http://openfin.env.reactivetrader.com/branch/branch_name/workspace/config/workspace.json`

PR builds are located at -
`http://openfin.env.reactivetrader.com/pull/pr_id/workspace/config/workspace.json`

## Running Locally

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

`npm start` - Starts the vite dev server
`npm run openfin:run` - Launch the provider application in Openfin

## TODO
