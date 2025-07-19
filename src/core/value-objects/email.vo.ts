//[class Email] -> representa e valida endereços de e-mail
export class Email {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }

  //[method fromString] -> cria uma instância de Email a partir de uma string
  public static fromString(value: string): Email {
    //[validate] -> regex para validação de email conforme RFC 5322
    const emailRegex = new RegExp(
      /^(([^<>()[\\]\\.,;:\s@"]+(\.[^<>()[\\]\\.,;:\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format.');
    }
    return new Email(value);
  }
}
