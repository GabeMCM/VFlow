//[class DateTime] -> representa uma data e hora completa com timezone
export class DateTime {
  private readonly value: Date;

  private constructor(value: Date) {
    this.value = value;
  }

  //[method toISO] -> retorna a data em formato string ISO 8601
  public toISO(): string {
    return this.value.toISOString();
  }

  //[method fromISO] -> cria uma instância de DateTime a partir de uma string ISO
  public static fromISO(value: string): DateTime {
    const date = new Date(value);
    //[validate] -> garante que a data é válida
    if (isNaN(date.getTime())) {
      throw new Error('Invalid ISO 8601 DateTime format.');
    }
    return new DateTime(date);
  }

  //[method now] -> cria uma instância com a data e hora atuais
  public static now(): DateTime {
    return new DateTime(new Date());
  }
}
