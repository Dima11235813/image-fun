
import { RouterStore } from 'mobx-react-router';

export class RootStore {
    routerStore: RouterStore
 
    constructor() {
        this.routerStore = new RouterStore();
    }
}