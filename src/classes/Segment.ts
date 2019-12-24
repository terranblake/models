export default interface Segment {
	dimension: Dimension;
	value: Value;
}

// the dimension property of the explicitMember element
interface Dimension {
	// enum: identifierPrefixes
	prefix: string;
	name: string;
}

// the value property of the explicitMember element
interface Value {
	// enum: identifierPrefixes
	prefix: string;
	name: string;
}