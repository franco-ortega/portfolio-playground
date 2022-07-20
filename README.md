### Website
[https://portfolio-playground-five.vercel.app/](https://portfolio-playground-five.vercel.app/)

### Dependencies
1. `npx create-next-app@latest .`
1. `npm install --save-dev sass`

### Font Awesome
1. `npm i --save @fortawesome/fontawesome-svg-core`
1. `npm i --save @fortawesome/free-solid-svg-icons`
1. `npm i --save @fortawesome/free-regular-svg-icons`
1. `npm i --save @fortawesome/react-fontawesome@latest`
1. [Font Awesome with React](https://fontawesome.com/v6/docs/web/use-with/react/use-with#troubleshooting-with-next-js)

### Current Issues
1. How to best handle hamburger menu on mobile?
    1. Right now the the sidebar on mobile opens when it is clicked.
    1. The sidebar on mobile closes when the area outside the sidebar is clicked.
    1. After the sidebar is open, the hamburger menu seems to work correctly. However, on page load the sidebar is closed, and clicking on the hamburger menu first triggers the onMouseOver to make the sidebarActive true, but then the onHamburgerClick function sets the state to its opposite state, so false, and therefore, the sidebar doesn't open. This behavior also happens anytime that the sidebar is closed by clicking outside the sidebar; then when you click on the hamburger, nothing seems to happen.
1. Make sure the hamburger menu is accessible.
1. NextJS links can only hold one child, so it's an issue to have a link that includes an icon and text. Why???

### Start Site
1. `nvm use 16.13.0`
1. `yarn dev`

## Nav Bar -> Header
1. Links to each page
1. Name - CANCEL
1. Title - CANCEL

## Projects Page


1. [How to build a Carousel](https://dev.to/rakumairu/simple-react-carousel-24m0)
1. [Swipe the Carousel on touch screens](https://dev.to/rakumairu/how-to-handle-swipe-event-on-react-carousel-24ab)