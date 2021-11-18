# Agiothyella Bookstore
Main page for Agiothyella Bookstore

Demo: https://agiothyella.github.io/web-fe-project-3-bookstore-PDA/

This webpage was designed and developed by me, Agiothyella. This webpage is hosted on github as a showcase for my portofolio. Please do not copy/duplicate whole/parts of my markup.

Resources:
- Book images: from hmhco.com
- Icons: catkuro, photo3idea_studio, Icongeek26, smashicons, pixel perfect, freepik, eucalyp

# Journal:

### Design:
This is more of a generic shopping website style, but instead of grid, most of it use slider. The base idea is as conventional as it gets, neutral with light background and boxy composition. To break the monotomy, few styles of custom slider is used with subtle background image.

### Development:
For the slider, I use splide.js. At the time I build this webpage, the version had some problem detected by lighthouse. The newer version don't have that, but to update the splide.js is to change many things as some structure and syntax are different. It's not a big problem that could slower the page load time, so I decided to make peace and be okay with it. The bigger problem with this old version is it doesn't recalculate the grid slider contents when the viewport width is changed. This means that the webpage needs to be reloaded first before the responsive grid slide displayed correctly. This grid slider is used in best selling book section, and maybe it's better to use normal slider, but I want to display creative ways of using the slide to get unique layout.
