import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const URL = environment.urlImg;

@Pipe({
  name: 'viewImage'
})
export class ViewImagePipe implements PipeTransform {

  transform(nombreImg: string): string {
    let rutaImg = `${URL}/${nombreImg}`;
    return rutaImg;
  }

}
