import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PathService } from '../../Services/path-service';
import { Router } from '@angular/router';
import { Path } from '../../Shared/Models/path';
import { createDescriptionValidator } from '../../Services/createValidator';
import { descriptionDiffersFromName } from '../../Services/descriptionValidator';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-path-form',
  styleUrl: './path-form.scss',
  templateUrl: './path-form.html',
})
export class PathForm {
  private fb = inject(FormBuilder);
  private pathServ = inject(PathService);
  private router = inject(Router);

  // Computing the isEditMode to check if the current id is equal not equal to undefined
  protected isEditMode = computed(() => this.id() !== undefined);
 
  // Filled from :id route parameter on /edit/:id by withComponentInputBinding

  id = input<string>();

  // nonNullable means reset() goes back to these 
  // starting values instead of null,
  // and getRawValue() is typed without null.
  protected pathForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    region: ['', [Validators.required]],
    description: ['', createDescriptionValidator()],
    difficulty: [''],
    surface: [''],
    dogFriendly: [true],
  },
  { 
    validators: descriptionDiffersFromName() 
  })

  constructor(){
    // An effect reruns id() changes, so going from edit/1 to edit/2
    // refills the form even though angular reusees the same component
    console.log(`Guard: ${this.isEditMode}`)

    effect(() => {
      const id = this.id();
      if(id === undefined){
        return;
      }

      const path = this.pathServ.getPath(Number(id));

      if(path){
        // PatchValue() fills only the field it is given. The form has no id field,
        // so the id is ignfored here and added back on submit.
        this.pathForm.patchValue(
          {...path, dogFriendly: path.dogFriendly ?? false}
        );
      }
    })
  }



  protected onSubmit(): void{
    if(this.pathForm.invalid){
      return;
    }

    const formValue = this.pathForm.getRawValue();
    const id = this.isEditMode() ? Number(this.id()) : this.pathServ.nextId();

    if(this.isEditMode()){
      this.pathServ.updatePath({id, ...formValue})
    }else{
      this.pathServ.addPath({id, ...formValue});
    }
    
    
    this.pathForm.reset();
    this.router.navigate(['/paths', id])
    
  }

}
