import { GroupsModel } from '../models/groups-model';
import { screens } from '../data/screens';

export class DataAccess {

    GetScreensData() {
        let screensData = this.ReadJson();
        return screensData;
    }

    ReadJson() {
        return screens[0];
    }
}