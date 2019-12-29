"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_1 = require("@postilion/utils");
// todo: how to handle pushing events into proper queues
// if these events are created in the past? should the event
// be updated with a ready flag when it is time to process
// the event, or should 
var eventSchema = new mongoose_1.Schema({
    // name of the queue which will likely consume this event
    // or a name without spaces that describes the event
    name: String,
    // classification based on the type of action
    // that needs to happen, or did happen, for this event
    type: {
        type: String,
        "enum": utils_1.enums.supported.eventTypes,
        required: true
    },
    // if grouped with other events of the same type
    // how important is it that this event is handled
    // before other events of the same type
    priority: {
        type: String,
        "enum": Object.values(utils_1.enums.supported.eventPriorities),
        required: true
    },
    // domain-specific identifier which groups events
    // by the relationships between models
    ref: {
        type: String,
        "enum": utils_1.enums.supported.eventRefs,
        required: true
    },
    // a Document id which is needed to handle this
    // event, or the result of this event occurring
    // e.g. 123 is the id of the company who's filings
    // should be updated because earnings were just released
    // or are going to be released in the near future
    refId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    // datetime that this event should occur. if this
    // field is undefined, the event is created with
    // the assumption that this event happened at the
    // time that it was created and therefore should
    // be consumed as something that has already occurred,
    // versus being scheduled for sometime in the future
    scheduledAt: Date,
    // should this event be processed if the scheduledAt
    // datetime has already passed?
    processInPast: {
        type: Boolean,
        "default": false,
        required: true
    },
    // free-form object to store a Document or 
    // any other related data that the event handler
    // might need to complete the action
    data: {
        type: Object,
        required: true
    },
    // when was this document created?
    createdAt: {
        type: Date,
        "default": Date.now()
    },
    // when was this document last updated?
    updatedAt: {
        type: Date,
        "default": Date.now()
    }
});
eventSchema.index({
    priority: 1,
    scheduledAt: 1
});
var eventModel = mongoose_1.model('Event', eventSchema);
exports["default"] = eventModel;
