import { init as workspacePlatformInit } from "@openfin/workspace-platform";

const icon = "https://vitejs.dev/logo.svg";

const init = async () => {
  await workspacePlatformInit({
    browser: {
      defaultWindowOptions: {
        icon,
        workspacePlatform: {
          pages: [],
          favicon: icon,
        },
      },
    },
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  await init();
});
