import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getById = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("SALARY_ACCOUNTS").collect();
  },
});

export const createSalary = mutation({
  args: {
    user_id: v.string(),
    email: v.string(),
    balance: v.float64(),
    income: v.float64(),
    expence: v.float64(),
    percent: v.float64(),
  },
  handler: async (cts, args) => {
    const userId = await cts.db.insert("SALARY_ACCOUNTS", {
      user_id: args.user_id,
      email: args.email,
      balance: args.balance,
      income: args.income,
      expence: args.expence,
      percent: args.percent,
    });
    return userId;
  },
});

export const updateBalance = mutation({
  args: {
    id: v.id("SALARY_ACCOUNTS"),
    balance: v.float64(),
    expence: v.float64(),
  },
  handler: async (ctx, args) => {
    const { id } = args;
    console.log(await ctx.db.get(id));

    await ctx.db.patch(id, { balance: args.balance, expence: args.expence });
    console.log(await ctx.db.get(id));
  },
});

export const updateBalanceIncome = mutation({
	args: { id: v.id("SALARY_ACCOUNTS"), balance: v.float64(), income: v.float64() },
	handler: async (ctx, args) => {
		const { id } = args;
    console.log(await ctx.db.get(id));

		await ctx.db.patch(id, { balance: args.balance, income: args.income});
		console.log(await ctx.db.get(id));
	}
})
