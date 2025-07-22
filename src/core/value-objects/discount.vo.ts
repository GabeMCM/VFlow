// This is a placeholder for the Discount value object.
// It is referenced by Sale.
export class Discount {
    private constructor(private readonly value: number) {}

    public static fromDecimal(value: number): Discount {
        return new Discount(value);
    }

    public toDecimal(): number {
        return this.value;
    }
}
