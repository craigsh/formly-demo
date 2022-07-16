import { getSizeClass, StandardOpts, applyStandardOpts, getStyle, buildClasses } from './field-builders';
import { FormlyFieldConfig } from '@ngx-formly/core';

type RowAlignment = 'start' | 'center' | 'end' | 'stretch' | 'baseline';

export type FlexOpts = Omit<StandardOpts, 'label'> & {
	fieldGroupClassName?: string;
	rowAlignment?: RowAlignment;
	inner?: boolean;
	topLevelRow?: boolean;
};

export type GroupOpts = Omit<StandardOpts, 'label'> & { fieldGroupClassName?: string };

/**
 * Builds a group of fields into a flex row. The size of the fields should add up to <= 6.
 */
export function flexRow(opts: FlexOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function flexRow(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function flexRow(arg1: FlexOpts | FormlyFieldConfig[], fieldConfig?: FormlyFieldConfig[]): FormlyFieldConfig {
	const opts = Array.isArray(arg1) ? ({} as FlexOpts) : (arg1 as FlexOpts);
	const fields = !Array.isArray(arg1) ? fieldConfig : arg1;

	const className = buildClasses(
		{ 'no-grow': opts.noGrow },
		getSizeClass(opts.size),
		opts.className,
		'flex-row-wrapper',
	);

	const rowAlignmentClass = opts.rowAlignment ? `flex-row-align-${opts.rowAlignment}` : '';
	const fieldGroupClassName = buildClasses(
		{ 'flex-row-inner': opts.inner, 'top-level': opts.topLevelRow },
		opts.fieldGroupClassName,
		'flex-row',
		rowAlignmentClass,
	);

	return {
		className,
		fieldGroupClassName,
		fieldGroup: fields,
		templateOptions: {
			debug: opts.debug,
		},
	} as FormlyFieldConfig;
}

/**
 * Builds a group of fields into a flex column.
 * @param opts
 * @param fieldConfig
 */
export function flexColumn(opts: FlexOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function flexColumn(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function flexColumn(arg1: FlexOpts | FormlyFieldConfig[], fieldConfig?: FormlyFieldConfig[]): FormlyFieldConfig {
	const opts = Array.isArray(arg1) ? ({} as FlexOpts) : (arg1 as FlexOpts);
	const fields = !Array.isArray(arg1) ? fieldConfig : arg1;

	const className = buildClasses(
		{ 'no-grow': opts.noGrow },
		getSizeClass(opts.size),
		opts.className,
		'flex-column-wrapper',
	);
	const fieldGroupClassName = buildClasses(opts.fieldGroupClassName, 'flex-column');

	return {
		className,
		fieldGroupClassName,
		fieldGroup: fields,
		templateOptions: {
			debug: opts.debug,
		},
	} as FormlyFieldConfig;
}

/**
 * Builds a group of fields.
 * @param opts
 * @param fieldConfig
 */
export function group(opts: GroupOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function group(groupClass: string, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function group(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
export function group(
	arg1: string | FormlyFieldConfig[] | GroupOpts,
	fieldConfig?: FormlyFieldConfig[],
): FormlyFieldConfig {
	{
		const opts = Array.isArray(arg1) ? ({} as GroupOpts) : (arg1 as GroupOpts);
		const fields = !Array.isArray(arg1) ? fieldConfig : arg1;

		const base = applyStandardOpts('', opts);
		const groupClassName = typeof arg1 === 'string' ? arg1 : '';

		const className = buildClasses(base.className, groupClassName);
		const fieldGroupClassName = buildClasses(opts.fieldGroupClassName);

		return {
			...base,
			className,
			fieldGroupClassName,
			templateOptions: {
				...base.templateOptions,
				attributes: {
					style: getStyle(opts.pixelWidth),
				},
			},
			fieldGroup: fields,
		};
	}
}
