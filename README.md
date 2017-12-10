# Readable API Server

This is a project for Udacity's React course. It is a content and comment web app using react an redux features.
Users can post content to predefined categories, filter and sort the posts, comment on their posts and other users' posts, vote on posts and comments Users will also be able to edit and delete posts and comments.

This repository includes a backend API Server and the frontend application.

## Start servers

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `npm start`
* In another terminal window, start the front-end application
    - `cd frontend`
    - `npm install`
    - `npm start`

## Front-end usage:

### Adding posts

Users can add posts using the button `ADD POST` located at `Home` and posts' list.

### Editing posts

Users can edit a post selecting the target post on the posts' list.

### Removing posts

Users can remove posts going into the post's page and hitting the button `REMOVE POST`.

### Adding comments

Users can add comments going into the post's page and clicking on the button `NEW COMMENT`. It will be popup a form to insert the new post's data.

### Editing comments

Users can edit comment going into the post's page and clicking on the `EDIT COMMENT` button located by side the comment.

### Removing comments

Users can remove comment going into the post's page and clicking on the `REMOVE COMMENT` button located by side the comment.

### Up vote posts

Users can up vote / down vote the posts using the thumb up / thumb down button, either in the home
![up vote by button](https://raw.githubusercontent.com/joseteodoro/reactnd-project-readable-starter/master/upvote-a.gif)

or inside the post's page.

![upvote by post page](https://raw.githubusercontent.com/joseteodoro/reactnd-project-readable-starter/master/upvote-b.gif)

### Up vote comments

Users can up vote / down vote the comments using the thumb up / thumb down button by side the comment on the post's page.

### Filter posts

Users can filter the posts by category using the menu on the left top corner and selecting a category or `All posts`.

![filtering](https://raw.githubusercontent.com/joseteodoro/reactnd-project-readable-starter/master/filter.gif)

### Sort posts

Users can sort the posts using the menu on right top corner and selecting the criteria to sort the posts.
![Sorting](https://raw.githubusercontent.com/joseteodoro/reactnd-project-readable-starter/master/sort.gif)
