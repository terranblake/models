import { prop } from '@typegoose/typegoose';

import { enums } from '@postilion/utils';

const { dateTypes } = enums;

export default class FactDate {
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