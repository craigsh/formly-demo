import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface RadioOption {
	label: string;
	value: string | number;
	disabled?: boolean;
}

export interface RadioFieldOpts extends InputOpts {
	options: RadioOption[];
	noGrid?: boolean;
	forceVertical?: boolean;
}

export const radioField = <TDto = object>(key: keyof TDto, opts: RadioFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'radio',
		...applyInputOpts(key, opts),
	};

	const className = buildClasses(
		{ 'no-radio-grid': opts.noGrid, 'force-vertical': opts.forceVertical },
		base.className,
		'fd-radio-field',
	);

	const cfg = {
		...base,
		className,
		templateOptions: {
			...base.templateOptions,
			options: opts.options,
		},
	} as FormlyFieldConfig;

	return cfg;
};
