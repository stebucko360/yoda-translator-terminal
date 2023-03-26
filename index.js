import inquirer from "inquirer";
import { yodaSpeak } from "./translator.js";
import questions from "./inquirerQuestions.js";

const yodaTranslator = async () => {
  const prompter = await inquirer.prompt(questions);
  const translation = yodaSpeak(prompter.questionForYoda);
  console.log(translation);
};

yodaTranslator();
