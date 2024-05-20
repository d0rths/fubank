import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getById = query({
	args:{},
	handler: async (ctx) => {
		return await ctx.db.query("USERS").collect();
	},
});

export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const userEmail = await ctx.db
      .query("USERS")
      .collect();
    return userEmail;
  },
});

export const createUser = mutation({
  args: { email: v.string(), username: v.string(), user_id: v.string(), card: v.string(), phone: v.string(), balance: v.float64(), income: v.float64(), expence: v.float64(), percent: v.float64(), last_login: v.string() },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("USERS", { 
			email: args.email, 
			username: args.username, 
			user_id: args.user_id,
			card: args.card, phone: 
			args.phone, 
			balance: args.balance, 
			income: args.income, 
			expence: args.expence,
			percent: args.percent,
			last_login: args.last_login,
		});
		return userId;
  },
});

export const updateUserPhone = mutation({
	args: { id: v.id("USERS"), phone: v.string() },
	handler: async (ctx, args) => {
		const { id } = args;
    console.log(await ctx.db.get(id));

		await ctx.db.patch(id, { phone: args.phone });
		console.log(await ctx.db.get(id));
	}
})

export const updateUsername = mutation({
	args: { id: v.id("USERS"), username: v.string() },
	handler: async (ctx, args) => {
		const { id } = args;
    console.log(await ctx.db.get(id));

		await ctx.db.patch(id, { username: args.username });
		console.log(await ctx.db.get(id));
	}
})

export const updateBalance = mutation({
	args: { id: v.id("USERS"), balance: v.float64(), expence: v.float64() },
	handler: async (ctx, args) => {
		const { id } = args;
    console.log(await ctx.db.get(id));

		await ctx.db.patch(id, { balance: args.balance, expence: args.expence });
		console.log(await ctx.db.get(id));
	}
})

export const updateBalanceIncome = mutation({
	args: { id: v.id("USERS"), balance: v.float64(), income: v.float64() },
	handler: async (ctx, args) => {
		const { id } = args;
    console.log(await ctx.db.get(id));

		await ctx.db.patch(id, { balance: args.balance, expence: args.income });
		console.log(await ctx.db.get(id));
	}
})