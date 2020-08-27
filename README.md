## Qasa image carousel

A codetest received from Qasa

create a file called 'keys.js' in /src and export this as 'accessKey'

access key: szgXi400gOoMS3kye5ddhENwMDVp4ei2bfO-IGD1Tyc

## Technologies:
ReactJS
### Axios:
- data fetching
#### Svgr/cli:
-transform svg's into components extremely quickly and easily
#### Proptypes:
- type safty (would rather use Typescript)
#### TailwindCSS:
- This is a new find for me (tried it out last week), it's a CSS utility library that's 100% customizable and reduces the amount of css code one has to write

#### Styled-components:
- for clean CSS-in-JS components that are easy and pleasing to work with. This works well with tailwind as I can write less code.

I also use the styled-components for doing more complex pseudo / transition manipulation that is too complex for tailwind

#### Autoprefixer:
- prefixes my css for greater usage accross browsers

#### Babel + macros:
- to compile tailwindcss for usage with styled-components

## What I would implement if I had more time:

- add spinners for loading data
- I would have jumped into figma and designed the layout first before making the UI
- sort out the small bug that occurs due to achor tags affecting the url (if you click on the dots below the photo carousel and reload then you end up at the photo you clicked previously, not the first photo in the carousel)
- I would make some more tweaks to the css and move component specific css into their own files under styles/Carousel, styles/HomeDescription etc
- I would implement typescript (this was a short assignment and proptypes make things quicker, sometimes typescript can throw some errors that need to be debugged which in this case for a small application would just slow everythingown unnecessarily)
- I would add mobile responsiveness, currently this layout is only optimized for desktop
- I would add a photoviewer that allows you to view the full image in a modal environment when the picture is clicked on, this could be be transitioned back and the user could continue browsing