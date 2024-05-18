import { defineSchema, defineTable } from "convex/server";
import {v} from "convex/values"

export default defineSchema({
	TRANSACTIONS: defineTable({
		email: v.string(),
		username: v.string(),
		from: v.string(),
		to: v.string(),
		type: v.string(),
		date: v.string(),
		amount: v.float64(),
		status: v.string(),
	})
		.index("by_transemail", ["email"]),
	USERS: defineTable({
		user_id: v.string(),
		email: v.string(),
		username: v.string(),
		card: v.string(),
		phone: v.string(),
		balance: v.float64(),
		income: v.float64(),
		expence: v.float64(),
	})
		.index("by_userid", ["user_id"]),
});