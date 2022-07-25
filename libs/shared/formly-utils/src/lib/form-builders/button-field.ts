import { UntypedFormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyStandardOpts, buildClasses, StandardOpts } from './field-builders';

export interface ButtonFieldOpts<TDto = object> extends StandardOpts {
	/**
	 * The color of the button (primary, secondary, warn)
	 */
	color?: string;
	/**
	 * Whether to stretch the button to fill the field.
	 */
	stretch?: boolean;
	/**
	 * The click handler
	 */
	onClick: (ev: MouseEvent, model: TDto, form: UntypedFormGroup) => void;
}

/**
 * Builds a Formly button field.
 * @param key
 * @param opts
 * @returns
 */
export const buttonField = <TDto = object>(key: keyof TDto | '', opts: ButtonFieldOpts): FormlyFieldConfig => {
	if (opts.stretch && opts.pixelWidth) {
		console.warn(`buttonField: can't set stretch AND a pixelWidth`);
	}

	if (opts.size && opts.pixelWidth) {
		console.warn(`buttonField: can't set size AND a pixelWidth`);
	}

	const base = {
		key,
		type: 'fd-button',
		...applyStandardOpts(key, opts),
	};

	const className = buildClasses(opts.className, 'fd-button-field');

	const cfg = {
		...base,
		className,
		templateOptions: {
			...base.templateOptions,
			text: opts.label,
			color: opts.color,
			stretch: opts.stretch,
			onClick: opts.onClick,
		},
	} as FormlyFieldConfig;
	return cfg;
};
