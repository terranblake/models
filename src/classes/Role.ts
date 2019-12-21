import { prop } from '@typegoose/typegoose';

export class Role {
	@prop({ enum: ['statement', 'disclosure'], required: true })
	type: string;
	@prop()
	name: string;
	@prop()
	id: string;
}