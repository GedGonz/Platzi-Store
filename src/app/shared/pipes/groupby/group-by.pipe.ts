import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: any[], field: string): any[] {
    if (value) {
      const grouped = value.reduce((map, curr) => {
        map[curr[field]] ? map[curr[field]].push(curr) : (map[curr[field]] = [curr]);
        return map;
      }, {});

      console.log(Object.keys(grouped).map(key => ({ key, value: grouped[key] })));
      return Object.keys(grouped).map(key => ({ key, value: grouped[key] }));
    } else {
      return null;
    }

  }

}
