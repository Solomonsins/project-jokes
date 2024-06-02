const jokeList = [
  {
    question: "Why don't programmers like nature?",
    answer: "It has too many bugs."
  },
  {
    question: "Why did the CSS developer go to therapy?",
    answer: "To get rid of his margins."
  },
  {
    question: "How do you comfort a JavaScript developer?",
    answer: "You console them"
  },
  {
    question: "Why did the CSS developer leave the restaurant?",
    answer: "Because it had no class."
  },
  {
    question: "Why did the JavaScript developer go missing?",
    answer: "Because he didn't know when to return."
  },
  {
    question: "Why did the HTML tag go to the party?",
    answer: "Because it wanted to break the line."
  },
  {
    question: "Why do JavaScript developers wear glasses?",
    answer: "Because they don't C#."
  },
  {
    question: "Why don't programmers like to use inline styles?",
    answer: "Because they want to be classy."
  },
  {
    question: "Why did the CSS selector break up with the HTML element?",
    answer: "It found someone more specific."
  },
  {
    question: "Why did the CSS developer apply for a job?",
    answer: "They wanted to get a position."
  },
];

const randomIndex1 = Math.floor(Math.random() * jokeList.length);

let randomIndex2;
do {
  randomIndex2 = Math.floor(Math.random() * jokeList.length);
} while (randomIndex2 === randomIndex1);

const randomJoke1 = jokeList[randomIndex1];
const randomJoke2 = jokeList[randomIndex2];

console.log("")
console.log("Welcome to the joke factory!")
console.log(`Joke #${randomIndex1 + 1}`)
console.log(`Question: ${randomJoke1.question}`)
console.log(`Answer: ${randomJoke1.answer}`)
console.log("Here is another one")
console.log(`Joke #${randomIndex2 + 1}`)
console.log(`Question: ${randomJoke2.question}`)
console.log(`Answer: ${randomJoke2.answer}`)
console.log("")







