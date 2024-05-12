import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"

export default defineSchema({
	TRANSACTIONS: defineTable({
		trans_id: v.string(),
		email: v.string(),
		username: v.string(),
		type: v.string(),
		date: v.string(),
		amount: v.float64(),
	})
		.index("by_transid", ["trans_id"]),
	USERS: defineTable({
		user_id: v.string(),
		email: v.string(),
		username: v.string(),
		card: v.string(),
		phone: v.string(),
	})
		.index("by_userid", ["user_id"]),
});