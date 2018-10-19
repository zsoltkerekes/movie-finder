import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, search = '') {
    if (search.length === 0) {
      return value;
    } else {
      return value.filter(
        row => {
          let output = false;

          if (row.job) {
            output = output || row.job.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          if (row.title) {
            output = output || row.title.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          if (row.name) {
            output = output || row.name.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          if (row.original_title) {
            output = output || row.original_title.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          if (row.original_name) {
            output = output || row.original_name.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          if (row.character) {
            output = output || row.character.toUpperCase().indexOf(search.toUpperCase()) !== -1 ? true : false;
          }

          return output;
        }
      );
    }
  }

}
