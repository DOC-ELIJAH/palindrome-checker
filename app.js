const getPalindrome = (word) => {
  const myArr = [];
  let Rword = "";

  for (let i = 0; i < word.length; i++) {
    myArr.push(word[i]);
  }
  for (let i = 0; i < word.length; i++) {
    Rword = Rword + myArr.pop();
  }
  return word === Rword ? true : false;
};

console.log(getPalindrome("madam"));

document.write(getPalindrome("madam"));
