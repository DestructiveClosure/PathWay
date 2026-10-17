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

        <nav class="nav-bar">
        <a href="">All Paths</a>
        <a href="">Easy</a>
        <a href="">Moderate</a>
        <a href="">Hard</a>
        <a href="">Favorites</a>
        </nav>
 
2. Style Navbar

    .nav-bar {
        display: flex;
        margin-top: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;

        a {
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        text-decoration: none;
        border: 2px solid transparent;

        &:hover {
            border-color: #3f5a1c;
        }

        &.active {
            background-color: #3f5a1c;
            color: #8dc740;
        }
        }
    }

3. Read Angular PowerPoint


4. Configure app.config.ts

    Add providerRouter with withComponentInputBinding()

    providers: [
        provideBrowserGlobalErrorListeners(),
        // withComponentInputBinding() lets a route parameter such as :id arrive
        // in the component as a signal input with the same name.
        provideRouter(routes, withComponentInputBinding()),
    ]

5. Add Routes to app.routes.ts

    export const routes: Routes = [
        // Redirect user to paths if they try to go to homepage or an empty path url
        {
            path: '',
            redirectTo: '/paths',
            pathMatch: 'full'
        },
        {
            path: 'paths',
            component: PathList
        },
        {
            path: 'favourites',
            component: Favourites,
        },
        {
            path: '**',
            component: NotFound
        }
        ];
6. Use the routes with routerLink & use routerLinkActive

Add routerLinkActive="active" to the <a> HTML elements
Add correct matching to ensure Angular knows which path to take during routes

    <a routerLinkActive="active" routerLink="/paths" href="">All Paths</a>
    <a routerLinkActive="active" routerLink="/paths/type/easy" href="">Easy</a>
    <a routerLinkActive="active" routerLink="/paths/type/moderate" href="">Moderate</a>
    <a routerLinkActive="active" routerLink="/paths/type/hard" href="">Hard</a>
    <a routerLinkActive="active" routerLink="/favourites" href="">Favourites</a>

7. Ensure all imports are correct

Correctly import all dependencies needed

imports: [RouterOutlet, RouterLink, PathList, RouterLinkActive],