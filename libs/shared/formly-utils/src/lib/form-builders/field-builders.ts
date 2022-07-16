import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyHookFn, FormlyLifeCycleOptions } from '@ngx-formly/core/lib/components/formly.field.config';
import { Observable } from 'rxjs';
export type FieldSize = 1 | 2 | 3 | 4 | 5 | 6 | 25 | 40 | 50 | 60 | 75 | 100;

export interface StandardOpts {
	debug?: boolean;

	/**
	 * The label for the field.
	 */
	label?: string;

	/**
	 * The name of the control for security purposes.
	 */
	controlName?: string;

	/**
	 * The name of the class(es) to apply to the field.
	 */
	className?: string;

	/**
	 * The FieldSize of the field. (1 - 6)
	 */
	size?: FieldSize;

	/**
	 * The width of the field in pixels.
	 */
	pixelWidth?: number;

	/**
	 * When set, adds the no-grow class to prevent flex-grow: 1 being set on the last field in a flex row.
	 */
	noGrow?: boolean;

	/**
	 * Allows turning off the max-width on the field.
	 */
	noMaxWidth?: boolean;

	/**
	 * Allow overriding align-self on the field when in a flex layout.
	 */
	alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

	/**
	 * An expression that evaluates when to hide the field.
	 */
	hideExpression?: boolean | string | ((model: unknown, formState: unknown, field?: FormlyFieldConfig) => boolean);

	/**
	 * Custom expression properties for the field.
	 */
	expressionProperties?: {
		[property: string]:
			| string
			| ((model: unknown, formState: unknown, field?: FormlyFieldConfig) => unknown)
			| Observable<unknown>;
	};

	/**
	 * Formly templateOptions.
	 */
	templateOptions?: FormlyTemplateOptions;

	/**
	 * Formly validators.
	 */
	validators?: unknown;

	/**
	 * Formly hooks.
	 */
	hooks?: FormlyLifeCycleOptions<FormlyHookFn>;
}

export interface InputOpts extends StandardOpts {
	/**
	 * A placeholder for the field
	 */
	placeholder?: string;
	/**
	 * A description for the field
	 */
	description?: string;
	/**
	 * Whether the field is required.
	 */
	required?: boolean;
	/**
	 * A default value for the field.
	 */
	defaultValue?: unknown;
	/**
	 * Sets the field as readonly - i.e. it is focusable but not editable.
	 */
	readonly?: boolean;

	customErrorMessage?: string;

	/**
	 * Whether to focus the field. (By default, will only be focused when there's no oid on the object - i.e. a new instance)
	 */
	focus?: boolean;

	/**
	 * Overrides checking for an oid on the object - so will focus on an existing instance too.
	 */
	focusAlways?: boolean;

	/**
	 * Allows overriding the 'required' error message.
	 */
	requiredMessage?: string;
}

/**
 * Gets the class name for the (optional) size.
 * @param size
 * @returns
 */
export const getSizeClass = (size?: FieldSize | undefined) => {
	if (!size) {
		return '';
	}

	return `field-size-${size}`;
};

/**
 * Builds a list of classes from an object conditionally adding classes, and an additional list of classes to add.
 * @param conditionals
 * @param additionals
 * @returns
 */
export function buildClasses(
	conditionals: Record<string, boolean | undefined>,
	...additionals: (string | undefined)[]
): string;
export function buildClasses(cls: string | undefined, ...additionals: (string | undefined)[]): string;
export function buildClasses(
	arg1: Record<string, boolean | undefined> | (string | undefined)[] | (string | undefined),
	...additionals: (string | undefined)[]
): string {
	const conditionals = typeof arg1 === 'object' ? arg1 : {};
	const additionalClasses = typeof arg1 === 'object' ? additionals : [arg1, ...additionals];

	const classes = additionalClasses.filter((c) => c).join(' ');

	const classConditions = conditionals as Record<string, boolean | undefined>;

	return Object.keys(classConditions)
		.filter((c) => !!classConditions[c])
		.concat(classes)
		.join(' ')
		.trim();
}

export const getStyle = (pixelWidth?: number | undefined) => {
	if (pixelWidth === undefined) {
		return '';
	}

	return `width: ${pixelWidth}px`;
};

export const applyStandardOpts = (key: string | number | symbol, opts: StandardOpts) => {
	const style = getStyle(opts.pixelWidth);
	const attributes = style ? { attributes: { style } } : undefined;

	let base = {
		className: buildClasses(
			{
				'no-grow': opts.noGrow,
				'no-max-width': opts.noMaxWidth,
				['align-self-' + opts.alignSelf]: !!opts.alignSelf,
			},
			getSizeClass(opts.size),
			opts.className,
		),
		hideExpression: opts.hideExpression,
		expressionProperties: opts.expressionProperties,
		hooks: opts.hooks,
		validators: opts.validators,
		templateOptions: {
			controlName: opts.controlName || key || '',
			label: opts.label || '',
			debug: !!opts.debug,
		},
	};

	if (attributes) [(base = { ...base, templateOptions: { ...base.templateOptions, ...attributes } })];

	return base;
};

export const applyInputOpts = (key: string | number | symbol, opts: InputOpts): FormlyFieldConfig => {
	const base = {
		...applyStandardOpts(key, opts),
	};

	let expressionProperties = {
		...opts.expressionProperties,
	};
	if (opts.focus) {
		expressionProperties = {
			...expressionProperties,
			// Only apply focus if option is set and there's no OID.
			focus: `${opts.focus} && (!model.oid || ${opts.focusAlways})`,
		};
	}

	const templateOptions = {
		...base.templateOptions,
		...opts.templateOptions,
	};

	return {
		...base,
		templateOptions: {
			...templateOptions,
			label: opts.label || opts.placeholder,
			placeholder: opts.placeholder,
			description: opts.description,
			required: opts.required,
			readonly: opts.readonly,
			customErrorMessage: opts.customErrorMessage,
			requiredMessage: opts.requiredMessage,
		},
		defaultValue: opts.defaultValue,
		expressionProperties,
	};
};
