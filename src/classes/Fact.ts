import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { class as Filing } from './Filing';
import { class as Company } from './Company';
import { class as Link } from './Link';
import { Segment } from './Segment';
import { FactDate } from './FactDate';

class Fact {
    @prop({ ref: Filing, required: true })
    filing: Ref<Filing>;

    @prop({ ref: Company, required: true })
    company: Ref<Company>;

    @prop({ required: true })
    name: string;
    // defines if the fact was created as the result of a link
    // being used (calculation arcs)
    @prop({ ref: Link })
    link: Ref<Link>;
    // used for facts which have a segment element defined in the
    // context that the fact references
    @prop()
    segment: Array<Segment>;
    @prop()
    date: FactDate;
    @prop()
    itemType: string;
    @prop()
    balance: string;
    @prop()
    sign: boolean;
    @prop()
    value: string;
    @prop()
    createdAt: Date;
    @prop()
    updatedAt: Date;
}

const FactModel = getModelForClass(Fact);

export {
    FactModel as model,
    Fact as class
};