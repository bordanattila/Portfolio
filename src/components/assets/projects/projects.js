// props for the Project component
import Weather_Dashboard from "../images/weatherDashboard.png";
import Work_Day_Scheduler from "../images/workDayScheduler.png";
import Note_Taker from "../images/noteTaker.png";
import Text_Editor from "../images/textEditor.png";
import Snake_Game from "../images/snake_game.png";

const projects = [
    {
        imageSource: Text_Editor,
        projectName: "PWA Text Editor",
        description: "A Progressive Web Application (PWA) that help users to jot down any ideas or code snippets at any time. It colour codes the text like an IDE. The app was built using Webpack and Workbox.",
        repo: "http://github.com/bordanattila/Text_Editor",
        deployed: "https://attilatexteditor-app.herokuapp.com/"
    },
    {
        imageSource: Note_Taker,
        projectName: "Decentralised Note Taker",
        description: "This simple note taking application with a React fronted. The application was built with Motoko for the backend for the Internet Computer. ",
        repo: "https://github.com/bordanattila/Decentralised-Note-Taker",
        deployed: "Not deployed"
    },
    {
        imageSource: Work_Day_Scheduler,
        projectName: "Work Day Scheduler",
        description: "It is a simple front-end application to replace traditional planners. The local storage is used to store data. The app was built with jQuery and Bootstrap.",
        repo: "http://github.com/bordanattila/Work_Day_Scheduler",
        deployed: "http://bordanattila.github.io/Work_Day_Scheduler"
    },
    {
        imageSource: Weather_Dashboard,
        projectName: "Weather Dashboard",
        description: "A front-end application powered by OpenWeather API. Users can look up weather forecast for any travel destination. It uses the local storage to store the search history.",
        repo: "http://github.com/bordanattila/Weather_Dashboard",
        deployed: "https://jolly-hill-0b6ce391e.5.azurestaticapps.net/"
    },
    {
        imageSource: Snake_Game,
        projectName: "Snake Game",
        description: "This is an application that imitates the famous Nokia snake game on computer. The interface was created with Turtle.",
        repo: "https://github.com/bordanattila/Snake-Game",
        deployed: "Not deployed"
    },
];

export default projects;