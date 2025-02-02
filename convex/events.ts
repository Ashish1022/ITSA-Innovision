// export const createEvent = 

import { v } from "convex/values";
import { mutation, query } from "./_generated/server";


export const createEvent = mutation({
    args: {
        eventTitle: v.string(),
        eventCategory: v.string(),
        eventDescription: v.string(),
        location: v.string(),
        imageStorageId: v.id('_storage'),
        imageUrl: v.string(),
        startDateTime: v.string(),
        endDateTime: v.string(),
        price: v.string(),
        isFree: v.boolean(),
        eventType: v.boolean(),
        url: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("events", {
            eventTitle: args.eventTitle,
            eventCategory: args.eventCategory,
            eventDescription: args.eventDescription,
            location: args.location,
            imageUrl: args.imageUrl,
            startDateTime: args.startDateTime,
            endDateTime: args.endDateTime,
            price: args.price,
            isFree: args.isFree,
            eventType: args.eventType,
            url: args.url,
        })
    }
})

export const getUrl = mutation({
    args: {
        storageId: v.id("_storage")
    },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.storageId);
    }
});

export const getAllEvents = query({
    handler: async (ctx) => {
        return await ctx.db.query("events").order("desc").collect();
    },
});

export const getUpcomingEvnts = query({
    args: {
        eventId: v.id("events")
    },
    handler: async (ctx, args) => {
        const event = await ctx.db.get(args.eventId);
        return await ctx.db.query("events").filter((q) => q.and(q.eq(q.field("eventType"), event?.eventType), q.neq(q.field("_id"), args.eventId))
        ).collect();
    }
})

export const getEventById = query({
    args: {
        eventId: v.id("events")
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.eventId);
    }
})