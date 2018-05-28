import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'dateFormatHTML',
    pure: true
})
export class DateFormatHTML implements PipeTransform {
    transform(value: any): string {
        
        var dateTime = new Date(value);
        var month = dateTime.getMonth() + 1;
        var date = dateTime.getDate();
        var year = dateTime.getFullYear();
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        var seconds = dateTime.getSeconds();
        var formatDate = month + "/" + date + "/" + year + " " + hours +":"+minutes+":"+seconds ;
        return formatDate;
    }
}

