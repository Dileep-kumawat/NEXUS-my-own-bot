import "dotenv/config";
import { ChatMistralAI } from "@langchain/mistralai";
import promptSync from "prompt-sync";
import { HumanMessage } from "langchain";
import chalk from "chalk";

const prompt = promptSync();

const AI_NAME = "NEXUS";

const model = new ChatMistralAI({
    model: "magistral-small-latest",
});

const messages = [];

function banner() {
    console.clear();
    console.log(chalk.cyan.bold("======================================"));
    console.log(chalk.green.bold(`        ${AI_NAME} TERMINAL AI`));
    console.log(chalk.gray("      Type /exit to quit"));
    console.log(chalk.cyan.bold("======================================\n"));
}

banner();

while (true) {
    const query = prompt(chalk.yellow.bold("You > "));

    if (query === "/exit") {
        break;
    }

    messages.push(new HumanMessage(query));

    const res = await model.invoke(messages);

    const reply = res.content[1].text;

    messages.push(reply);

    console.log(chalk.blue.bold(`${AI_NAME} > `) + chalk.white(reply));
    console.log(chalk.gray("--------------------------------------"));
}

console.log(
    chalk.green.bold(`\n${AI_NAME}: Thanks for using the assistant.`)
);

// run node server.js
// to run the code.