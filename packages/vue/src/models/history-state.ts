export interface HistoryState{
        back?: string,
        current?: string,
        forward?: string,
        position?: number,
        replaced?: Boolean,
        scroll?: {left:number,top:number},
}