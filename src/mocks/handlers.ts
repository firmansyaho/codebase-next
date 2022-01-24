import { rest } from "msw";
import { nftData as NFT } from "./Dashboard";
import { signUpData } from "./SignUp";

export const handlers = [
    rest.get("/dashboard", (req, res, ctx) => {
        return res(ctx.json(NFT));
    }),

    rest.post("/signup", (req: { body: string }, res, ctx) => {
        const body = JSON.parse(req.body);
        const { firstName, lastName } = body;
        return res(
            ctx.json({
                ...signUpData,
                profile: {
                    ...signUpData.profile,
                    firstName,
                    lastName,
                },
            })
        );
    }),
];
