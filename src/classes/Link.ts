import { prop, getModelForClass, Ref } from '@typegoose/typegoose';

import { class as Filing } from './Filing';
import { class as Company } from './Company';
import { LinkRole, Linkage } from './LinkMetadata';

class Link {
    @prop({ ref: Filing, required: true })
    filing: Ref<Filing>;

    @prop({ ref: Company, required: true })
    company: Ref<Company>;

    @prop({ required: true })
    name: string;

    @prop({ ref: LinkRole, required: true })
    role: Ref<LinkRole>;

    @prop({ ref: Linkage, required: true })
    to: Ref<Linkage>;
    @prop({ ref: Linkage, required: true })
    from: Ref<Linkage>;

    order: number;
    weight: number;
    type: string;
});

const LinkModel = getModelForClass(Link);

export {
    LinkModel as model,
    Link as class
};