import { FormlyFieldConfig } from '@ngx-formly/core';
import { FlexOpts, GroupOpts } from './form-builders/layout-builders';
import * as fb from '@demo/shared/formly-utils';
import { TextFieldOpts } from '@demo/shared/formly-utils';
// import {
// 	ButtonFieldOpts,
// 	CheckFieldOpts,
// 	CheckListFieldOpts,
// 	CheckTreeFieldOpts,
// 	ChipsInputFieldOpts,
// 	ColorFieldOpts,
// 	ColorSampleFieldOpts,
// 	DateFieldOpts,
// 	DateRangeFieldOpts,
// 	DisplayFieldOpts,
// 	FileUploadFieldOpts,
// 	FlexOpts,
// 	GroupBoxWrapperOpts,
// 	GroupOpts,
// 	HiddenFieldOpts,
// 	HtmlEditorFieldOpts,
// 	IncrementPickerOpts,
// 	MultiStaffMasterFieldOpts,
// 	NumberFieldOpts,
// 	RadioFieldOpts,
// 	RanksGradesCheckListFieldOpts,
// 	ReadOnlyListFieldOpts,
// 	SecurityGroupAccessFieldOpts,
// 	SecurityGroupTreeFieldOpts,
// 	SelectFieldOpts,
// 	TabsFieldOpts,
// 	TemplateFieldOpts,
// 	TextareaFieldOpts,
// 	TextFieldOpts,
// 	TimeFieldOpts,
// 	TimeValueFieldOpts,
// 	ToggleFieldOpts,
// 	TransportableOutletFieldOpts,
// 	UnitTeamTreeFieldOpts,
// 	UnitUnitMasterFieldOpts,
// } from '@siza-staff-care/shared/ui-components/form-builders';

