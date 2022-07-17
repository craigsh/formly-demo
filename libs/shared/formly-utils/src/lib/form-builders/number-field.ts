import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface NumberFieldOpts extends InputOpts {
	minValue?: number;
	maxValue?: number;
	defaultValue?: number;
	decimalPlaces?: number;
}

/**
 * Builds a Formly number field.
 * @param key
 * @param opts
 * @returns
 */
export const numberField = <TDto = object>(key: keyof TDto, opts: NumberFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'input',
		...applyInputOpts(key, opts),
	};

	let maxClass = '';
	if (opts.maxValue) {
		if (opts.maxValue > 9999) {
			maxClass = `wide`;
		}
	}

	const className = buildClasses({ 'pixel-width': !!opts.pixelWidth }, base.className, maxClass, 'fd-number-field');

	const cfg = {
		...base,
		className,
		templateOptions: {
			...base.templateOptions,
			type: 'number',
			min: opts.minValue,
			max: opts.maxValue,
			decimals: opts.decimalPlaces,
		},
	} as FormlyFieldConfig;

	return cfg;
};
