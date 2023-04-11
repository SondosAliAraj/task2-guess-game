// Write a program that generates an amount between 500 and 5k and asks the user
// to guess the check(bill), giving hints if the guess is too high or too low &
// the user can guess many times & when the user get it right , show him success message.

function guessCheck() {
  let count = 0; // count how many attempts takes to guess the number
  const amount = Math.floor(Math.random() * (5000 - 500 + 1) + 500); // return number between 500 - 5k

  //loop untill find the correct guess
  while (true) {
    const guess = parseInt(
      prompt("Guess game! Enter a guess between 500 and 5000:")
    );

    count++;

    if (isNaN(guess)) {
      alert("Invalid input, Please enter a number between 500 and 5000.");
    } else if (guess < 500) {
      alert("Your guess should be between 500 and 5000. Try again!");
    } else if (guess < amount) {
      alert("Your guess is too low. Try again!");
    } else if (guess > amount) {
      alert("Your guess is too high. Try again!");
    } else {
      alert(
        `Congratulations! You guessed the amount correctly in ${count} attempts.`
      );
      break;
    }
  }
}

guessCheck();

// https://sondosaliaraj.github.io/task2-guess-game/
