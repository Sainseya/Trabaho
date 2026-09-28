<a name="readme-top"></a>

<div align="center">

# Trabaho

### The new job search platform

<a href="https://github.com/Darkbuilder646">Darkbuilder646</a> (frontend)
·
<a href="https://github.com/Sainseya">Sainseya</a> (backend)

</div>

<details>
<summary>Table of Contents</summary>

- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
  - [Installation](#installation)
- [Usage](#usage)

</details>

## About The Project

Trabaho is a user-friendly job search platform designed to help job seekers find opportunities that match their skills and needs. Whether you're an experienced professional looking for new opportunities or a student looking for your first job, Trabaho is here for you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

**Frontend:**

[![React][React.js]][React-url]
[![Vite][Vite]][Vite-url]
[![Tailwind][Tailwind.css]][Tailwind-url]

**Backend:**

[![Java][Java]][Java-url]
[![SpringBoot][SpringBoot]][SpringBoot-url]
[![PostgreSQL][PostgreSQL]][PostgreSQL-url]

**API:**

[![Axios][Axios]][Axios-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

- **Registration and Login**: Users can register with Trabaho by providing their basic information, then log in to access all the platform's features.
- **Job Search**: Browse a wide range of job offers from a variety of companies and sectors, filtered by preference.
- **User Profile**: Create and manage your own profile with experience, skills, and education to make your application more attractive to employers.
- **Online Application**: Apply directly to a job offer via the platform by filling in your additional information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get Trabaho up and running on your system, follow these steps.

### Prerequisites

- **Docker** and **Docker Compose**: download from [docker.com](https://www.docker.com/get-started)
- **Node.js** and **Yarn** (or npm) for the frontend
- Java 17 and Maven are only needed if you run the backend outside of Docker (see [Option B](#option-b-backend-with-a-local-jdk) below)

### Configuration

The backend reads its database and JWT settings from environment variables (see [`TrabahoBack/application.yml`](./TrabahoBack/src/main/resources/application.yml)), with dev-friendly defaults so it works out of the box. To customize them:

```bash
cd TrabahoBack
cp .env.example .env
# edit .env if you want different credentials or a fresh JWT secret
# (generate one with: openssl rand -base64 32)
```

> `.env` is gitignored. Never commit real secrets to `application.yml` or `docker-compose.yml`.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/trabaho/T-WEB-501-LIL_4.git
   cd Trabaho
   ```

2. **Start PostgreSQL (and the backend, if you go with Option A):**

   ```sh
   cd TrabahoBack
   docker compose up -d
   ```

   This starts Postgres on `localhost:5433` (remapped from 5432 to avoid clashing with other local Postgres instances) and, since `backend` is defined in the same `docker-compose.yml`, builds and starts the Spring Boot API on `localhost:8080` as well.

   #### Option B: backend with a local JDK

   If you'd rather run the backend directly (faster reloads with `spring-boot-devtools`), start only Postgres and run Maven yourself:

   ```sh
   cd TrabahoBack
   docker compose up -d postgres
   mvn spring-boot:run
   ```

   No JDK/Maven locally? Run it in a one-off container instead:

   ```sh
   docker run --rm -it --network host \
     -v "$(pwd)":/app -w /app \
     maven:3.9-eclipse-temurin-17 mvn spring-boot:run
   ```

3. **Frontend setup:**

   ```sh
   cd trabahoFront
   yarn install
   yarn dev
   ```

   Alternatively, run it in Docker with the provided `Dockerfile.dev`:

   ```sh
   cd trabahoFront
   docker build -f Dockerfile.dev -t trabaho-frontend .
   docker run --rm -p 5173:5173 -v "$(pwd)":/app trabaho-frontend
   ```

4. **Access Trabaho:**

   | Service | URL |
   |---|---|
   | Frontend | http://localhost:5173 |
   | Backend API | http://localhost:8080 |
   | API docs (Swagger UI) | http://localhost:8080/swagger-ui.html |
   | Health check | http://localhost:8080/actuator/health |
   | PostgreSQL | localhost:5433 |

   The database schema and the `ROLE_USER`/`ROLE_ADMIN` rows are created automatically by Flyway on first startup (see `TrabahoBack/src/main/resources/db/migration/`). The database still starts with zero user accounts: sign up from the frontend before logging in. Sessions renew via a refresh token (`POST /api/auth/refreshtoken`), so you won't be logged out until the refresh token itself expires (7 days by default).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. **Registration and Login**: create your account by providing your basic information, then log in to access all of Trabaho's features.
2. **Job Search**: use the search bar to find job listings that match your skills and preferences.
3. **User Profile**: manage your information from the profile panel on the left of the screen using the edit button.
4. **Online Application**: click a job listing to see more details, then apply directly through the platform.

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
