# PathWay

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

<!-- FINISHED: PART 1 -->
## API Usage


This app uses the Dragonball API

Docs: https://web.dragonball-api.com/documentation

Example request: https://dragonball-api.com/api/characters 

<!-- FINISHED: PART 2 -->
## HTTPResource Usage

HTTPResource is a new option available to Angular developers that want to fetch data from an API and I used it because there is no Observable that you have to subscribe to. I believe that having the option to be able to have the resource readily available with different states like error and isLoading provides user experience options that is needed for accessibility.

<!-- FINISHED: PART 3 -->
## Editing locally and deleting

Even though we are able to capture the values of the API data and use it to manipulate our view in the PathForm, we are not actually mutating the values in the API. This is done locally as the API only accepts GET requests on their server. Once we refresh the page, the response from the database is returned with a limit of 10 by default through their server's settings.

## LifeCycle

### Question

**What happened when you read this.id() in the constructor, and why? (If your id is
an input.required(), you will see an error; if it is an optional input(), you will get
undefined instead.):** 

### Answer

Putting the logic into ngOnit allowed us to read it after first inputs are set.
Without it we get an error:

    ERROR] NG8118: `id` is a required `input` and does not have a value in this context. [plugin angular-compiler]

        C:/School/ThirdSemester/Angular/Projects/PathWay/src/app/Components/path-detail/path-detail.ts:31:39:
        31 │     const path = this.pathServ.getById(this.id());
            ╵                                        ~~~~~~~

When we call this.id() in the constructor, the component's inputs haven't been bound ye. Angular will only set those input values after.

### Question

**What action in your app caused ngOnDestroy to run, and what does that tell you about
what the router does with a page when you leave it?:** 

### Answer

The ngOnDestroy ran only when I navigated from the page. It tells me that the router removes the component from the router-outlet, and angular will use ngOnDestroy for that task. This proves that the component lifecycle is directly tied to the router during activation and deactivation while working with the timer that was created.

### LocalStorage persistance

One thing that must never be stored in your localStorage in any private credentials, secret API keys or private API keys. A main reason a user of my application would use this service is to keep track of quick details about their favourite star wars characters between visits. Storing only the IDs keeps the saved data simple and easy to retrieve which characters that have been favourited or saved.

