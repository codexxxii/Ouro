import { createUserSchema, createHeightSchema } from "@/server/db/schema";
import { z } from "zod";

// Schemas
export const userSchema = createUserSchema
  .omit({
    id: true,
    created_at: true,
    updated_at: true,
    clerk_id: true,
  })
  .extend({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    age: z.string().min(1),
    weight: z.string().min(1),
    height: z.object({
      feet: z.string().min(1),
      inches: z.string().min(1),
    }),
  });

export const heightSchema = createHeightSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

// Types
export type UserSchema = z.infer<typeof userSchema>;
