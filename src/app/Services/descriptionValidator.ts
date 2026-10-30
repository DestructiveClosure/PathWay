import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function descriptionDiffersFromName(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    // Getting name and description from form. trimming and lowerCase
    const name = form.get('name')?.value?.trim().toLowerCase();
    const description = form.get('description')?.value?.trim().toLowerCase();

    if (name && description && name === description) {
      return { descriptionMatches: true }
    }

    return null;

  };
}