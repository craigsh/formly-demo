import { FormlyFieldConfig } from '@ngx-formly/core';
import { applyStandardOpts, buildClasses, StandardOpts } from './field-builders';

export type TransportableOutletFieldOpts = StandardOpts;

/**
 * Builds a Formly field that acts as a wrapper for a ui-transportable component.
 * @param key
 * @returns
 */
export const transportableOutletField = (
	targetClassName: string,
	opts?: TransportableOutletFieldOpts,
): FormlyFieldConfig => {
	const base = applyStandardOpts('', opts ?? {});

	const className = buildClasses(base.className, targetClassName, 'fd-transportable-outlet-field');

	const cfg = {
		...base,
		className,
		template: ``,
	} as FormlyFieldConfig;

	return cfg;
};
