import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface CheckFieldOpts extends InputOpts {
	shallow?: boolean;
	shallowTop?: boolean;
}

/**
 * Builds a Formly checkbox field.
 * @param key
 * @param opts
 * @returns
 */
export const checkboxField = <TDto = object>(key: keyof TDto, opts: CheckFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'checkbox',
		...applyInputOpts(key, opts),
	} as FormlyFieldConfig;

	const className = buildClasses(
		{ shallow: opts.shallow, 'shallow-top': opts.shallowTop },
		base.className,
		'fd-checkbox-field',
	);

	const cfg = {
		...base,
		className,
	};

	return cfg;
};
