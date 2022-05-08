export default{
    setPages(state:any,pages:{[key:string]:[]}){
        state.pages = pages;
    },

    setActivePageUrl(state:any,url:string){
        state.activePageUrl = url;
    },

    setPageSlots(state:any,pageSlots:any){
        state.pageSlots = pageSlots
    },

    setMasterPageSlots(state:any,pageSlots:any){
        state.masterPageSlots = pageSlots
    },

    setMasterPages(state:any,pages:{[key:string]:[]}){
        state.masterPages = pages;
    }


    
}