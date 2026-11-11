# PathWay

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

<!-- FINISHED: PART 1 -->
## API Usage

This app uses the STAR WARS DATABANK.

Docs: https://starwars-databank.vercel.app/

Example request: `https://starwars-databank-server.onrender.com/api/v1`

<!-- FINISHED: PART 2 -->
## HTTPResource Usage

HTTPResource is a new option available to Angular developers that want to fetch data from an API and I used it because there is no Observable that you have to subscribe to. I believe that having the option to be able to have the resource readily available with different states like error and isLoading provides user experience options that is needed for accessibility.

<!-- FINISHED: PART 3 -->
## Editing locally and deleting

Even though we are able to capture the values of the API data and use it to manipulate our view in the PathForm, we are not actually mutating the values in the API. This is done locally as the API only accepts GET requests on their server. Once we refresh the page, the response from the database is returned with a limit of 10 by default through their server's settings.
