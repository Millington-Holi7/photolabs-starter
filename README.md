# react-photolabs
Welcome to my Photolabs project. It displays photos. You can like the photos and when you click on the photo, the modal appears displaying a larger version plus similiar photos. YOu can also click on those photos to get a larger view. I used React to build the user interface. I used useEffect to run AJAX to retrieve photo and topics data once at mount. I use useReducer to move the state to a central file and pass it down to be used in each component. 

# Photolabs Layout

### Layout of the webpage. You can also see how if you like a photo, it alerts you in the top right corner.

!["Main Page"](https://github.com/Millington-Holi7/photolabs-starter/blob/main/frontend/docs/mainpage.png?raw=true)


### The modal appears when you click on a photo. It shows the photo in large and if the photo is liked. Also if you notice in the back, you can scroll allong the webpage and the modal will appear where your viewing instead of having to scroll back up to see the larger photo.

!["Photo Large"](https://github.com/Millington-Holi7/photolabs-starter/blob/main/frontend/docs/SimiliarPhotoLarge.png?raw=true)


### Below the large photo are similar photos. You can also like these photos. If you select the photo, a larger version appears. 

!["Similiar Photos"](https://github.com/Millington-Holi7/photolabs-starter/blob/main/frontend/docs/similiarPhotos.png?raw=true)


### When you select a topic, a line appears above the topic so you know which Topic you are currently viewing. 

!["Topic Photo"](https://github.com/Millington-Holi7/photolabs-starter/blob/main/frontend/docs/Topics.png?raw=true)


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
