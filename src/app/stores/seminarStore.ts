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
  @observable loadingInitial = false;
  @observable searchByDateOrName: Date | Date[] | string = 'all'

  @action setSearchByDateOrName = (value: Date | Date[] | string) => {
    this.searchByDateOrName = value;
  }

  @computed get seminarsByDateOrName() {
    if(this.searchByDateOrName === 'all') {
      return Array.from(this.seminarRegistry.values()).filter(seminar => seminar.availableSeats > 0)
    }
    const formatDate = this.searchByDateOrName.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric'})
    return Array.from(this.seminarRegistry.values()).filter(seminar => seminar.availableSeats > 0)
          .filter(date => date.dateTime.split('T')[0] === formatDate
           || date.name.toLowerCase().includes(this.searchByDateOrName)
           || date.category.toLowerCase() === this.searchByDateOrName);
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
        toast.success('Thank you for choosing JoyEducation.');
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  @action selectSeminar = (id: string) => {
    this.seminar = this.seminarRegistry.get(id);
  };
}

export default createContext(new SeminarStore());
