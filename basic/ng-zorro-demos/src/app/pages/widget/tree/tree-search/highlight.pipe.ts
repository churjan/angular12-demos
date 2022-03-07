import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(
    value: string,
    keyword: string,
    bgColor: string = '#fffe55',
    color: string = 'inherit'
  ): any {
    const keywordExp = new RegExp(keyword, 'ig');
    const cssText = `background-color:${bgColor};color:${color}`;

    if (value) {
      const matchResult = value.match(keywordExp);
      const isMatch = matchResult !== null;

      if (isMatch) {
        let html = value.replace(
          keywordExp,
          `<span style="${cssText}">{{replace}}</span>`
        );

        matchResult.forEach((str) => {
          html = html.replace('{{replace}}', str);
        });

        return this.sanitizer.bypassSecurityTrustHtml(html);


      }

      return value;
    }
  }
}
