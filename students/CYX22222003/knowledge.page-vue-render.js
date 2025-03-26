
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2025/index.html","title":"Home"}},[_v("CS3281&2-2025/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2025"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2025-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2025/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2025/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"gradle"}},[_v("Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The Gradle build typically include three phases: initialization, configuration and execution.")]),_v(" "),_c('p',[_v("There are four fundamental components in Gradle: Projects, build scripts, tasks and plugin.")]),_v(" "),_c('p',[_v("A project typically corresponds to a software component that needs to be built, like a library or an application. It might represent a library JAR, a web application, or a distribution ZIP assembled from the JARs produced by other projects. There is a one-to-one relationship between projects and build scripts.")]),_v(" "),_c('p',[_v("The build script configures the project based on certain rules. It can add plugins to the build process, load dependencies and set up and configure tasks, i.e. individual unit of work that the build process will perform. Plugins can introduce new tasks, object and conventions to abstract duplicating configuration block, increasing the modularity and reusability fo the buld script.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://tomgregory.com/gradle/gradle-tutorial-for-complete-beginners"}},[_v("https://tomgregory.com/gradle/gradle-tutorial-for-complete-beginners")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/userguide.html"}},[_v("https://docs.gradle.org/current/userguide/userguide.html")])])]),_v(" "),_c('h3',{attrs:{"id":"github-actions"}},[_v("Github Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("CI/CD platform automates build, test and deployment pipeline. There are several main components for Github Actions: workflow, event, job, action and runner")]),_v(" "),_c('p',[_c('strong',[_v("Workflow")]),_c('br'),_v("\nconfigurable automated process that will run one or more jobs. Defined by YAML file in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".github/workflows")]),_v(". A repo can have multiple workflows.")]),_v(" "),_c('ul',[_c('li',[_v("One or more "),_c('ins',[_v("events")]),_v(" that will trigger the workflow.")]),_v(" "),_c('li',[_v("One or more "),_c('ins',[_v("jobs")]),_v(", each of which will execute on a "),_c('ins',[_v("runner")]),_v(" machine and run a series of one or more steps.")]),_v(" "),_c('li',[_v("Each step can either run a script that you define or run an "),_c('ins',[_v("action")]),_v(".")])]),_v(" "),_c('p',[_c('strong',[_v("Events")]),_c('br'),_v("\na specific activity that triggers the workflow run, e.g. creating PR and openning issues.")]),_v(" "),_c('p',[_c('strong',[_v("Jobs")]),_c('br'),_v("\nA job is a set of steps in the workflow that is executed on the same runner. Each step can be a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("shell script")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("action")])]),_v(" "),_c('p',[_c('strong',[_v("Actions")]),_c('br'),_v("\nReusable set of repeated task. This helps reduce the amount of repetative code.")]),_v(" "),_c('p',[_c('strong',[_v("Runners")]),_v("\na server that run the workflows when they are triggered. They can be configured with different OS.")]),_v(" "),_c('p',[_c('strong',[_v("Concurrency in github actions")]),_v("\nBy default, GitHub Actions allows multiple jobs within the same workflow, multiple workflow runs within the same repository, and multiple workflow runs across a repository owner's account to run concurrently. This means that multiple instances of the same workflow or job can run at the same time, performing the same steps.")]),_v(" "),_c('p',[_v("Use concurrency to ensure that only a single job or workflow using the same concurrency group will run at a time. GitHub Actions ensures that only one workflow or job with that key runs at any given time. When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be pending.")]),_v(" "),_c('p',[_v("To also cancel any currently running job or workflow in the same concurrency group, specify cancel-in-progress: true")]),_v(" "),_c('h3',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("official document")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"https://docs.docker.com/?_gl=1"}},[_v("https://docs.docker.com/?_gl=1")]),_c('em',[_v("433w1k")]),_v("_ga"),_c('em',[_v("MjAxNDMzNDYxNi4xNzE1MzAwOTY4")]),_v("_ga_XJWPQMJYHQ*MTcxNTMxMjY4My40LjEuMTcxNTMxMjY4My42MC4wLjA.")]),_v(" "),_c('p',[_c('strong',[_v("Containerization")]),_c('br'),_v(" "),_c('a',{attrs:{"href":"https://www.ibm.com/topics/containers"}},[_v("https://www.ibm.com/topics/containers")])]),_v(" "),_c('p',[_v("Containerization is a way to deploy application code to run on any physical or virtual environment without changes. Developers bundle application code with related libraries, configuration files, and other dependencies that the code needs to run. This single package of the software, called a container, can run independently on any platform. Containerization is a type of application virtualization.")]),_v(" "),_c('p',[_c('strong',[_v("Use Docker for containerization")])]),_v(" "),_c('p',[_v("Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.")]),_v(" "),_c('p',[_v("Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security lets you run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application.")]),_v(" "),_c('p',[_c('strong',[_v("Docker architecture")])]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface")])]),_v(" "),_c('li',[_c('p',[_v("Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers")])]),_v(" "),_c('li',[_c('p',[_v("The Docker daemon ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dockerd")]),_v(") listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.")])]),_v(" "),_c('li',[_c('p',[_v("The Docker client ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker")]),_v(") is the primary way that many Docker users interact with Docker. When you use commands such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker run")]),_v(", the client sends these commands to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dockerd")]),_v(", which carries them out. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker")]),_v(" command uses the Docker API. The Docker client can communicate with more than one daemon.")])]),_v(" "),_c('li',[_c('p',[_v("A Docker registry stores Docker images. When you use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker pull")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker run")]),_v(" commands, Docker pulls the required images from your configured registry. When you use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker push")]),_v(" command, Docker pushes your image to your configured registry.")])]),_v(" "),_c('li',[_c('p',[_v("Docker objects:")]),_v(" "),_c('ul',[_c('li',[_v("An "),_c('em',[_v("image")]),_v(" is a read-only template with instructions for creating a Docker container.")]),_v(" "),_c('li',[_v("A "),_c('em',[_v("container")]),_v(" is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.")])])])]),_v(" "),_c('p',[_c('strong',[_v("how it works")])]),_v(" "),_c('ol',[_c('li',[_v("Dockerfile: how to configure documents that run the app")]),_v(" "),_c('li',[_v("image: OS, dependency and code")]),_v(" "),_c('li',[_v("container: instantialisation of image -> stateless and portable")])]),_v(" "),_c('p',[_c('strong',[_v("Dockerfile")])]),_v(" "),_c('p',[_v("A Dockerfile is a text-based document that's used to create a container image. It provides instructions to the image builder on the commands to run, files to copy, startup command, and more.")]),_v(" "),_c('p',[_v("FROM -> base image to start + image tags\nWORKDIR -> create source directory and put the source code\nRUN -> install dependencies\nUSER -> create a non-root user\nCOPY -> copy from local machine to image\nENV -> environment variable\n...")]),_v(" "),_c('p',[_v("Build\nbuild the docker image based on Docker file\n.dockerignore -> ignore certain files")]),_v(" "),_c('p',[_v("Run: create a container based on the image")]),_v(" "),_c('p',[_v("Kill & Stop: stop a container")]),_v(" "),_c('p',[_v("define multiple docker applications in single yaml: "),_c('a',{attrs:{"href":"https://docs.docker.com/compose/gettingstarted/"}},[_v("https://docs.docker.com/compose/gettingstarted/")])]),_v(" "),_c('p',[_v("docker compose for client side with proxy: "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/60808048/react-app-set-proxy-not-working-with-docker-compose"}},[_v("https://stackoverflow.com/questions/60808048/react-app-set-proxy-not-working-with-docker-compose")])]),_v(" "),_c('p',[_v("docker networking: "),_c('a',{attrs:{"href":"https://www.geeksforgeeks.org/basics-of-docker-networking/"}},[_v("https://www.geeksforgeeks.org/basics-of-docker-networking/")])]),_v(" "),_c('p',[_v("docker storage: "),_c('a',{attrs:{"href":"https://www.geeksforgeeks.org/data-storage-in-docker/"}},[_v("https://www.geeksforgeeks.org/data-storage-in-docker/")])]),_v(" "),_c('h3',{attrs:{"id":"lighthouse-ci"}},[_v("Lighthouse CI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lighthouse-ci","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"vue-framework"}},[_v("Vue framework"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-framework","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"java-gson-library"}},[_v("Java Gson library"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#java-gson-library","onclick":"event.stopPropagation()"}})])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")])]),_v(" on Wed, 26 Mar 2025, 10:56:53 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  