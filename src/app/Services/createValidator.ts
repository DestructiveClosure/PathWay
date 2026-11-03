import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
// FINISHED: Going Further: Custom validator (cross-field)
export function createDescriptionValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log(`Control: ${control.value}`)
    if ( control.value.startsWith("description")) {
      return { descriptionRequired: true };
    }

    return null;
  };
}