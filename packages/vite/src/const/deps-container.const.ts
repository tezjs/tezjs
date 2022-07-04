import { DepsContainerConfig } from "../interface/deps-container-config";

export const depsContainer:
    {
        setDeps(deps:DepsContainerConfig);
        getDeps();
    } = new (class {
        deps:DepsContainerConfig
        setDeps(deps:DepsContainerConfig){
            this.deps = deps;
        }

        getDeps(){
            return this.deps;
        }
    })();