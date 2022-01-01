const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: "xoxb-2919951544608-2881837595367-Q2gadGScrFS8YphR9E4Pl4cK",
  signingSecret: "cbad69c800b3c3c2e8ceabb6595df855",
  socketMode: true,
  appToken:
    "xapp-1-A02SCD45ZMY-2920184927824-31c680c43ed87801d2bddee52a3ffdf1f1bc6dcfbaf13265c0a205872e7cb813",
});

app.command("/hello", async ({ command, ack, say, event }) => {
  try {
    await ack();
    console.log(command);
    say({
      blocks: [
        {
          type: "divider",
        },
        {
          type: "input",
          element: {
            type: "plain_text_input",
            action_id: "plain_text_input-action",
          },
          label: {
            type: "plain_text",
            text: "Label",
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "This is a section block with a button.",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click Me",
              emoji: true,
            },
            value: `plain_text_input-action.value`,
            url: "https://5baf-122-161-66-226.ngrok.io/helloworld",
            action_id: "button-action",
            // replace_original: "true",
            // text: "Thanks for your request, we'll process it and get back to you.",
          },
        },
      ],
    });
    console.log("command");
    // command(`${html}`);
  } catch (error) {
    console.log("err");
    console.error(error);
    debugger;
  }
});

(async () => {
  const port = 3000;
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
