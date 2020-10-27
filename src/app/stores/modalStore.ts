import { action, observable } from "mobx";
import { createContext } from "react";

export class ModalStore {

    @observable.shallow modal = {  //shallow means that body will not be observed deeply (observe of what inside body), just going to be obeservable on the first level of our react component (<LoginForm/>)
        open: false,
        body: null
    }

    @action openModal = (content: any) => {
        this.modal.open = true;
        this.modal.body = content;
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}
export default createContext(new ModalStore());