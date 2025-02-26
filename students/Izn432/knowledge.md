### Angular

Angular components are split into three parts, `*.component.ts`, `*.component.html` and `*.component.css`

#### `*.component.ts`

```
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
```
This segment is found at the top of the `*.component.ts` files. 
1. `selector` indicates the keyword that will be used in `*.component.html` files to identify this component. For example, `<app-auth> </app-auth>`
2. `templateUrl` indicates the filepath to the `*.component.html` file.
3. `styleUrls` indicates the filepath(s) to the `*.component.css` file(s).

#### `*.component.html`
This is the template file. Template files use mostly HTML syntax, with a bit of angular specific syntax included. This includes the structural directives such as *ngIf, *ngFor, etc. The [documentation](https://v17.angular.io/guide/architecture-components) is quite sufficient for understanding the angular syntax.

#### `*.component.css`
This is a stylesheet, using normal css. There is a `::ng-deep` selector available, which promotes a component style to global style.

### Arcsecond

Arcsecond is a string parsing library for javascript. An example arcsecond parser is as follows:
```
export const TutorModerationTodoParser = coroutine(function* () {
  yield str(TODO_HEADER);
  yield whitespace;

  const tutorResponses = yield many1(ModerationSectionParser);

  const result: TutorModerationTodoParseResult = {
    disputesToResolve: tutorResponses
  };
  return result;
});
```

1. `str(TODO_HEADER)` matches the starting of the string with `TODO_HEADER`.
1. `whitespace` matches the next part of the string with one or more whitespaces.
1. `many1(ModerationSectionParser)` applies the `ModerationSectionParser` one or more times.

### GraphQL

GraphQL is a architecture for building APIs like REST. Unlike REST where the server defines the structure of the response, in GraphQL, the client and request the exact data they need.

### Node 14.x support on macos

Apple laptops changed to using ARM64 architecture back in 2020. This meant that Node versions released before then were not directly supported by the ARM64 architecture. This caused issues with the github actions. There is a workaround for this by running `arch -x86_64` and manually installing node instead of using the setup-node Github action, but the simpler solution was to upgrade the test to use Node version 16.x.

### Playwright testing

Tests the application by hosting it on a browser then interacting with html components and checking for expected behaviour. You can use the Playwright extension for chrome and the extension for visual studio code to generate tests and selectors.
...
