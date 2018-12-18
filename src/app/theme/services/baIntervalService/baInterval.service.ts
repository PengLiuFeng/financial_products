import {Injectable} from '@angular/core';

@Injectable()
export class BaIntervalService {
    interval;
    setInterval(time: number, callback: () => void) {
        this.interval = setInterval(callback, time);
    }

    clearInterval() {
        clearInterval(this.interval);
    }

}
