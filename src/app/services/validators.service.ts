import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  bothControlsEquals(firstControl: string, secondControl: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const firstValue = formGroup.get(firstControl)?.value;
      const secondValue = formGroup.get(secondControl)?.value;

      if (firstValue.trim() !== secondValue.trim()) {
        return {
          noEqualControls: {
            controls: [firstControl, secondControl],
            valid: false,
          },
        };
      }

      return null;
    };
  }
}
