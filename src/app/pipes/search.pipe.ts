import { Pipe, PipeTransform } from '@angular/core';
interface Value {
  job: string;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  character: string;
}

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  valueFilter(row: Value, search: string): boolean {
    let output = false;

    if (row.job) {
      output =
        output || row.job.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    if (row.title) {
      output =
        output || row.title.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    if (row.name) {
      output =
        output || row.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    if (row.original_title) {
      output =
        output ||
        row.original_title.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    if (row.original_name) {
      output =
        output ||
        row.original_name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    if (row.character) {
      output =
        output ||
        row.character.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }

    return output;
  }

  transform(value: Value[], search = ''): Value[] {
    if (search.length === 0) {
      return value;
    }

    return value.filter((row: Value) => this.valueFilter(row, search));
  }
}
