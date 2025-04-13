### Continuous Delivery

As I became more senior, I wanted to learn more about the Dev Ops side of Software development as I felt it a very important part that I knew so little about. 
These are a few things I learned:
* A guarantee in a software release is the necessity of a revision, and a quick one.
* Smaller batches of changes result in higher quality
* While number of bugs might increase with smaller releases, fixing those bugs from small changes should be trivial
* Costly releases will lead to long term disadvantages. Consider the long-term outcome of the current infrastructure as the application grows, including rebuilding modularly in order to facilitate scrappy, innovative updates through a lower cost release cycle.
* Flag guarding can be used to control the inclusion or expression of feature code in the product. I.e., Disabling feature flags should allow build tools to modularly remove that feature without impacting the rest of the build. For example, a in-development feature only enabled for development builds.
* Key performance indicator metrics with clear thresholds are critical to make decisions on features that will never be perfect.
* We should focus on and ship only what gets used, one way to find out is through A/B testing. Clients do not enjoy having multiple updates for no reason, or taking up space on their device.
* It is important to make data-driven decisions even on deployments. One way is by deploying only to a subset of your users and with enough users you can determine if the change was a positive one.
* The product must be protected from the developers. I.e, the user experience must come first regardless of a developer's urgency to release a feature, it must be isolated from other components, separation of concerns, rigorous testing, etc. This is especially important to enforce in regular and quick release cycles as they could be easily overlooked


[Software Engineering at Google](https://abseil.io/resources/swe-book)

### TMUX
TMUX was something I heard a lot about in the developer resource I consumed and touted itself as an unmatched productivity booster. With a healthy amount of skepticism, I decided to learn about and give it a try, even telling others about it in my lightning talks.

TMUX allows you to encapsulate multiple programs into a session and switch between them, helping multitask across different projects
TMUX lets you seamlessly navigate without leaving the workspace
TMUX has a host of customization options and developer resources
Most importantly, TMUX looks cool to people watching!  

Apart from the resources below, I spent hours putting into practice tmux in my own projects, including CATcher and WATcher!
Overall I found it to be a great addition to my toolset and helped increase my productivity.  

[TMUX official docs](https://github.com/tmux/tmux/wiki)  
[Complete TMUX tutorial](https://www.youtube.com/watch?v=Yl7NFenTgIo)  
[Tmux has forever changed the way I write code.](https://www.youtube.com/watch?v=DzNmUNvnB04)  
[Tmux in 100 seconds](https://www.youtube.com/watch?v=vtB1J_zCv8I)

### DevContainers
One of the tools I learned about through the lightning talks that stuck with me is DevContainers. It stuck with me because it seemed to solve such a prevalent problem and would help someone like me who often worked on many projects for school, work or recreation and had a tough time dealing with increasing storage costs with the inability to easily delete resource used for old projects.

Dev Containers lets you fully encapsulate an entire development environment, letting you create or delete it in its entirety
Dev Containers is customizable through a config file that can be shared to all maintainers, standardizing development
Dev Containers is fully integrated into VSCode and thus can be hosted on cloud solutions like GitPod

I found dev containers especially attractive when reviewing PRs of relatively small changes. The ability to quickly spin up a cloud environment and view, even edit the code if necessary was so easy with dev containers. I could do it all from my web browser even on my phone.

[DevContainers official docs](https://code.visualstudio.com/docs/devcontainers/containers)  
[Lightning Talk on dev containers]()
