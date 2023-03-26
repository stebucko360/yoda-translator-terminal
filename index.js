import inquirer from "inquirer";
import { yodaSpeak } from "./translator.js";
import { question1, question2 } from "./inquirerQuestions.js";

const yodaTranslator = async () => {
  const prompter = await inquirer.prompt(question1);
  const translation = yodaSpeak(prompter.questionForYoda);
  console.log(translation);
  const reDo = await inquirer.prompt(question2);

  if (reDo.askAgain === true) {
    yodaTranslator();
  } else return;
};

yodaTranslator();
