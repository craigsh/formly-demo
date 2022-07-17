import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface DateFieldOpts extends InputOpts {
	defaultValue?: Date | string;
	min?: Date | string;
	max?: Date | string;
}

export const dateField = <TDto = object>(key: keyof TDto, opts: DateFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'datepicker',
		...applyInputOpts(key, opts),
	};

	const cfg = {
		...base,
		className: buildClasses(base.className, 'fd-date-field'),
		modelOptions: { updateOn: 'blur' },
		templateOptions: {
			...base.templateOptions,
			min: opts.min,
			max: opts.max,
		},
	} as FormlyFieldConfig;

	return cfg;
};
