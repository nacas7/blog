import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: string[]): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.titulo.toLowerCase().indexOf(arg) > -1) {
        resultPosts.push(post);
      }
    }

    return resultPosts;
  }

}
