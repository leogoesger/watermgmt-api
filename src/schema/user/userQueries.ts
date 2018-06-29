import { Request } from "express";

import { getMe } from "./userServices";
import UserType from "./userType";

const userQueries = {
    getMe: {
        type: UserType,
        resolve(_parnetValue: any, _args: any, request: Request) {
            return getMe(request);
        },
    },
};

export default userQueries;
