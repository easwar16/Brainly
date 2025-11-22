export const random = (len: number) => {
  let options = "qwertyuiopasdfghjklzxcvbnm1234567890";
  let optionLength = options.length;
  let res = "";
  for (let i = 0; i < len; i++) {
    res += options[Math.round(Math.random() * (optionLength - 1))];
    console.log(Math.random() * optionLength);
  }
  return res;
};
