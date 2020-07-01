# Project Overview

## Project Links

- [https://git.generalassemb.ly/jhall9871/react_project.git]()
- [add your deployment link]()

## Project Description

Pair will be a single-page application built in React. The application will have two major features:

1. Recommend wines to pair with a recipe, given two to four ingredients or preparation methods
2. Recommend recipes to cook, given a type of wine the user wants to drink

## API

In order to recommend recipes, Pair will query the Edamam Recipe Search API, passing two ingredient search terms which correspond to pairing principles related to the given wine. [https://developer.edamam.com/edamam-docs-recipe-api]()

Unfortunately, the most useful wine APIs come at a steep cost (WineSearcher charges \$250/month), so I'll be creating my own data set for the wines, based on this excellent poster by Wine Folly: [https://media.winefolly.com/AF-Poster.png]()

```
{
"q": "beef AND barbecued",
"from": 0,
"to": 3,
"more": true,
"count": 1468,
"hits": [
{
"recipe": {
"uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_247cfb6963c049d030ef40a00ad63950",
"label": "Korean Beef Barbecue With Toasted Sesame Salt",
"image": "https://www.edamam.com/web-img/718/71868882ec8babd5371190049b1f8caa.jpg",
"source": "Bon Appetit",
"url": "http://www.bonappetit.com/recipes/2009/07/korean_beef_barbecue_with_toasted_sesame_salt",
"shareAs": "http://www.edamam.com/recipe/korean-beef-barbecue-with-toasted-sesame-salt-247cfb6963c049d030ef40a00ad63950/beef+and+barbecued",
"yield": 6,
"dietLabels": [
"Low-Carb"
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- Ingredient/Prep Method Menu: https://www.canva.com/design/DAD_SZuywko/l3fSfqSTqNe92rvw55tB4w/view?utm_content=DAD_SZuywko&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton
- 3-ingredient result page: https://www.canva.com/design/DAD_h-mM8jU/-CtoflINkQ5UZxFXNDV6pQ/view?utm_content=DAD_h-mM8jU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton
- Wine result page: https://www.canva.com/design/DAD_cdq5gXE/Y88NZCnn-sL5z5EtwvzNTA/view?utm_content=DAD_cdq5gXE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

### MVP/PostMVP - 5min

The first priority is to make the app functional. The second priority is to make it beautiful.

#### MVP

- Wine => Recipe function up and running, including:
	- API call to Edamam
	- Menus to select wines
	- Adding wine selection to state
	- Rendering a result recipe on page

#### PostMVP 

- Recipe => Wine function up and running, including:
	- "API" call to wine data set
	- Menus to select ingredients
	- Adding ingredient selections to state
	- Calculating a wine pairing
	- Rendering a result wine on page

- Add a "show me another" function to render additional recipes/wine types
- Add option to enter two, three, or four ingredient/prep methods
- Add a "why?" button to show the user why the wine/food pairing makes sense.

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pulls and include React Router |
| Welcome    |          Display the "Pair" logo          |
| Choose Method    |          User chooses whether to find a wine or find a recipe          |
| Wine menu    |          Display 9 wine categories for selection          |
| Wine sub-menu x9   |          Display all sub-types of category and button to select          |
| Food menu    |          Display 7 food categories for selection          |
| Food sub-menu x7    |          Display all sub-types of food and buttons to select          |
| Factor 1    |          Display first chosen food factor          |
| Factor 2    |          Display second chosen food factor, option to pair or add more          |
| Factor 3    |          Display third chosen food factor, option to pair or add more          |
| Factor 4    |          Display fourth chosen food factor, button to pair         |


## MVP Time Frame

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| API call to Edamam      		|    H     |      1hr      |     -hrs     |   -hrs    |
| Menus to select wine 			|    H     |      3hrs      |     -hrs     |   -hrs    |
| Add wine selection to state    |    H     |      1hr      |      -hrs      |    -hrs     |
| Render result recipe on page    |    H     |      2hrs      |      -hrs      |    -hrs     |
| Total   |    H     |      7hrs      |      -hrs      |    -hrs     |


## Post-MVP Time Frame

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| "API" call to wine data set      		|    H     |      1hr      |     -hrs     |   -hrs    |
| Menus to select ingredients 			|    H     |      3hrs      |     -hrs     |   -hrs    |
| Adding ingredient selections to state  |    H     |      1hr      |      -hrs      |  -hrs     |
| Calculating a wine pairing   		 |    H     |      2hrs      |      -hrs      |    -hrs     |
| Rendering a result wine on page    |    H     |      2hrs      |      -hrs      |    -hrs     |
| "show me another" function   		 |    H     |      2hrs      |      -hrs      |    -hrs     |
| Add additional factors   			 |    H     |      4hrs      |      -hrs      |    -hrs     |
| Why button   						 |    H     |      2hrs      |      -hrs      |    -hrs     |
| Design tweaks & pixel pushing    |    H     |      10hrs      |      -hrs      |    -hrs     |
| Total						    |    H     |      27hrs      |      -hrs      |    -hrs     |


## Additional Libraries

- React Router
- Canva (for design)

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
