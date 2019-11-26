import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'sanitizer' })
export class Sanitizer {
	constructor(private sanitizer: DomSanitizer) { }

	transform(html) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(html);
	}
}