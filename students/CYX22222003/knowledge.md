### Gradle
The Gradle build typically include three phases: initialization, configuration and execution.  

There are four fundamental components in Gradle: Projects, build scripts, tasks and plugin.  
  
A project typically corresponds to a software component that needs to be built, like a library or an application. It might represent a library JAR, a web application, or a distribution ZIP assembled from the JARs produced by other projects. There is a one-to-one relationship between projects and build scripts.    
  
The build script configures the project based on certain rules. It can add plugins to the build process, load dependencies and set up and configure tasks, i.e. individual unit of work that the build process will perform. Plugins can introduce new tasks, object and conventions to abstract duplicating configuration block, increasing the modularity and reusability fo the buld script.  

Resources:  
- https://tomgregory.com/gradle/gradle-tutorial-for-complete-beginners
- https://docs.gradle.org/current/userguide/userguide.html

## Github Actions
CI/CD platform automates build, test and deployment pipeline. There are several main components for Github Actions: workflow, event, job, action and runner

**Workflow**   
configurable automated process that will run one or more jobs. Defined by YAML file in `.github/workflows`. A repo can have multiple workflows.  

**Events**  
a specific activity that triggers the workflow run, e.g. creating PR and openning issues. 

**Jobs**  
A job is a set of steps in the workflow that is executed on the same runner. Each step can be a `shell script` or `action`

**Actions**  
Reusable set of repeated task. This helps reduce the amount of repetative code.  

**Runners**
a server that run the workflows when they are triggered. They can be configured with different OS.

### Vue framework

### Java Gson library


