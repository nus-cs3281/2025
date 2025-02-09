### Vue components
- Properties are being passed to vue components as props. These properties specifies the different configurations of the html templates. 
- Content passed by the `slots` API are considered to be owned by the parent component that passes them in and so styles do not apply to them. To apply styles to these components, target the surrounding container and then the style using a CSS selector such as `.someClass > *`

#### Testing:
Vue component test utilities library: [Wrapper](https://v1.test-utils.vuejs.org/api/wrapper/#properties)

According to my current understanding:
- Testing is done by first creating a wrapper with the component to be tested.
- The `$nextTick()` function of the vm of the wrapper is then called which waits for the next DOM update flush.
- The generated HTML is then compared with the snapshot that is generated. 

### DevOps
Markbind utilises several workflow files: 
1. `pr-message-reminder.yml` - Extracts out the PR description and checks if a proposed commit message is included.
2. TODO

[Github Actions](https://docs.github.com/en/actions/writing-workflows) is used when writing workflows. 
- Workflows are defined using YAML
- They are trigered by events that is used to automate checks 
- Workflows can make use of GitHub Actions context variables to gain information about the workflow runs, variables, runner environements, jobs and steps.

`github` context is freuqently used for retrieving useful information of the current workflow run. Some examples used(but not limited to) include :
- `github.actor` is used to detect the username of the user that triggered the workflow event. It can also be used to detect bots who trigger the events. 
- `github.event_name` is used to detect the name of the event that triggered the workflow. In the context of markbind, this is often used to check if the triggered workflow is of a particular event (such as pull request) before running the script. 

A [potential limitation](https://www-sciencedirect-com.libproxy1.nus.edu.sg/science/article/pii/S0164121224003315) arises when using `github.actor` to detect bot accounts. That is, if the bot is a github account that is automated by a user. In this case, github currently has no way to detect such accounts.
- Proposed potential workaround: Manually identify the human bot accounts. 

### Bots
Markbind uses the [all-contributor](https://allcontributors.org/) bot to add contributors to automate the process of adding contributors to the project 