const source: number = 121;

function isPalindrome(x: number): boolean {
  const xString = x.toString();
  let newString: string = '';
  for (let i = xString.length; i >= 0; i--) {
    const a = xString.charAt(i);
    newString += a;
  }
  return newString === xString;
}

const ans = isPalindrome(source);

export {};
