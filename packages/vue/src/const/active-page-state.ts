import { reactive } from "vue";
import { PageState } from "../models/page-state";

export const activePageState:
{
    setActivePage(pageState:PageState):void;
    page:PageState;
} = new (class {
    page= reactive<PageState>({url:'',components:{},masterPage:{}});
    setActivePage(pageState:PageState){
        this.page.components =pageState.components;
        this.page.masterPage = pageState.masterPage;
        this.page.url = pageState.url;
    }
})();