### FrontEnd
#### CSS
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents.

`word-break` property: The word break property provides opportunities for soft wrapping. 
- Different languages can specify different ways of breaking a sentence of text
- Significance comes from deciding how to break up a word either by character or word. 
- For instance, in some languages like Ethopic, it has two styles of line breaking, namely by word seperators or between letters within a word. 
- Markbind is mainly catered to English content and thus specifies line breaks at spaces.

### Vue

#### Vue components
- Properties are being passed to vue components as props. These properties specifies the different configurations of the html templates. 
- Content passed by the `slots` API are considered to be owned by the parent component that passes them in and so styles do not apply to them. To apply styles to these components, target the surrounding container and then the style using a CSS selector such as `.someClass > *`

#### Virtual DOM

> “virtual” representation of a UI is kept in memory and synced with the “real” DOM
> 
- **Mounting -** A runtime renderer walking through the virtual dom and construct an actual dom tree from it
- **Patching -** Two copies of virtual DOM trees walked and compared differences are found and changes are applied to the actual DOM

Main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer

#### **How Vue components are mounted**

![vue render pipeline](./images/render-pipeline.png)

1. **Compilation** - Vue templates are compiled into **render functions.** The render functions are used to generate virtual doms
2. **Mounting** - render function is called, and virtual dom is walked to create actual dom 
    - Performed as a reactive effect, keeps track of all reactive dependencies used
3. **Patch** -  a dependency used during mount changes, the effect re-runs → a new, updated Virtual DOM tree is created and **patching** is done

Templates provides easy way to write the virtual dom and get compiled into a render function. However, the virtual dom can directly be created through the render function itself.

- Writing render functions directly provides flexibility when it comes to directly manipulating vnodes itself

#### **Vue optimisations when it comes to updating the virtual dom**

The downside of virtual dom is the runtime aspect of it. 

- the reconciliation algorithm cannot make any assumptions about the incoming virtual DOM tree, so it has to fully traverse the tree and diff the props of every vnode in order to ensure correctness
- even if a part of the tree never changes, new vnodes are always created for them on each re-render, resulting in unnecessary memory pressure.

- **Static hoisting** - static codes that are non reactive and never updated are hoisted (removed) from the virtual dom
    - when there are enough consecutive static elements, they will be condensed into a single "static vnode" that contains the plain HTML string for all these nodes
    - They also cache their corresponding DOM nodes on initial mount - if the same piece of content is reused elsewhere in the app, new DOM nodes are cloned
- **Patch flags -** flags that indicate whether a vnode requires reconciliation. Bitwise checks are used for these flags which are faster
    - Path flags are also applied to the type of children the vnodes has. (fragment) Their order is not changed and thus a path flag is also applied to them
- **Tree Flattening** - Tracked lines of code only applies to those that have patch flags applied
    
    ```
    <div> <!-- root block -->
      <div>...</div>         <!-- not tracked -->
      <div :id="id"></div>   <!-- tracked -->
      <div>                  <!-- not tracked -->
        <div>{{ bar }}</div> <!-- tracked -->
      </div>
    </div>
    
    div (block root)
    - div with :id binding
    - div with {{ bar }} binding
    ```
    
    - This creates a flattened tree and reduces the nodes that needs to be traversed.


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

#### LocalHost
Local testing of sites often uses [localhost](http://localhost) to run up a local server. This often resolves to the IP address of 127.0.0.1.

Markbind allows users to specify the address of localhosts in the IPV4 format. It does not support specifying IPV6 IP addresses. 

- IP addresses that starts with 127 are reserved and are “local loopback addresses”, this means it references a device on the private , local network
- Outside devices cannot reach local loopback addresses, making it suitable for testing.
- Locally, [localhost](http://localhost) acts as the domain name for the loopback IP address 127.0.0.1

### Bots
Markbind uses the [all-contributor](https://allcontributors.org/) bot to add contributors to automate the process of adding contributors to the project 