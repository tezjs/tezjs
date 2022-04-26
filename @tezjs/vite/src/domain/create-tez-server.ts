import { createViteServer } from './create-vite-server';
import AllRouter from './express-routes/all.router';
import {AppRouter } from './express-routes/app.router'
import RoutesRouter from './express-routes/routes.router';
import { commonContainer } from '@tezjs/common';
export async function createTezServer(){
    let vite = await createViteServer();
    commonContainer.setupConfig();
    var appRouter = new AppRouter([new RoutesRouter(),new AllRouter(vite)],vite);
    return appRouter.setup();
}