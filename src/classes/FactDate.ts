import { prop } from '@typegoose/typegoose';

import { dateTypes } from '@pontilion/enums';

export class FactDate {
	@prop({ enum: dateTypes, required: true })
	type: string;

	@prop({ enum: [1, 2, 3, 4], required: false })
	quarter: number;

	year: number;

	value: Date | DateRange;
}

export class DateRange {
	start: Date;
	end: Date;
}