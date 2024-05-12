import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const getById = query({
	// args: { transId: v.id("TRANSACTIONS") },
	args:{},
	handler: async (ctx) => {
		// const identity = await ctx.auth.getUserIdentity();
		// const TRANSACTIONS = await ctx.db.get(args.transId);

		return await ctx.db.query("TRANSACTIONS").collect();
	},
});