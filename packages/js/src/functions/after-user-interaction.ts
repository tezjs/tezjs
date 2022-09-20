import { jsContainer } from "../const/container.const";

export function afterUserInteraction(afterUserInteraction?: Function[]){
    jsContainer.addAfterInteration(afterUserInteraction)
}