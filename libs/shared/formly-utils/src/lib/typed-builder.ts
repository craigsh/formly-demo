import { FormlyFieldConfig } from '@ngx-formly/core';
import { FlexOpts, GroupOpts } from './form-builders/layout-builders';
import * as fb from '@demo/shared/formly-utils';
import {
	ButtonFieldOpts,
	CheckFieldOpts,
	HiddenFieldOpts,
	NumberFieldOpts,
	PanelWrapperOpts,
	RadioFieldOpts,
	TextFieldOpts,
	TransportableOutletFieldOpts,
} from '@demo/shared/formly-utils';
import { DateFieldOpts } from './form-builders/date-field';
import { SelectFieldOpts } from './form-builders/select-field';
import { ToggleFieldOpts } from './form-builders/toggle-field';

export class TypedBuilder<TDto> {
	buttonField(key: keyof TDto | '', opts: ButtonFieldOpts<TDto>): FormlyFieldConfig {
		return fb.buttonField(key, opts);
	}

	checkboxField(key: keyof TDto, opts: CheckFieldOpts): FormlyFieldConfig {
		return fb.checkboxField(key, opts);
	}

	dateField(key: keyof TDto, opts: DateFieldOpts): FormlyFieldConfig {
		return fb.dateField(key, opts);
	}

	hiddenField(key: keyof TDto, opts?: HiddenFieldOpts): FormlyFieldConfig {
		return fb.hiddenField(key, opts);
	}

	numberField(key: keyof TDto, opts: NumberFieldOpts): FormlyFieldConfig {
		return fb.numberField(key, opts);
	}

	radioField(key: keyof TDto, opts: RadioFieldOpts): FormlyFieldConfig {
		return fb.radioField(key, opts);
	}

	selectField(key: keyof TDto, opts: SelectFieldOpts): FormlyFieldConfig {
		return fb.selectField(key, opts);
	}

	textField(key: keyof TDto, opts: TextFieldOpts): FormlyFieldConfig {
		return fb.textField(key, opts);
	}

	toggleField(key: keyof TDto, opts: ToggleFieldOpts): FormlyFieldConfig {
		return fb.toggleField(key, opts);
	}

	transportableOutletField(targetClassName: string, opts?: TransportableOutletFieldOpts): FormlyFieldConfig {
		return fb.transportableOutletField(targetClassName, opts);
	}

	//
	// Layout builders/fields
	//
	flexRow(opts: FlexOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	flexRow(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	flexRow(arg1: FlexOpts | FormlyFieldConfig[], fieldConfig?: FormlyFieldConfig[]): FormlyFieldConfig {
		if (Array.isArray(arg1)) {
			return fb.flexRow(arg1);
		}
		return fb.flexRow(arg1 as FlexOpts, fieldConfig as FormlyFieldConfig[]);
	}

	flexColumn(opts: FlexOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	flexColumn(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	flexColumn(arg1: FlexOpts | FormlyFieldConfig[], fieldConfig?: FormlyFieldConfig[]): FormlyFieldConfig {
		if (Array.isArray(arg1)) {
			return fb.flexColumn(arg1);
		}
		return fb.flexColumn(arg1 as FlexOpts, fieldConfig as FormlyFieldConfig[]);
	}

	group(opts: GroupOpts, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	group(groupClass: string, fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	group(fieldConfig: FormlyFieldConfig[]): FormlyFieldConfig;
	group(arg1: string | FormlyFieldConfig[] | GroupOpts, fieldConfig?: FormlyFieldConfig[]): FormlyFieldConfig {
		if (Array.isArray(arg1)) {
			return fb.group(arg1);
		}
		if (typeof arg1 === 'string') {
			return fb.group(arg1, fieldConfig as FormlyFieldConfig[]);
		}
		return fb.group(arg1 as GroupOpts, fieldConfig as FormlyFieldConfig[]);
	}

	panelWrapper(controlName: string, opts: PanelWrapperOpts, content: FormlyFieldConfig[]): FormlyFieldConfig;
	panelWrapper(opts: PanelWrapperOpts, content: FormlyFieldConfig[]): FormlyFieldConfig;
	panelWrapper(
		arg1: string | PanelWrapperOpts,
		arg2: PanelWrapperOpts | FormlyFieldConfig[],
		arg3?: FormlyFieldConfig[],
	): FormlyFieldConfig {
		if (typeof arg1 === 'string') {
			return fb.panelWrapper(arg1, arg2 as PanelWrapperOpts, arg3 as FormlyFieldConfig[]);
		} else {
			return fb.panelWrapper(arg1 as PanelWrapperOpts, arg2 as FormlyFieldConfig[]);
		}
	}
}
