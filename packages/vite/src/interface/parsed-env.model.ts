import { KeyDefinition } from "./key-definition";

export interface ParsedEnv {
    client?:KeyDefinition;
    server?:KeyDefinition;
}
