const checkButton = document.getElementById('check-btn');
const enterInput = document.getElementById('text-input');
const result = document.getElementById('result');
const removeNonAlphaNumeric = (text) => text.replace(/[\W_]/g, '').toLowerCase();
const checkPalindrome = inputText => {
  const cleanedInput = removeNonAlphaNumeric(inputText);
  return cleanedInput === cleanedInput.split('').reverse().join('');
};

checkButton.addEventListener("click", function() {
  const userInput = enterInput.value;
  if(userInput.trim().length === 0) alert('Please input a value!');
  const isPalindrome = checkPalindrome(userInput);
  if(isPalindrome) {
    result.innerHTML = `<span class='highlight'>${userInput}</span> is a palindrome`;
  } else {
    result.innerHTML = `<span class='highlight'>${userInput}</span> is not a palindrome`;
  }
});
