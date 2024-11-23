//validation email by regex
export const validateEmail = (email) => {
  const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "g");

  return emailRegex.test(email);
};
