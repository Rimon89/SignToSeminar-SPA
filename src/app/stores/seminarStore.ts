import { observable, action, computed, configure, runInAction } from 'mobx';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import agent from '../api/agent';
import { ISeminar } from '../models/seminar';
import { IUser } from '../models/user';

configure({ enforceActions: 'always' });

export class SeminarStore {
  @observable seminarRegistry = new Map();
  @observable seminar: ISeminar | null = null;
  @observable attendMode = false;
  @observable loadingInitial = false;
  @observable searchByDate: Date | Date[] | string = 'all'

  @action setSearchByDate = (value: Date | Date[] | string) => {
    this.searchByDate = value;
  }

  @computed get seminarsByDate() {
    if(this.searchByDate === 'all') {
      return Array.from(this.seminarRegistry.values())
    }
    const formatDate = this.searchByDate.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'})
    return Array.from(this.seminarRegistry.values()).filter(date => date.dateTime.split('T')[0] === formatDate);
  }

  @action loadSeminars = async () => {
    this.loadingInitial = true;
    try {
      const seminars = await agent.Seminars.list();
      runInAction('loading seminars', () => {
        seminars.forEach((seminar) => {
          this.seminarRegistry.set(seminar.id, seminar);
          this.loadingInitial = false;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action loadSeminar = async (id: string) => {
    this.loadingInitial = true;
    this.closeUserForm();
    try {
      let seminar = await agent.Seminars.details(id)
      runInAction('getting seminar', () => {
        this.seminar = seminar;
        this.loadingInitial = false;
      })
    } catch (error) {
      runInAction('get seminar error', () => {
        this.loadingInitial = false;
        console.log(error)
      })
    }
  } 

  @action createUser = async (user: IUser) => {
    try {
      await agent.Users.create(user);
      runInAction('creating attendee', () => {
        this.attendMode = false;
        toast.success('Thank you for choosing JoyEducation.');
      });
    } catch (error) {
      runInAction('create attendee error', () => {
        this.attendMode = true;
      });
      console.log(error.response);
    }
  };

  @action openUserForm = async () => {
    this.attendMode = true;
  };

  @action closeUserForm = async () => {
    this.attendMode = false;
  };

  @action selectSeminar = (id: string) => {
    this.seminar = this.seminarRegistry.get(id);
    this.attendMode = false;
  };
}

export default createContext(new SeminarStore());
