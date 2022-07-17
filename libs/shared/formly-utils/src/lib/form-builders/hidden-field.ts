import { FormlyFieldConfig } from '@ngx-formly/core';
import { FieldSize, getSizeClass } from './field-builders';

export interface HiddenFieldOpts {
	size?: FieldSize;
}

export const hiddenField = <TDto = object>(key: keyof TDto, opts?: HiddenFieldOpts): FormlyFieldConfig => {
	return {
		key,
		template: '',
		className: getSizeClass(opts?.size),
	} as FormlyFieldConfig;
};
