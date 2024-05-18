import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const getById = query({
	args:{},
	handler: async (ctx) => {
		return await ctx.db.query("TRANSACTIONS").collect();
	},
});

export const createTransfer = mutation({
  args: { email: v.string(),
		username: v.string(),
		from: v.string(),
		to: v.string(),
		type: v.string(),
		date: v.string(),
		amount: v.float64(),
		status: v.string() },
  handler: async (ctx, args) => {
    const transfer = await ctx.db.insert("TRANSACTIONS", { 
			email: args.email,
			username: args.username,
			from: args.from,
			to: args.to,
			type: args.type,
			date: args.date,
			amount:  args.amount,
			status: args.status
		});
		return transfer;
  },
});