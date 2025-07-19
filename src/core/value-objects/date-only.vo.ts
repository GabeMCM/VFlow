//[class DateOnly] -> representa uma data sem hora
export class DateOnly {
  private readonly value: Date;

  private constructor(value: Date) {
    //[normalize] -> zera as horas para garantir que é apenas a data
    const year = value.getUTCFullYear();
    const month = value.getUTCMonth();
    const day = value.getUTCDate();
    this.value = new Date(Date.UTC(year, month, day));
  }

  //[method toISO] -> retorna a data em formato string YYYY-MM-DD
  public toISO(): string {
    return this.value.toISOString().split('T')[0];
  }

  //[method fromISO] -> cria uma instância a partir de uma string YYYY-MM-DD
  public static fromISO(value: string): DateOnly {
    const date = new Date(value);
    //[validate] -> garante que a data é válida
    if (isNaN(date.getTime())) {
      throw new Error('Invalid ISO 8601 DateOnly format.');
    }
    return new DateOnly(date);
  }
}
