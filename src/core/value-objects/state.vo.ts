// This is a placeholder for the State value object.
// It is referenced by Address.
export class State {
    private constructor(private readonly value: string) {}

    public static fromString(value: string): State {
        return new State(value);
    }

    public toString(): string {
        return this.value;
    }
}
