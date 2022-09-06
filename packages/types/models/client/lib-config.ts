import { RunOnConfig } from "@tezjs/types";

export interface LibConfig{
    afterUserInteraction?:Function[];
    runOn?:RunOnConfig;
}