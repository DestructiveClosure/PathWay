import { afterNextRender, Component, computed, effect, ElementRef, inject, input, Signal, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PathService } from '../../Services/path-service';
import { Router } from '@angular/router';
import { createDescriptionValidator } from '../../Services/createValidator';
import { descriptionDiffersFromName } from '../../Services/descriptionValidator';
import { PathApi } from '../../Services/path-api';

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
  private api = inject(PathApi);

  
  
  private firstField = viewChild<ElementRef<HTMLInputElement>>('firstField');

  // Computing the isEditMode to check if the current id is equal not equal to undefined
  protected isEditMode = computed(() => this.id() !== undefined);

  
 
  // Filled from :id route parameter on /edit/:id by withComponentInputBinding

  id = input<string>();

  protected path = this.api.byId(this.id as Signal<string>);

  

  // nonNullable means reset() goes back to these 
  // starting values instead of null,
  // and getRawValue() is typed without null.

  protected pathForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', createDescriptionValidator()],
    image: [''],
  },
  { 
    validators: descriptionDiffersFromName() 
  })

  constructor(){
    // An effect reruns id() changes, so going from edit/1 to edit/2
    // refills the form even though angular reusees the same component
    console.log(`Guard: ${this.isEditMode()}`)

    // FINISHED: 
    // Focusing needs the real DOM element, which doesn't exist on ngOnInit because the view hasn't rendered.
    afterNextRender(() => {
      this.firstField()?.nativeElement.focus();
    });


    effect(() => {

      const id = this.id();
      if(id === undefined){
        return;
      }
      // let path = this.pathServ.getPath(id);

      // let path: Path | undefined = this.api.byId(this.id);

      if(!this.path.hasValue()) return undefined;

      const path = this.path.value();

      if(path){
        // PatchValue() fills only the field it is given. The form has no id field,
        // so the id is ignfored here and added back on submit.
        this.pathForm.patchValue(
          {...path}
        );
      }
    })
  }



  protected onSubmit(): void{
    if(this.pathForm.invalid){
      return;
    }
  
    const formValue = this.pathForm.getRawValue();
    
    const id = this.id();

    if(id !== undefined){
      this.pathServ.updatePath({
          _id: id,
          ...formValue
      });
    }else{
      this.pathServ.addPath(formValue);
    }
    
    this.pathForm.reset();
    this.router.navigate(['/my-paths'])
  }

}
