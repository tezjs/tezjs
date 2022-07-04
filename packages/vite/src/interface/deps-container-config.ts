import { DependencyConfig } from "./dependency-config";

export interface DepsContainerConfig{
    deps:{[key:string]:DependencyConfig};
    excludes:Array<string>;
    css:{[key:string]:string};
    highestPathDepth:number;
}