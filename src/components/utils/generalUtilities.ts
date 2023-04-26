export const handlePasswordVerif = (password: string, minLength: number) => {
  const length = password.length >= minLength;
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const number = /[0-9]/.test(password);
  const special = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  return { length, upper, lower, number, special };
};

export const handlePasswordVerifError = () => {};
