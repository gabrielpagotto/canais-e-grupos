export default class SignupFormValidator {
  public static validateName(name: string) {
    if (name.length < 4) {
      return "Nome deve possuir ao menos 4 caracteres";
    }
  }

  public static validateEmail(email: string) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return "O email informado não é válido";
    }
  }

  public static validatePassword(password: string) {
    if (password.length < 4) {
      return "Senha deve possuir ao menos 4 caracteres";
    }
  }

  public static validatePasswordConfirmation(
    password: string,
    passwordConfirmation: string
  ) {
    if (password.length === 0) {
      return null;
    }
    if (password != passwordConfirmation) {
      return "Senha e confirmação de senha devem ser iguais";
    }
  }

  public static getErrors(props: { name: string; email: string; password: string; passwordConfirmation: string }) {
    return {
      name: SignupFormValidator.validateName(props.name),
      email: SignupFormValidator.validateEmail(props.email),
      password:
        SignupFormValidator.validatePassword(props.password),
      passwordConfirmation: SignupFormValidator.validatePasswordConfirmation(
        props.password,
        props.passwordConfirmation
      )
    }
  }
}
