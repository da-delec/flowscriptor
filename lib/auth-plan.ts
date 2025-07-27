import { Plan } from "./generated/prisma";

export const LIMITATION:Record<Plan,{scriptLimit:number}> = {
    FREE:{
        scriptLimit:5
    },
    STARTER:{
        scriptLimit:20},
        ULTRA:{
        scriptLimit:100
        }
}