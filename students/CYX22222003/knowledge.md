### Gradle
The Gradle build typically include three phases: initialization, configuration and execution.  

There are four fundamental components in Gradle: Projects, build scripts, tasks and plugin.  
  
A project typically corresponds to a software component that needs to be built, like a library or an application. It might represent a library JAR, a web application, or a distribution ZIP assembled from the JARs produced by other projects. There is a one-to-one relationship between projects and build scripts.    
  
The build script configures the project based on certain rules. It can add plugins to the build process, load dependencies and set up and configure tasks, i.e. individual unit of work that the build process will perform. Plugins can introduce new tasks, object and conventions to abstract duplicating configuration block, increasing the modularity and reusability fo the buld script.  

Resources:  
- https://tomgregory.com/gradle/gradle-tutorial-for-complete-beginners
- https://docs.gradle.org/current/userguide/userguide.html

### Github Actions
CI/CD platform automates build, test and deployment pipeline. There are several main components for Github Actions: workflow, event, job, action and runner

**Workflow**   
configurable automated process that will run one or more jobs. Defined by YAML file in `.github/workflows`. A repo can have multiple workflows.  
- One or more <ins>events</ins> that will trigger the workflow.
- One or more <ins>jobs</ins>, each of which will execute on a <ins>runner</ins> machine and run a series of one or more steps.
- Each step can either run a script that you define or run an <ins>action</ins>.

**Events**  
a specific activity that triggers the workflow run, e.g. creating PR and openning issues. 

**Jobs**  
A job is a set of steps in the workflow that is executed on the same runner. Each step can be a `shell script` or `action`

**Actions**  
Reusable set of repeated task. This helps reduce the amount of repetative code.  

**Runners**
a server that run the workflows when they are triggered. They can be configured with different OS.

**Concurrency in github actions**
By default, GitHub Actions allows multiple jobs within the same workflow, multiple workflow runs within the same repository, and multiple workflow runs across a repository owner's account to run concurrently. This means that multiple instances of the same workflow or job can run at the same time, performing the same steps.  

Use concurrency to ensure that only a single job or workflow using the same concurrency group will run at a time. GitHub Actions ensures that only one workflow or job with that key runs at any given time. When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be pending.

To also cancel any currently running job or workflow in the same concurrency group, specify cancel-in-progress: true  

### Docker

**official document**  
https://docs.docker.com/?_gl=1*433w1k*_ga*MjAxNDMzNDYxNi4xNzE1MzAwOTY4*_ga_XJWPQMJYHQ*MTcxNTMxMjY4My40LjEuMTcxNTMxMjY4My42MC4wLjA.


**Containerization**  
https://www.ibm.com/topics/containers

Containerization is a way to deploy application code to run on any physical or virtual environment without changes. Developers bundle application code with related libraries, configuration files, and other dependencies that the code needs to run. This single package of the software, called a container, can run independently on any platform. Containerization is a type of application virtualization.

**Use Docker for containerization**

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security lets you run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application.

**Docker architecture**

- The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface

- Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers

- The Docker daemon (`dockerd`) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

- The Docker client (`docker`) is the primary way that many Docker users interact with Docker. When you use commands such as `docker run`, the client sends these commands to `dockerd`, which carries them out. The `docker` command uses the Docker API. The Docker client can communicate with more than one daemon.

- A Docker registry stores Docker images. When you use the `docker pull` or `docker run` commands, Docker pulls the required images from your configured registry. When you use the `docker push` command, Docker pushes your image to your configured registry.

- Docker objects:
	- An _image_ is a read-only template with instructions for creating a Docker container.
	- A _container_ is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

**how it works**  
1. Dockerfile: how to configure documents that run the app
2. image: OS, dependency and code 
3. container: instantialisation of image -> stateless and portable

**Dockerfile**

A Dockerfile is a text-based document that's used to create a container image. It provides instructions to the image builder on the commands to run, files to copy, startup command, and more.

FROM -> base image to start + image tags
WORKDIR -> create source directory and put the source code
RUN -> install dependencies
USER -> create a non-root user 
COPY -> copy from local machine to image
ENV -> environment variable
...

Build
build the docker image based on Docker file
.dockerignore -> ignore certain files

Run: create a container based on the image

Kill & Stop: stop a container

define multiple docker applications in single yaml: https://docs.docker.com/compose/gettingstarted/ 

docker compose for client side with proxy: https://stackoverflow.com/questions/60808048/react-app-set-proxy-not-working-with-docker-compose

docker networking: https://www.geeksforgeeks.org/basics-of-docker-networking/

docker storage: https://www.geeksforgeeks.org/data-storage-in-docker/

### Lighthouse CI
Lighthouse CI is an open-source suite that brings Google’s Lighthouse audits into your continuous integration pipeline, automating performance, accessibility, SEO, and best-practice checks on every commit. It provides a CLI to run Lighthouse runs, assert thresholds, and upload reports, and can be paired with a dedicated Lighthouse Server for historical dashboards and CI-based pull-request annotations.

During the developmemt, I experienced with how to use Lighthouse CI to integrate it with current CI/CD workflow and use it to catch regressions related to github actions routing issue early.

### Vue framework
Vue.js is a progressive, component-based JavaScript framework for building user interfaces and single-page applications. It emphasizes an approachable API layered atop standard HTML, CSS, and JavaScript.

Some technical details:
- Component System: Single-file components (.vue files) with <template>, <script>, and <style scoped>.
- Declarative rendering with `createApp` and `data`
- Attribute binding with `v-bind` or `:`
- Event listener `v-on` and function declaration using `methods` option
- Form two-way bindings using `v-model`
- Conditional rendering with `v-if`
- List rendering with `v-list`
- Usage of computed property to track other reactive state used in its computation as dependencies, and change its states respectively
- `props` to pass parameters to child component and `emit` to trigger event from parents 
- Lifecycle Hooks: beforeCreate, mounted, updated, beforeUnmount (Vue 3) for DOM interaction.

### Java Gson library
Gson is Google’s open-source Java library for serializing Java objects to JSON and deserializing JSON back into Java objects. It handles arbitrary object graphs (including generics and nested classes) via reflection, with customization options via GsonBuilder for pretty printing, custom serializers/deserializers, and exclusion strategies

### JUnit testing
JUnit is the de facto Java unit-testing framework (xUnit family) that supports annotation-driven test methods (@Test, @BeforeEach, @AfterEach), various assertions, and extensions through the JUnit Platform and TestEngine APIs. JUnit 5 (Jupiter) introduced modular architecture, parameterized tests, and more flexible lifecycle control


### Cypress testing
Cypress is a modern, JavaScript-based end-to-end testing framework that executes tests directly in the browser, providing real-time reloading, automatic waiting, and an all-in-one API for E2E, component, and accessibility testing.

Some important techniques used in the development:
- DOM interaction
- Component testing
