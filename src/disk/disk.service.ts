import { Injectable } from '@nestjs/common';
import { PowerService} from "../power/power.service";

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {

    }

    diskRead(a: number){
        console.log("Drawing 8 watts");
        this.powerService.supplyPower(8);
        return a;
    }
}
