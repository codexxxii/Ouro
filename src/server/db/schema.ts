import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Tables
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  clerk_id: text("clerk_id").unique().notNull(),
  first_name: text("first_name").notNull(),
  last_name: text("last_name").notNull(),
  age: text("age").notNull(),
  weight: text("weight").notNull(),
});

export const heights = pgTable("heights", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  user_id: text("user_id")
    .references(() => users.clerk_id, { onDelete: "cascade" })
    .notNull(),
  feet: text("feet").notNull(),
  inches: text("inches").notNull(),
});

// Relations
export const userRelations = relations(users, ({ one }) => ({
  height: one(heights, {
    fields: [users.clerk_id],
    references: [heights.user_id],
  }),
}));

export const heightRelations = relations(heights, ({ one }) => ({
  user: one(users, { fields: [heights.user_id], references: [users.clerk_id] }),
}));
