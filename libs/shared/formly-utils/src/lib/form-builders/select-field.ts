import { SelectItem } from '@demo/shared-models';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { applyInputOpts, buildClasses, InputOpts } from './field-builders';

export interface SelectOption {
	label: string;
	value?: string | number;
	disabled?: boolean;
}

export interface SelectFieldOpts extends InputOpts {
	options?: SelectOption[] | Observable<SelectOption[]>;
	lookups?: Observable<SelectItem[]>;
	allowRemoveExisting?: boolean;
	valueProp?: string;
	labelProp?: string;
}

export const selectField = <TDto = object>(key: keyof TDto | '', opts: SelectFieldOpts): FormlyFieldConfig => {
	const base = {
		key,
		type: 'select',
		...applyInputOpts(key, opts),
	};

	let cfg = {
		...base,
		className: buildClasses(base.className, 'fd-select-field'),
		templateOptions: {
			...base.templateOptions,
			options: opts.lookups,
			valueProp: opts.valueProp || 'value',
			labelProp: opts.labelProp || 'label',
		},
	} as FormlyFieldConfig;

	if (opts.options) {
		cfg = {
			...cfg,
			templateOptions: {
				...cfg.templateOptions,
				valueProp: 'oid',
				labelProp: 'desc',
			},
		};
	}

	if (opts.allowRemoveExisting) {
		cfg = {
			...cfg,
			templateOptions: {
				...cfg.templateOptions,
				addonRight: {
					icon: 'close',
					onClick: (
						_options: unknown,
						_wrapper: { field: { formControl: { setValue: (arg0: null) => void } } },
						e: Event,
					) => {
						e.preventDefault();
						e.stopPropagation();

						_wrapper.field.formControl.setValue(null);
					},
				},
			},
		};
	}

	cfg = {
		...cfg,
		templateOptions: {
			...cfg.templateOptions,
			keydown: (field: FormlyFieldConfig, e: KeyboardEvent) => {
				if (!opts.allowRemoveExisting) {
					return;
				}

				if (e.key === 'Delete' || e.key === 'Backspace') {
					field?.formControl?.setValue(null);
				}
			},
		},
	};

	return cfg;
};
