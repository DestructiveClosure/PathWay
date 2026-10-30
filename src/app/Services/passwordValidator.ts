import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createDescriptionValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value?.trim()) {
      return { descriptionRequired: true };
    }

    return null;
  };
}