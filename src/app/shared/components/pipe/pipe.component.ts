import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'dateFormat',
    pure: true
})
export class DateFormat implements PipeTransform {
    transform(value: any): string {
        
        var dateTime = new Date(value);
        var month = dateTime.getMonth() + 1;
        var date = dateTime.getDate();
        var year = dateTime.getFullYear();
        var formatDate = month + "/" + date + "/" + year;
        return formatDate;
    }
}

