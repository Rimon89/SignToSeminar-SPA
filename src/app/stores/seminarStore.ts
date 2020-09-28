import { observable, action, computed } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { ISeminar } from "../models/seminar";
import { IUser } from "../models/user";

class SeminarStore {
    @observable seminarRegistry = new Map();
    @observable seminars: ISeminar[] = [];
    @observable selectedSeminar: ISeminar | undefined;
    @observable attendMode = false;

    @computed get seminarsByDate() {
        return Array.from(this.seminarRegistry.values()).sort((a, b) => Date.parse(a.dateTime) - Date.parse(b.dateTime))
    }

    @action loadSeminars = async () => {

        try{
            const seminars = await agent.Seminars.list();
            seminars.forEach((seminar) => {
                this.seminarRegistry.set(seminar.id ,seminar);
            })
        } catch (error) {
            console.log(error);
        }
    }

    @action createUser = async (user: IUser) => {
        try {
            await agent.Users.create(user);
            this.attendMode = false;
        } catch (error) {
            this.attendMode = false;
            console.log(error);
        }
    }

    @action openUserForm = async () => {
        this.attendMode = true;
    }

    @action closeUserForm = async () => {
        this.attendMode = false;
    }

    @action selectSeminar = (id: string) => {
        this.selectedSeminar = this.seminarRegistry.get(id);
        this.attendMode = false;
    }
}

export default createContext(new SeminarStore())