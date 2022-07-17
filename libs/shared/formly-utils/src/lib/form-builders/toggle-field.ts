import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface ToggleFieldOpts extends InputOpts {
	shallow?: boolean;
	labelPosition?: 'before' | 'after';
}

/**
 * Builds a formly slide toggle field.
 * @param key
 * @param opts
 * @returns
 */
export const toggleField = <TDto = object>(key: keyof TDto, opts: ToggleFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'toggle',
		...applyInputOpts(key, opts),
	};

	const className = buildClasses({ shallow: opts.shallow }, base.className, 'fd-toggle-field');

	const cfg = {
		...base,
		className,
		templateOptions: {
			...base.templateOptions,
			labelPosition: opts.labelPosition,
		},
	} as FormlyFieldConfig;

	return cfg;
};
