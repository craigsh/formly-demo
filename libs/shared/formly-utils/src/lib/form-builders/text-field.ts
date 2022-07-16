import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface TextFieldOpts extends InputOpts {
	/**
	 * The maximum input length
	 */
	maxLength?: number;
}

/**
 * Builds a Formly text field.
 * @param key
 * @param opts
 * @returns
 */
export const textField = <TDto = object>(key: keyof TDto, opts: TextFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'input',
		...applyInputOpts(key, opts),
	};

	const cfg = {
		...base,
		className: buildClasses(base.className, 'fd-text-field'),
		templateOptions: {
			...base.templateOptions,
			maxLength: opts.maxLength,
		},
	} as FormlyFieldConfig;

	return cfg;
};
