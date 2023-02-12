# Where's Waldo

Built as an assignement of [The Odin Project](https://github.com/TheOdinProject/curriculum)

Details of the assignment can be found [here](https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app)

See the project live [here](https://hattima-tim.github.io/where-is-waldo/)

## Technology Used

- React
- Tailwind CSS
- React Testing Library

## Problems

1. The first problem was to find a way to select the characters. The way I solved it is:

- First, for a character, I took 4 coordinates sorrounding it (left, right, top, bottom). Then I used code to generate all the coordinates that are within the area those 4 coordinates cover.

- Then, I stored all the coordinates in the firestore. This can be done on the client side but I used firestore here because of the assignment details.

- When a user clicks on a location in the game image, I check if the location's coordinate is on the firestore.

- Because the coordinate of a certain position changes according to the screen sizes, I used some math to make the coordinates the same among different screen sizes.

2. Querying firestore was a pain. It took me good amount of time to figure out what I can and can't do with firestore's query functionality,as well as, what is a good database structure for querying.

## Credit

- Loading animation taken from [here](https://rive.app/community/1586-3103-epar-loading-v4/)