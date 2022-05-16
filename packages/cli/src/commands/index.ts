import { buildCommand } from "./build";
import { devCommand } from "./dev";

export const  COMMANDS:{[key:string]:any} = {
    "dev":devCommand,
    "build":buildCommand
}