export class TypedBuilder<TDto> {
	// buttonField(key: keyof TDto | '', opts: ButtonFieldOpts): FormlyFieldConfig {
	// 	return fb.buttonField(key, opts);
	// }
	// checkListField(key: keyof TDto, opts: CheckListFieldOpts): FormlyFieldConfig {
	// 	return fb.checkListField(key, opts);
	// }
	// checkTreeField(key: keyof TDto, opts: CheckTreeFieldOpts): FormlyFieldConfig {
	// 	return fb.checkTreeField(key, opts);
	// }
	// checkboxField(key: keyof TDto, opts: CheckFieldOpts): FormlyFieldConfig {
	// 	return fb.checkboxField(key, opts);
	// }
	// chipsInputField(key: keyof TDto, opts: ChipsInputFieldOpts): FormlyFieldConfig {
	// 	return fb.chipsInputField(key, opts);
	// }
	// colorField(key: keyof TDto, opts: ColorFieldOpts): FormlyFieldConfig {
	// 	return fb.colorField(key, opts);
	// }
	// colorSampleField(
	// 	foregroundKey: keyof TDto,
	// 	backgroundKey: keyof TDto,
	// 	opts: ColorSampleFieldOpts,
	// ): FormlyFieldConfig {
	// 	return fb.colorSampleField(foregroundKey, backgroundKey, opts);
	// }
	// dateField(key: keyof TDto, opts: DateFieldOpts): FormlyFieldConfig {
	// 	return fb.dateField(key, opts);
	// }
	// dateRangeField(fromKey: keyof TDto, toKey: keyof TDto, opts: DateRangeFieldOpts): FormlyFieldConfig {
	// 	return fb.dateRangeField(fromKey, toKey, opts);
	// }
	// displayField(key: keyof TDto, opts: DisplayFieldOpts): FormlyFieldConfig {
	// 	return fb.displayField(key, opts);
	// }
	// fileUploadField(key: keyof TDto, opts: FileUploadFieldOpts): FormlyFieldConfig {
	// 	return fb.fileUploadField(key, opts);
	// }
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
	// groupboxWrapper(controlName: string, opts: GroupBoxWrapperOpts, content: FormlyFieldConfig[]);
	// groupboxWrapper(opts: GroupBoxWrapperOpts, content: FormlyFieldConfig[]);
	// groupboxWrapper(
	// 	arg1: string | GroupBoxWrapperOpts,
	// 	arg2: GroupBoxWrapperOpts | FormlyFieldConfig[],
	// 	arg3?: FormlyFieldConfig[],
	// ): FormlyFieldConfig {
	// 	if (typeof arg1 === 'string') {
	// 		return fb.groupboxWrapper(arg1, arg2 as GroupBoxWrapperOpts, arg3 as FormlyFieldConfig[]);
	// 	} else {
	// 		return fb.groupboxWrapper(arg1 as GroupBoxWrapperOpts, arg2 as FormlyFieldConfig[]);
	// 	}
	// }
	// hiddenField(key: keyof TDto, opts?: HiddenFieldOpts): FormlyFieldConfig {
	// 	return fb.hiddenField(key, opts);
	// }
	// htmlEditorField(key: keyof TDto, opts: HtmlEditorFieldOpts): FormlyFieldConfig {
	// 	return fb.htmlEditorField(key, opts);
	// }
	// incrementPickerField(
	// 	incrementKey: keyof TDto,
	// 	incrementUnitKey: keyof TDto,
	// 	opts: IncrementPickerOpts,
	// ): FormlyFieldConfig {
	// 	return fb.incrementPickerField(incrementKey, incrementUnitKey, opts);
	// }
	// multiStaffMasterField(key: keyof TDto, opts: MultiStaffMasterFieldOpts<TDto>): FormlyFieldConfig {
	// 	return fb.multiStaffMasterField(key, opts);
	// }
	// numberField(key: keyof TDto, opts: NumberFieldOpts): FormlyFieldConfig {
	// 	return fb.numberField(key, opts);
	// }
	// radioField(key: keyof TDto, opts: RadioFieldOpts): FormlyFieldConfig {
	// 	return fb.radioField(key, opts);
	// }
	// ranksGradesCheckListField(
	// 	ranksKey: keyof TDto,
	// 	gradesKey: keyof TDto,
	// 	useAllItemsKey: keyof TDto,
	// 	opts: RanksGradesCheckListFieldOpts,
	// ): FormlyFieldConfig {
	// 	return fb.ranksGradesCheckListField(ranksKey, gradesKey, useAllItemsKey, opts);
	// }
	// readOnlyListField(controlName: string, opts: ReadOnlyListFieldOpts): FormlyFieldConfig {
	// 	return fb.readOnlyListField(controlName, opts);
	// }
	// securityGroupAccessField(key: keyof TDto, opts: SecurityGroupAccessFieldOpts): FormlyFieldConfig {
	// 	return fb.securityGroupAccessField(key, opts);
	// }
	// securityGroupTreeField(key: keyof TDto, opts: SecurityGroupTreeFieldOpts): FormlyFieldConfig {
	// 	return fb.securityGroupTreeField(key, opts);
	// }
	// selectField(key: keyof TDto, opts: SelectFieldOpts): FormlyFieldConfig {
	// 	return fb.selectField(key, opts);
	// }
	// tabsField(controlName: string, opts: TabsFieldOpts): FormlyFieldConfig {
	// 	return fb.tabsField(controlName, opts);
	// }
	// templateField(controlName: string, opts: TemplateFieldOpts): FormlyFieldConfig {
	// 	return fb.templateField(controlName, opts);
	// }
	textField(key: keyof TDto, opts: TextFieldOpts): FormlyFieldConfig {
		return fb.textField(key, opts);
	}
	// textareaField(key: keyof TDto, opts: TextareaFieldOpts): FormlyFieldConfig {
	// 	return fb.textareaField(key, opts);
	// }
	// timeField(key: keyof TDto, opts: TimeFieldOpts): FormlyFieldConfig {
	// 	return fb.timeField(key, opts);
	// }
	// timeValueField(key: keyof TDto, opts: TimeValueFieldOpts): FormlyFieldConfig {
	// 	return fb.timeValueField(key, opts);
	// }
	// todoField(name: string): FormlyFieldConfig {
	// 	return fb.todoField(name);
	// }
	// toggleField(key: keyof TDto, opts: ToggleFieldOpts): FormlyFieldConfig {
	// 	return fb.toggleField(key, opts);
	// }
	// transportableOutletField(targetClassName: string, opts?: TransportableOutletFieldOpts): FormlyFieldConfig {
	// 	return fb.transportableOutletField(targetClassName, opts);
	// }
	// unitTeamTreeField(key: keyof TDto, opts: UnitTeamTreeFieldOpts): FormlyFieldConfig {
	// 	return fb.unitTeamTreeField(key, opts);
	// }
	// /**
	//  * Define a field pair for unit/unit master.
	//  * @param unitKey
	//  * @param unitMasterKey
	//  * @param opts
	//  */
	// unitUnitMastersField(
	// 	unitKey: keyof TDto,
	// 	unitMasterKey: keyof TDto,
	// 	opts: UnitUnitMasterFieldOpts,
	// ): FormlyFieldConfig;
	// /**
	//  * Define a field pair for unit/unit master, but using the selected unitMaster to select the unit. (There is no field for myUnit).
	//  * @param unitMasterKey
	//  * @param opts
	//  */
	// unitUnitMastersField(unitMasterKey: keyof TDto, opts: UnitUnitMasterFieldOpts): FormlyFieldConfig;
	// unitUnitMastersField(
	// 	arg1: keyof TDto,
	// 	arg2: keyof TDto | UnitUnitMasterFieldOpts,
	// 	opts?: UnitUnitMasterFieldOpts,
	// ): FormlyFieldConfig {
	// 	if (typeof arg2 === 'string') {
	// 		return fb.unitUnitMastersField(arg1, arg2, opts as UnitUnitMasterFieldOpts);
	// 	} else {
	// 		return fb.unitUnitMastersField('', arg1, arg2 as UnitUnitMasterFieldOpts);
	// 	}
	// }
}
