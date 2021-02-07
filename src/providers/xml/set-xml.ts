import { Injectable } from '@nestjs/common';

@Injectable()
export class SetXml {

    setSetXml(rec:any){
        return rec;
    }
    setSetsXml(recs:Array<any>){
        return recs;
    }
}
