# To Do List

## How to remove a specific object

1. Add Remove Button (Add HTML Element and Styled)
2. Create Remove Function & Wire Up Remove Function

Wired - Path-Card.html with

    Function for Path-Card template
    (click)="removePath($event)"

Wired - Path-Card.ts with

    OUTPUT: 
    
    remove = output<Path>();

    Function for TEMPLATE:
    
    removePath(event: MouseEvent): void{
      event.stopPropagation();
      this.remove.emit(this.path());
    }


Wired - Path-List.html with

    Bind to List with Function from Path-List.ts
    (remove)="onPathRemove($event)"

    Function for TEMPLATE:
    onPathRemove(path: Path): void{
        this.pathServ.removeCourse(path.id);
    }

Wired - Path-Service.ts with

    Singleton function to remove
    removeCourse(id: number): void{
        console.log(`Hello from the RemoveMethod\nThe Path ID: ${id}`)
        this.paths.update(path => path.filter(i => i.id !== id));
    }


4. Test Remove Function

    Working!! 

## Adding Routes to the Application

1. Create a NavBar in app.html
2. Style Navbar
3. Read Angular PowerPoint
4. Configure app.config.ts
5. Add Routes to app.routes.ts
6. Use the routes with routerLink
7. Learn and use routerLinkActive