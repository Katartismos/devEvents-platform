"use server";

import Event, { IEvent } from "@/database/event.model"
import connectDB from "@/lib/mongodb";

export const getSimilarEventsBySlug = async (slug: string): Promise<IEvent[]> => {
    try {
        await connectDB();

        // Find the original event to get its ID and tags
        // We also use .lean() here because we only need the raw data (ID and tags)
        const event: IEvent | null = await Event.findOne({ slug }).lean() as IEvent | null; // Added .lean() here too for consistency and performance
        
        if (!event) return []; // Handle case where original event is not found

        // Find similar events excluding the original one and using its tags.
        // The .lean() method ensures this returns an array of plain IEvent objects.
        return await Event.find({
            _id: { $ne: event._id },
            tags: { $in: event.tags } 
        }).lean() as unknown as IEvent[];

    } catch (error) {
        // console.error(error); // Optional: log the error
        return [];
    }
};