# Kilogram

A full-stack web application that mimics the Instagram website. Users are able to upload and share their photos, leave likes and comments for them, and follow other users. It's a photo centered forum for people to connect and share their ideas, thoughts or moments.   

## Frameworks Used 

Kilogram uses Ruby on Rails on the backend and React/Redux for the frontend.

# Features 

Users can sign up and log in with user authentication, no passwords are kept in the backend. The session is kept upon closing and reopening the page. 
![User Auth](https://i.imgur.com/a7cprVw.png)

### Photo Feed and User Profile
The user is taken to the homepage upon login, with a feed of other users' posts. 
![Profile](https://i.imgur.com/CIAIOQJ.png)

### Post Likes and Comments
Posts can be liked and commented on.     
![Posts](https://media.giphy.com/media/7JgUKa21rpbNM07bOP/giphy.gif)

### Creating a Post 
User is able to upload a post with a description and have it liked/commented on by other users. Photo uploads are hosted on AWS S3 and fetched from their cloud storage. 
![Post Upload](https://i.imgur.com/WYRhXbA.png)

### Follows 
User can follow and unfollow other accounts     
![Follows](https://media.giphy.com/media/69tPU20RufX1syT5Ub/giphy.gif)


### Search 
Users can search for other users and navigate to their profile.
![Search](https://media.giphy.com/media/PhnScaB7xTXd6cSltt/giphy.gif)
