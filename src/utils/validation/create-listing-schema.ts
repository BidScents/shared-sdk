import { z } from "zod";
import { ListingType, ListingCategory, ListingBoxCondition } from "../../api";

/**
 * Validation schema with conditional requirements for auctions vs regular listings.
 */
export const createListingSchema = z
  .object({
    // Basic listing information
    type: z.nativeEnum(ListingType),
    name: z
      .string()
      .min(1, "Listing name is required")
      .max(100, "Name must be less than 100 characters"),
    brand: z
      .string()
      .min(1, "Brand is required")
      .max(50, "Brand must be less than 50 characters"),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(2000, "Description must be less than 2000 characters"),
    category: z.nativeEnum(ListingCategory),

    // Required numeric fields
    volume: z.number().int().positive().max(1000),
    remaining_percentage: z.number().min(0).max(100),
    quantity: z.number().int().positive().max(100),
    purchase_year: z.number().int().min(1900).max(new Date().getFullYear()),

    // Required enum
    box_condition: z.nativeEnum(ListingBoxCondition),

    // Required array (but can be empty initially, populated after upload)
    image_urls: z.array(z.string()).min(0).max(10),

    // Conditionally required fields
    price: z.number().positive().max(10000).optional(),
    starting_price: z.number().positive().optional(),
    bid_increment: z.number().positive().optional(),
    ends_at: z.string().datetime().optional(),
    is_extendable: z.boolean().optional(),

    // Always optional fields
    batch_code: z.string().max(50).optional(),
    buy_now_price: z.number().positive().optional(),
  })
  .refine(
    (data) => {
      // For non-auction listings: price is required
      if (data.type !== ListingType.AUCTION) {
        return data.price !== undefined && data.price > 0;
      }
      return true;
    },
    {
      message: "Price is required for non-auction listings",
      path: ["price"],
    }
  )
  .refine(
    (data) => {
      // For auction listings: starting_price is required
      if (data.type === ListingType.AUCTION) {
        return data.starting_price !== undefined && data.starting_price > 0;
      }
      return true;
    },
    {
      message: "Starting price is required for auction listings",
      path: ["starting_price"],
    }
  )
  .refine(
    (data) => {
      // For auction listings: bid_increment is required
      if (data.type === ListingType.AUCTION) {
        return data.bid_increment !== undefined && data.bid_increment > 0;
      }
      return true;
    },
    {
      message: "Bid increment is required for auction listings",
      path: ["bid_increment"],
    }
  )
  .refine(
    (data) => {
      // For auction listings: ends_at is required
      if (data.type === ListingType.AUCTION) {
        return data.ends_at !== undefined && data.ends_at.length > 0;
      }
      return true;
    },
    {
      message: "End date & time is required for auction listings",
      path: ["ends_at"],
    }
  )
  .refine(
    (data) => {
      // For auction listings: is_extendable is required
      if (data.type === ListingType.AUCTION) {
        return data.is_extendable !== undefined;
      }
      return true;
    },
    {
      message: "Extendable option is required for auction listings",
      path: ["is_extendable"],
    }
  )
  .refine(
    (data) => {
      // End time must be in the future for auctions
      if (data.type === ListingType.AUCTION && data.ends_at) {
        return new Date(data.ends_at) > new Date();
      }
      return true;
    },
    {
      message: "Auction end time must be in the future",
      path: ["ends_at"],
    }
  )
  .refine(
    (data) => {
      // Buy now price must be higher than starting price
      if (data.type === ListingType.AUCTION && data.buy_now_price) {
        const minimumPrice = data.starting_price || 0;
        return data.buy_now_price > minimumPrice;
      }
      return true;
    },
    {
      message: "Buy now price must be higher than starting price",
      path: ["buy_now_price"],
    }
  );

/**
 * Export the inferred type
 */
export type CreateListingFormData = z.infer<typeof createListingSchema>;
