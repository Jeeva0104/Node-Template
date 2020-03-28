const express = require("express");
const os = require("os");

const PORT = 8000;
const app = express();
app.get("/", async (req, res) => {
  await resolveAfterXSeconds();
  console.log(" reached here ! ");
  return res.send(
    `Final test Jenkins CI/CD, Docker Registry, Rancher Compose CLI, Rancher -> Jenkins Notification, I'm run on ${os.hostname()}`
  );
});
function resolveAfterXSeconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved");
    }, 60 * 60 * 60);
  });
}
app.listen(PORT);
console.log(`Running on http://0.0.0.0:${PORT}`);
