import { tezPages } from '../const/tez-pages';
import { TezPage } from '../models/tez-page';

export function registerTezPage(page:TezPage){
    tezPages.registerPage(page)
}