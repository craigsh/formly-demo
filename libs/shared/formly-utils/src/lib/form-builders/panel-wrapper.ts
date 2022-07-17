import { flexRow } from './layout-builders';
import { applyStandardOpts, buildClasses, StandardOpts } from './field-builders';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface PanelWrapperOpts extends StandardOpts {
	wrapperClassName?: string;
	fieldGroupClassName?: string;
	wrapInFlexRow?: boolean;
	noBottomMargin?: boolean;
	bottomPadding?: boolean;
	borderLight?: boolean;
	labelLight?: boolean;
}

export function panelWrapper(
	controlName: string,
	opts: PanelWrapperOpts,
	content: FormlyFieldConfig[],
): FormlyFieldConfig;
export function panelWrapper(opts: PanelWrapperOpts, content: FormlyFieldConfig[]): FormlyFieldConfig;
export function panelWrapper(
	arg1: string | PanelWrapperOpts,
	arg2: PanelWrapperOpts | FormlyFieldConfig[],
	arg3?: FormlyFieldConfig[],
): FormlyFieldConfig {
	const controlName = typeof arg1 === 'string' ? arg1 : '';
	const opts: PanelWrapperOpts = typeof arg1 === 'string' ? (arg2 as PanelWrapperOpts) : arg1;
	const content: FormlyFieldConfig[] =
		typeof arg1 === 'string' ? (arg3 as FormlyFieldConfig[]) : (arg2 as FormlyFieldConfig[]);

	const base = {
		wrappers: ['panel'],
		...applyStandardOpts(controlName, opts),
		fieldGroupClassName: buildClasses(opts.fieldGroupClassName),
		fieldGroup: opts.wrapInFlexRow ? [flexRow(content)] : content,
	} as FormlyFieldConfig;

	const wrapperClassName = buildClasses(
		{
			'no-bottom-margin': opts.noBottomMargin,
			'bottom-padding': opts.bottomPadding,
		},
		opts.wrapperClassName,
	);

	const cfg = {
		...base,
		templateOptions: {
			...base.templateOptions,
			wrapperClassName,
			borderClassName: buildClasses({ 'border-light': opts.borderLight, 'label-light': opts.labelLight }),
		},
	};

	return cfg;
}
