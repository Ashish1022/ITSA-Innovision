import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    events: defineTable({
        eventTitle: v.string(),
        eventCategory: v.string(),
        eventDescription: v.string(),
        location: v.string(),
        eventType: v.boolean(),
        url: v.string(),

        imageUrl: v.string(),
        imageStorageId: v.optional(v.id("_storage")),

        startDateTime: v.string(),
        endDateTime: v.string(),

        price: v.string(),
        isFree: v.boolean(),
    }),
    users: defineTable({
        fullName: v.string(),
        username: v.string(),
        title: v.string(),
        about: v.string(),
        portfolioUrls: v.optional(v.array(v.string())),
        profileImageUrl: v.optional(v.string()),
        favoritedSellerIds: v.optional(v.array(v.string())),
        tokenIdentifier: v.string(),
        customTag: v.optional(v.string()),
        isMember: v.optional(v.boolean())
    })
        .index("by_token", ["tokenIdentifier"])
        .index("by_username", ["username"]),
})