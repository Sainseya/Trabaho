<a name="readme-top"></a>

<!-- PROJECT INTRO -->
<div align="center">

  <h1 align="center">Trabaho</h1>

  <p align="center">
    <h3>The new job search platform</h3>
    An Epitech project by
    <br />
    <a href="https://github.com/Darkbuilder646">Darkbuilder646</a>
    ·
    <a href="https://github.com/Sainseya">Sainseya</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#utilisation">Utilisation</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Trabaho is a user-friendly job search platform designed to help job seekers find opportunities that match their skills and needs. Whether you're an experienced professional looking for new opportunities or a student looking for your first job, Trabaho is here for you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The project was created using the following main languages and frameworks :

<strong>For the Front : </strong>

* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![Tailwind][Tailwind.css]][Tailwind-url]

<strong>For the Back : </strong>

* [![Java][Java]][Java-url]
* [![SpringBoot][SpringBoot]][SpringBoot-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

<strong>API : </strong>

* [![Axios][Axios]][Axios-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
### Features

* <strong>Registration and Login:</strong> Users can register with Trabaho by providing their basic information. Once registered, they can log in to access all the platform's features.

* <strong>Job search:</strong> Trabaho offers a wide range of job offers from a variety of companies and sectors. Users can search for jobs according to their preferences.

* <strong>User Profile:</strong> Each user can create and manage their own profile. You can add information about your experience, skills and education to make your application more attractive to employers.

* <strong>Online application:</strong> When you find a job offer that interests you, you can apply directly via the platform by filling in your additional information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Installation -->
## Getting Started

To get Trabaho up and running on your system, follow these steps :

### Prerequisites

Before you begin, ensure you have the following installed :

* Docker : Download and install Docker from https://www.docker.com/get-started.
* Docker Compose : Ensure you have Docker Compose installed, which is usually bundled with Docker.

### Installation

1. <strong>Clone the Repository :</strong> 

    ```bash
    git clone https://github.com/EpitechMscProPromo2026/T-WEB-501-LIL_4.git
    ```
2. <strong>Docker Compose :</strong> Run the following command at the project's root to start the application

    ```sh
    docker-compose up -d
    ```
    This will build and start the necessary containers, including the frontend, backend, and PostgreSQL database.
    
<br/>

3. <strong>Backend Setup :</strong>

    Navigate to the "TrabahoBack" directory :
    ```sh
    cd TrabahoBack
    ```

    Build and run the Spring Boot application with Maven :
    ```sh
    mvn spring-boot:run
    ```

4. <strong>Frontend Setup :</strong> 

    Navigate to the "trabahoFront" directory :
    ```sh
    cd trabahoFront
    ```

    Install dependencies using yarn :
    ```sh
    yarn
    ```

    Start the development server :
    ```sh
    yarn run dev
    ```

5. <strong>Access Trabaho :</strong>

    Open your web browser and go to the development server URL to access the Trabaho application

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Utilisation

1. <strong>Registration and Login</strong>

* Launch Trabaho with this, and go to the website
* Provide your basic information to create your account and click on "Register" 
* After registration, log in to access all of Trabaho's features.

2. <strong>Job Search</strong>

* Use the search bar to find job listings that match with your skills and preferences.

3. <strong>User Profile</strong>

* Your profile on the left of the screen
* You can manage your information with the edit profile button

4. <strong>Online Application</strong>

* When you find a job listing that interests you, click on it to see more details.
* Apply directly for the job through the platform by filling out the required information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/

[Java]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white
[Java-url]: https://www.java.com/en/

[SpringBoot]: https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot
[SpringBoot-url]: https://spring.io/projects/spring-boot

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[Axios]: https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/