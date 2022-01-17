module.exports = function toReadable (number) {

  const firstPartOfDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondPartOfDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const thirdPartOfDigits = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numString = number.toString();

  if (number == 0) {
    return 'zero';
  } else if (number < 10) {
    return firstPartOfDigits[number];
  } else if (number >= 10 && number < 20) {
    return secondPartOfDigits[number - 10];
  } else if (number >= 20 && number < 100) {
    return (thirdPartOfDigits[Math.floor(number / 10)] + " " + firstPartOfDigits[number % 10]).trim();
  } else if (numString.length == 3) {
    if (numString[1] == 0 && numString[2] == 0)
      return firstPartOfDigits[numString[0]] + ' hundred';
    else
      return firstPartOfDigits[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
  }
}
