// This is a placeholder for the Password value object.
// It is referenced by User.
export class Password {
    private constructor(private readonly value: string) {}

    public static fromString(value: string): Password {
        return new Password(value);
    }

    public toString(): string {
        return this.value;
    }
}
