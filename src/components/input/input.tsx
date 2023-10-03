const Input = (type: Type, placeholder: string, pattern: string) => {
  return <input type={type} placeholder={placeholder} pattern={pattern} />;
};

export const types = {
  Text: 'text',
  Password: 'password',
  Email: 'email',
} as const;

export type Type = (typeof types)[keyof typeof types];
export default Input;
