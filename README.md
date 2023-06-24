# Follicare

## Description

Follicare is a consultation app designed specifically for individuals facing hair disorders. The main focus of the app is to provide accessibility and support, particularly for minority communities, in effectively managing their hair disorders. With Follicare, users can create an account, log in, search for specialists, and access a knowledge base for information on their hair disorder.

[Follicare.webm](https://github.com/woodsdeshe/follicare/assets/96597549/4835b266-5014-41a5-84a2-dd2a9ea4884a)

#### Desktop View
<img src="./src/assets/Screenshot%20(35).png" alt ="wireframe image" width="50%">
<img src="./src/assets/Screenshot%20(38).png" alt ="wireframe image" width="50%">

#### Tablet View
<img src="./src/assets/Screenshot%20(36).png" alt ="wireframe image" width="50%">

#### Mobile View
<img src="./src/assets/Screenshot%20(37).png" alt ="wireframe image" width="40%">
<img src="./src/assets/Screenshot%20(40).png" alt ="wireframe image" width="40%">



## Tools and Technologies

The following tools and technologies were used in this project:

![](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white)
![](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## Dependency Installation Instructions

1. Prerequisites: You will need Node.js and Node Package Manager installed on your local machine to be able to run this application. You can run the following command lines in your terminal to confirm you have them: 
   ```
   node—version
	 npm –version
   ```
If either one is not installed, you can download and install them from the [Node.js website](https://nodejs.org/en) and view their official documentation [here](https://nodejs.org/en/docs) 

2.	Download our application: 
  - [GitHub](https://github.com/woodsdeshe/follicare)
  - Make sure you extract the zip file! 
  - Then in your terminal navigate to the downloaded directory. 
  
3. Once in the folder directory in your terminal, you will need to install node modules. You can do that with the following command: 
    ```
    npm install
    ```
4. Before running the application, you will need to build the application by running the following command:
    ``` 
    ng build
    ```
5. Then run the following command to start your server: 
    ``` ng serve, or ng serve –open``` 
     to automatically run and open on your browser. 
     
6. If you did not elect to automatically open once the server started, you make visit http://localhost:4200 to visit our angular application! 

## Project Planning

You can find the planning documentation for this project [here](https://docs.google.com/document/d/1IrPEi7DRGvpivJOVLtRf7Ejdoql4ds-LKyS0UoeONZQ/edit?usp=sharing). It includes:

- Project deliverables and timelines
- Detailed scope and schedule
- [Project link](https://github.com/users/woodsdeshe/projects/6)

## Backend API Repository

The backend API for this project can be found [here](https://github.com/woodsdeshe/follicare-api#follicare-description).

## Approach

I approached the project by starting with a thorough planning phase. This involved creating a Project Pitch Deck that included user stories, an Entity-Relationship Diagram (ERD), and wireframes. Once the project received approval, I proceeded to establish a project KanBan board to effectively track tasks and monitor progress.

To begin development, I divided the project into various paths and identified the necessary models for Users, User Profiles, Favorites List, Specialists, and Resources. With a Test-Driven Development (TDD) approach in mind, I first focused on developing the models and writing corresponding tests. This allowed me to ensure the correctness and integrity of the data.

As I progressed, I encountered challenges such as accurately setting up and accessing seed data in the database. However, I overcame this hurdle by carefully configuring the necessary dependencies and ensuring the correct creation and loading of seed data. Additionally, I encountered difficulties with getting the tests to work correctly, which I later resolved by properly configuring the dependencies for Cucumber testing.

Throughout the development process, I paid attention to the project timeline and scope, ensuring that the models, services, and controllers for the different components were implemented effectively. I also incorporated JWT key authentication for enhanced security.

Once the backend was completed, I focused on successfully connecting the API with the Angular application. That came with its own challenges, including implementing CORS correctly and routing, but I was able to overcome those hurdles and start with implementing the design for the application. Once the functionality and design of the project was complete, I was able to review and reflect on my wins and hurdles and processed what I can implement in the future.

## Unsolved Problems and Hurdles
Throughout the development of this project, I encountered the following challenges:

- Accuracy of Tests:
  - One of the main challenges I encountered was ensuring the accuracy of tests. Interestingly, my old system was falsely reporting passing tests when they should have actually failed. This raised concerns about the reliability of the test results. To address this, I made it a priority to validate the tests thoroughly once a working path was completed. I conducted meticulous checks to ensure the accuracy and reliability of the test outcomes.

- Accessing Seed Data:
  - Another obstacle I faced was related to accessing the seed data in the h2 database. Initially, I had difficulties retrieving the seed data, which impeded the progress of the project. To overcome this issue, I delved into the configuration settings and dependencies, making sure everything was properly set up. By implementing the correct dependencies and ensuring the accurate creation and loading of seed data, I successfully resolved the problem and gained access to the necessary data.

- Security Implementation:
  - Integrating security features while simultaneously developing various paths posed a significant challenge. To address this, I decided to prioritize the completion of all path functionalities before fully integrating the security measures. This approach allowed me to focus on implementing security successfully once all the core functionalities were in place. Additionally, I had to make adjustments to the relationship mapping for some of the tables to ensure a smooth integration of the security features into the API.

- CORS Issue:
  - A crucial hurdle I faced was related to Cross-Origin Resource Sharing (CORS) implementation within the backend. Initially, I encountered difficulties due to an incorrect setup, which led to a CORS issue. To overcome this obstacle, I temporarily halted the development process to rectify the CORS problem. As part of the solution, I decided to refactor the seed data, incorporating more specialists and resources. This allowed me to simultaneously resolve the CORS issue while enhancing the data available in the API.

- Styling Bugs:
  - Implementing proper routing for successful user logins presented some challenges. I encountered styling bugs that prevented smooth navigation upon successful login. To overcome this, I conducted a detailed code review and undertook a focused study of Angular routing concepts. Armed with this knowledge, I was able to rectify the styling bugs and successfully reroute users to the main page upon logging in.

- User Updating, Deleting, and Favorites List:
  - Unfortunately, due to time constraints, I was unable to implement certain features. Specifically, I couldn't complete the functionality for user updating and deleting, as well as the implementation of the favorites list feature. Despite my best efforts, these aspects remained pending due to limited time resources.

Despite these hurdles, I approached each challenge with determination and devised effective solutions to ensure the successful completion of the Follicare project.

## Shoutouts
Thank you so much [Suresh](https://github.com/sureshmelvinsigera/) and [Leo](https://github.com/LRodriguez92) for helping me with the CORS and routing issues that I faced!
