interface IMapField {
	fields: Record<string, Field>;
	repeated: boolean;
	optional: boolean;
}

export default class Field {

	// #region Types

	public static get string() {
		return new this('UTF8');
	}

	public static get integer() {
		return new this('INT64');
	}

	public static get float() {
		return new this('DOUBLE');
	}

	public static get timestamp() {
		return new this('TIMESTAMP_MILLIS');
	}

	public static get boolean() {
		return new this('BOOLEAN');
	}

	public static get date() {
		return new this('DATE');
	}

	public static arrayOf(type: Field): Field {
		const f = new this(type.type);
		f.array();
		return f;
	}

	public static map(fields: Record<string, Field>, array: boolean = false): IMapField {
		return {
			fields,
			repeated: array,
			optional: true,
		};
	}

	// #endregion

	public type: string;

	public optional: boolean = true;

	public repeated: boolean = false;

	constructor(type: string) {
		this.type = type;
		this.optional = true;
	}

	public required(): this {
		this.optional = false;
		return this;
	}

	public array(): this {
		this.repeated = true;
		return this;
	}
}
