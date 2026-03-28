# 📚 Complete Answer Guide — Quiz 2 (Midterm)

---

## 🟣 JAVASCRIPT — MCQ

| # | Topic | Answer |
|---|-------|--------|
| 1 | **Primitive data types** | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` — these 7 are primitives (objects/arrays are NOT primitives) |
| 2 | **var keyword scoping** | `var` is **function-scoped** (not block-scoped). It is also hoisted to the top of its function. |
| 3 | **let vs const** | `let` allows reassignment; `const` does NOT allow reassignment. Both are block-scoped. |
| 4 | **Variable declaration best practice** | Use `const` by default; use `let` when reassignment is needed; avoid `var`. |
| 5 | **typeof null** | `typeof null` returns `"object"` — this is a **known JavaScript bug/quirk**. |
| 6 | **Strict equality operator** | `===` checks both **value AND type** — no type coercion performed. |
| 7 | **Loose equality operator** | `==` checks value with **type coercion**. E.g. `"5" == 5` is `true`. |
| 8 | **Arrow function syntax** | `const fn = (x) => x * 2;` — Arrow functions use `=>` and have no own `this`. |
| 9 | **map() method** | Returns a **new array** by applying a function to each element. Does not mutate the original. |
| 10 | **filter() method** | Returns a **new array** with only elements that pass a test (callback returns `true`). |
| 11 | **reduce() method** | Reduces an array to a **single value** using an accumulator. Takes callback + optional initial value. |
| 12 | **JSON.stringify()** | Converts a JavaScript **object/array → JSON string**. |
| 13 | **JSON.parse()** | Converts a **JSON string → JavaScript object/array**. |
| 14 | **Nullish coalescing operator (??)** | Returns the right-hand side only if the left-hand side is `null` or `undefined`. E.g. `null ?? "default"` → `"default"`. |
| 15 | **Optional chaining (?.) operator** | Safely access nested properties. Returns `undefined` instead of throwing if a reference is null/undefined. E.g. `obj?.property`. |
| 16 | **Template literals** | Use backticks `` ` `` and `${}` for embedded expressions. E.g. `` `Hello ${name}` ``. |
| 17 | **DOM root access** | `document` is the root object of the DOM. E.g. `document.getElementById(...)`. |
| 18 | **querySelector() method** | `document.querySelector(selector)` returns the **first** matching element or `null`. |
| 19 | **querySelectorAll() return type** | Returns a **NodeList** (not an array, but iterable) of all matching elements. |
| 20 | **textContent vs innerHTML** | `textContent` sets/gets plain text (safe, no HTML parsing). `innerHTML` parses HTML (can be a security risk). |
| 21 | **classList methods** | `.add()`, `.remove()`, `.toggle()`, `.contains()` — used to manipulate CSS classes on elements. |
| 22 | **createElement and appendChild** | `document.createElement('tag')` creates element; `.appendChild(el)` inserts it into the DOM. |
| 23 | **Removing an element from DOM** | `element.remove()` removes the element itself. Or `parent.removeChild(child)`. |
| 24 | **addEventListener recommended approach** | Use `element.addEventListener('event', handler)` — preferred over inline `onclick=""`. |
| 25 | **addEventListener syntax** | `element.addEventListener('click', function() { ... })` — first arg is event name string, second is callback. |
| 26 | **Web Application Definition** | A web application is a **client-server application** that runs in a browser via the internet/network. |

---

## 🌐 WEB FUNDAMENTALS — MCQ

| # | Topic | Answer |
|---|-------|--------|
| 1 | **Client-Server Architecture** | The **client** sends requests; the **server** processes them and sends responses. |
| 2 | **Web Server Analogy** | A web server is like a **waiter** — it takes your request, goes to the kitchen (database/logic), and returns your response. |
| 3 | **Framework vs Library** | A **framework** calls your code (inversion of control); a **library** is code you call. Angular is a framework. |
| 4 | **Angular Classification** | Angular is a **front-end framework** (MVC/component-based). |
| 5 | **Angular Language** | Angular uses **TypeScript** as its primary language. |
| 6 | **React Classification** | React is a **front-end library** (not a full framework). |
| 7 | **Django Classification** | Django is a **back-end web framework** (Python). |
| 8 | **Django Users** | Django is used by **backend developers** who build server-side logic and APIs. |
| 9 | **Frontend Technologies** | HTML, CSS, JavaScript (and frameworks like Angular, React, Vue) are frontend technologies. |
| 10 | **Horizontal Scaling** | **Horizontal scaling** = adding more servers. Vertical scaling = adding more power to one server. |
| 11 | **Load Balancer** | A **load balancer** distributes incoming traffic across multiple servers to improve performance and reliability. |
| 12 | **API Definition** | An **API (Application Programming Interface)** is a contract/interface that allows two systems to communicate. |
| 13 | **Waterfall Methodology** | **Waterfall** is a linear, sequential development process. Each phase must complete before the next begins. |
| 14 | **Agile Methodology** | **Agile** is iterative and flexible. Work is done in short cycles (sprints). Feedback is incorporated continuously. |
| 15 | **Scrum Framework** | **Scrum** is an Agile framework with sprints, daily standups, sprint reviews, and retrospectives. |
| 16 | **Server-Side Role** | The server handles **business logic, database queries, authentication**, and returns data to clients. |
| 17 | **Dedicated Database in Scaling** | Separating the database to its own server allows **independent scaling** and better performance. |
| 18 | **Spiral Model** | The **Spiral model** combines iterative development with risk analysis at each cycle. |

---

## 🟧 HTML — MCQ

| # | Topic | Answer |
|---|-------|--------|
| 1 | **HTML Abbreviation** | **HyperText Markup Language** |
| 2 | **HTML Heading Levels** | `<h1>` through `<h6>` — 6 levels total |
| 3 | **Largest Heading Tag** | `<h1>` is the largest and most important heading |
| 4 | **Hyperlink Tag** | `<a href="url">text</a>` |
| 5 | **Image Tag** | `<img src="..." alt="...">` — self-closing |
| 6 | **Image Source Attribute** | `src` attribute specifies the image URL/path |
| 7 | **Unordered List Tag** | `<ul>` creates an unordered (bulleted) list |
| 8 | **List Item Tag** | `<li>` is used inside `<ul>` or `<ol>` |
| 9 | **Table Row Tag** | `<tr>` defines a table row |
| 10 | **Table Data Cell** | `<td>` defines a table data cell; `<th>` for header cell |
| 11 | **Unique Identifier Attribute** | `id` attribute — must be unique within a page |
| 12 | **Class Attribute Purpose** | `class` is used to group elements for CSS styling or JS targeting |
| 13 | **Custom Data Attribute** | `data-*` attributes (e.g. `data-id="5"`) store custom data on elements |
| 14 | **Inline Style Attribute** | `style="color: red;"` applies CSS directly on the element |
| 15 | **HTML Comment Syntax** | `<!-- This is a comment -->` |
| 16 | **Form Tag Purpose** | `<form>` wraps input elements and handles data submission |
| 17 | **Text Input Type** | `<input type="text">` — creates a single-line text box |
| 18 | **Password Input Behavior** | `<input type="password">` — masks characters (shows dots/asterisks) |
| 19 | **Radio Button Behavior** | `<input type="radio">` — only **one** radio button per group (same `name`) can be selected |
| 20 | **Checkbox vs Radio** | **Checkbox** allows multiple selections; **radio** allows only one per group |
| 21 | **Select Element** | `<select>` creates a dropdown; options inside with `<option>` tags |
| 22 | **Textarea Element** | `<textarea>` creates a multi-line text input field |
| 23 | **Label Element Purpose** | `<label for="inputId">` associates text with an input for accessibility and click targeting |
| 24 | **Required Attribute** | `required` attribute on an input prevents form submission if empty |
| 25 | **Placeholder Attribute** | `placeholder="hint text"` shows grey hint text inside the input when empty |
| 26 | **Readonly vs Disabled** | `readonly` — user can't edit but value IS submitted; `disabled` — user can't edit and value is NOT submitted |
| 27 | **HTML5 Date Input** | `<input type="date">` — shows a date picker in modern browsers |
| 28 | **HTML5 Color Input** | `<input type="color">` — shows a color picker |

---

## 🟥 CSS — MCQ

| # | Topic | Answer |
|---|-------|--------|
| 1 | **CSS Abbreviation** | **Cascading Style Sheets** |
| 2 | **CSS Purpose** | Controls the **visual presentation** (layout, colors, fonts, spacing) of HTML elements |
| 3 | **Three Ways to Add CSS** | **Inline** (`style=""`), **Internal** (`<style>` tag in `<head>`), **External** (`<link rel="stylesheet">`) |
| 4 | **External CSS Benefit** | One file can style multiple pages — **reusability and maintainability** |
| 5 | **Internal CSS Location** | Inside `<style>` tags in the `<head>` section of the HTML file |
| 6 | **CSS Rule Structure** | `selector { property: value; }` |
| 7 | **CSS Declaration** | A single `property: value;` pair inside a CSS rule block |
| 8 | **Class Selector Syntax** | `.className { }` — dot prefix |
| 9 | **ID Selector Syntax** | `#idName { }` — hash prefix |
| 10 | **Tag Selector** | `p { }` or `div { }` — selects all elements of that type |
| 11 | **Tag and Class Combined Selector** | `p.highlight { }` — selects `<p>` elements that also have class `highlight` |
| 12 | **Hover Pseudo-class** | `a:hover { }` — applies styles when the mouse is over the element |
| 13 | **Link Pseudo-classes** | `:link` (unvisited), `:visited` (visited), `:hover` (hovered), `:active` (being clicked) |
| 14 | **CSS Hex Color** | `#RRGGBB` — e.g. `#ff0000` = red. Short form: `#RGB` e.g. `#f00` |
| 15 | **RGB Color Notation** | `rgb(255, 0, 0)` — red, green, blue values from 0–255 |
| 16 | **CSS Color Methods** | `#hex`, `rgb()`, `rgba()`, `hsl()`, `hsla()`, named colors (e.g. `red`) |
| 17 | **CSS Box Model Layers** | From inside out: **content → padding → border → margin** |
| 18 | **Margin vs Padding** | **Padding** = space inside border (between content and border). **Margin** = space outside border (between elements). |
| 19 | **Margin and Padding Transparency** | Both margin and padding are **transparent** (inherit the background of parent/page) |
| 20 | **Absolute vs Relative Units** | **Absolute**: `px`, `pt`, `cm` (fixed). **Relative**: `em`, `rem`, `%`, `vw`, `vh` (scale with context). |
| 21 | **Em Unit Definition** | `1em` = the font-size of the **current element** |
| 22 | **Rem Unit Definition** | `1rem` = the font-size of the **root element** (`<html>`), default 16px |
| 23 | **Default Position Value** | `position: static` — the default; elements flow in normal document flow |
| 24 | **Position Fixed** | `position: fixed` — positioned relative to the **viewport**, stays on screen when scrolling |
| 25 | **Position Absolute** | `position: absolute` — positioned relative to its **nearest positioned ancestor** (non-static) |
| 26 | **Display None vs Visibility Hidden** | `display: none` — element removed from layout (takes no space). `visibility: hidden` — invisible but still takes up space. |
| 27 | **Display Flex** | `display: flex` — turns the element into a **flex container**; children become flex items |
| 28 | **Flexbox Justify-Content** | Controls alignment along the **main axis** (horizontal by default). Values: `flex-start`, `center`, `space-between`, `space-around`, etc. |
| 29 | **Flexbox Align-Items** | Controls alignment along the **cross axis** (vertical by default). Values: `stretch`, `center`, `flex-start`, `flex-end`. |
| 30 | **CSS Specificity Order** | Inline styles > ID selectors > Class/pseudo-class/attribute selectors > Tag selectors |

---

## 🔵 TYPESCRIPT — Single Choice & MSQ

| # | Topic | Answer |
|---|-------|--------|
| 1 | **Valid type annotations** | `let x: number`, `let s: string`, `let b: boolean`, `let a: number[]`, `let t: [string, number]` (tuple) |
| 2 | **Type inference behavior** | TypeScript **automatically infers** the type from the assigned value. E.g. `let x = 5` → TypeScript infers `x: number` |
| 3 | **Interface features** | Can define property types, optional properties (`?`), readonly properties, method signatures, and can be extended with `extends` |
| 4 | **Class declaration** | `class Animal { constructor(public name: string) {} }` — uses `class` keyword with typed constructor |
| 5 | **Class inheritance** | Uses `extends` keyword. Child class can call `super()` to invoke parent constructor. Can override methods. |
| 6 | **Enum declaration** | `enum Direction { Up, Down, Left, Right }` — numeric by default (starts at 0). Or `enum Color { Red = "RED" }` for string enums. |
| 7 | **Union types** | `let val: string \| number` — allows multiple types. Narrowing (e.g. `typeof val === 'string'`) is needed to handle each type. |
| 8 | **The any type** | `any` disables type checking — use sparingly. It lets a variable hold any type without compile errors. |
| 9 | **Function type annotations** | `function add(a: number, b: number): number { return a + b; }` — parameter types + return type |
| 10 | **TypeScript vs JavaScript** | TypeScript adds: static typing, interfaces, enums, generics, access modifiers. It compiles to JavaScript. |
| 11 | **Primitive types** | `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint` |
| 12 | **Array declarations** | `number[]` or `Array<number>` — both are valid. Also `string[]`, `boolean[]`, etc. |
| 13 | **Object type checking** | TypeScript checks object shape at compile time. Objects must match the declared type/interface. |
| 14 | **Compile errors** | TypeScript throws errors for: wrong types, missing properties, calling non-existent methods, wrong number of args |
| 15 | **Interface vs Class** | **Interface** = type definition only (no runtime code). **Class** = has constructor, methods, runtime code. |
| 16 | **Constructor and super()** | In a child class, `super()` must be called before accessing `this`. It calls the parent class constructor. |
| 17 | **Enum usage patterns** | Use enum values as `Direction.Up`, not the raw number. String enums are more readable in logs/APIs. |
| 18 | **Type annotation placement** | After variable name: `let x: number`. After param: `(x: number)`. After function parens for return type: `(): string`. |
| 19 | **Variable declarations** | `const` for constants, `let` for mutable variables. `var` is avoided in TypeScript. |
| 20 | **TypeScript compilation** | TypeScript is compiled to JavaScript using `tsc`. The output `.js` file runs in browsers/Node. |
| 21 | **Type safety benefits** | Early error detection, better IDE autocompletion, self-documenting code, safer refactoring |
| 22 | **Interface property types** | Interface properties can be: required, optional (`?`), readonly, any valid TypeScript type |
| 23 | **Typed function calls** | TypeScript checks that function arguments match the declared parameter types at compile time |
| 24 | **Class property access** | `public` (default) — accessible anywhere. `private` — only within the class. `protected` — class and subclasses. |
| 25 | **String enum vs numeric enum** | Numeric: auto-increments from 0. String: each value must be manually assigned. String enums are more readable. |
| 26 | **Union type narrowing** | Use `typeof`, `instanceof`, or type guards to narrow a union type before using type-specific methods. |
| 27 | **Type compatibility** | TypeScript uses structural typing — if an object has all required properties, it's compatible regardless of name. |
| 28 | **Extends keyword** | `class Dog extends Animal` — Dog inherits from Animal. `interface B extends A` — B extends A's shape. |
| 29 | **TypeScript in Angular** | Angular is written in TypeScript. Decorators (`@Component`, `@Injectable`), strong typing, interfaces all come from TS. |
| 30 | **Implicit vs explicit typing** | Implicit: `let x = 5` (TypeScript infers `number`). Explicit: `let x: number = 5`. |

---

## 🔴 ANGULAR — Single Choice (MCQ)

| # | Topic | Answer |
|---|-------|--------|
| 1 | **@Component decorator purpose** | Marks a class as an Angular component and provides metadata: `selector`, `template`/`templateUrl`, `styles`/`styleUrls`, `standalone`, `imports` |
| 2 | **Interpolation syntax** | `{{ expression }}` — double curly braces render a value in the template |
| 3 | **Event binding syntax** | `(eventName)="handler()"` — parentheses. E.g. `(click)="onClick()"` |
| 4 | **Two-way binding syntax** | `[(ngModel)]="property"` — "banana in a box" syntax. Requires `FormsModule`. |
| 5 | **FormsModule requirement** | Must import `FormsModule` from `@angular/forms` in the component's `imports` array for `[(ngModel)]` to work |
| 6 | **@for track keyword** | `track item.id` — required in `@for` to uniquely identify items for efficient DOM updates |
| 7 | **@if / @else syntax** | `@if (condition) { ... } @else { ... }` — Angular 17+ control flow syntax |
| 8 | **@empty block** | `@for (item of items; track item.id) { } @empty { <p>No items</p> }` — renders when the list is empty |
| 9 | **Property binding** | `[property]="expression"` — square brackets. E.g. `[src]="imageUrl"`, `[disabled]="isDisabled"` |
| 10 | **Component selector** | The `selector` in `@Component` defines the HTML tag name used to embed the component, e.g. `selector: 'app-root'` → `<app-root>` |
| 11 | **input() signal function** | `title = input<string>()` — modern signal-based input. Replaces `@Input()` decorator. Read with `this.title()`. |
| 12 | **output() and emit()** | `clicked = output<void>()` — defines event. Emit with `this.clicked.emit()`. Parent listens with `(clicked)="handler()"`. |
| 13 | **Parent-child communication** | Parent → Child via `input()` / `@Input()`. Child → Parent via `output()` / `@Output()` + EventEmitter. |
| 14 | **ngOnInit lifecycle hook** | Called **once** after the component's inputs are first set. Used for initialization logic, HTTP calls. |
| 15 | **ngOnDestroy lifecycle hook** | Called **just before** the component is destroyed. Used to clean up subscriptions, timers, etc. |
| 16 | **ngOnChanges lifecycle hook** | Called whenever an `@Input()` value changes. Receives a `SimpleChanges` object. |
| 17 | **$index in @for** | `$index` gives the **zero-based index** of the current iteration inside `@for`. |
| 18 | **Standalone component imports** | In `@Component({ standalone: true, imports: [CommonModule, RouterModule, ...] })` — import what you need directly |
| 19 | **Accessing input value** | Signal input: `this.title()` — call it like a function. `@Input()`: `this.title` — direct property access. |
| 20 | **Accessing input in template** | Signal input: `{{ title() }}`. `@Input()`: `{{ title }}`. |
| 21 | **@Injectable decorator** | Marks a class as a **service** that can be injected via DI. `providedIn: 'root'` makes it a singleton app-wide. |
| 22 | **inject() function** | `private service = inject(MyService)` — functional DI alternative to constructor injection |
| 23 | **HttpClient.get()** | `this.http.get<T>('url')` — returns an **Observable**. Must `subscribe()` to execute. |
| 24 | **subscribe() method** | `.subscribe({ next: (data) => ..., error: (err) => ..., complete: () => ... })` — executes the Observable |
| 25 | **Routes configuration** | `const routes: Routes = [{ path: 'home', component: HomeComponent }]` — array of `Route` objects |
| 26 | **routerLink directive** | `<a routerLink="/path">` — Angular's declarative navigation. Prevents full page reload. |
| 27 | **router-outlet** | `<router-outlet>` — placeholder tag where the router renders matched components |
| 28 | **Route parameters** | Define as `{ path: 'user/:id', component: UserComponent }`. Access with `ActivatedRoute`. |
| 29 | **signal() for state** | `count = signal(0)` — creates reactive state. Read: `count()`. Update: `count.set(1)` or `count.update(v => v+1)`. |
| 30 | **provideRouter** | `provideRouter(routes)` in `app.config.ts` bootstraps the Angular router for standalone apps |

---

## 🔴 ANGULAR — MSQ (Multiple Select)

| # | Topic | Answer |
|---|-------|--------|
| 1 | **Template binding types** | Interpolation `{{ }}`, property binding `[ ]`, event binding `( )`, two-way `[( )]` |
| 2 | **@for requirements** | Requires `track` expression. Has variables: `$index`, `$first`, `$last`, `$even`, `$odd`. Supports `@empty`. |
| 3 | **[(ngModel)] binding** | Requires `FormsModule` import, binds to a component property, updates on user input, syncs both ways |
| 4 | **@Component metadata** | `selector`, `template`/`templateUrl`, `styles`/`styleUrls`, `standalone`, `imports`, `changeDetection` |
| 5 | **@if control flow** | Supports `@else if` and `@else` blocks. Replaces `*ngIf`. Does not require `NgIf` import in standalone. |
| 6 | **Interpolation capabilities** | Can display variables, call methods, evaluate expressions, use ternary operators. Cannot assign values. |
| 7 | **Event binding** | Binds to DOM events (`click`, `input`, `submit`). Handler method receives `$event` object. Uses `( )`. |
| 8 | **Standalone component** | Has `standalone: true` in `@Component`. Imports its own dependencies. No need for NgModule. |
| 9 | **input() function features** | Returns a signal, supports type generics, has `.required()` variant, read in template with `()` |
| 10 | **output() function features** | Creates event emitter, call `.emit(value)` to fire, parent listens with `(eventName)` binding |
| 11 | **Lifecycle hooks** | `ngOnInit`, `ngOnDestroy`, `ngOnChanges`, `ngAfterViewInit`, `ngAfterContentInit`, etc. |
| 12 | **ngOnChanges behavior** | Called before `ngOnInit` on first change. Called on every `@Input()` change. Receives `SimpleChanges`. |
| 13 | **Child component usage** | Import child in parent's `imports[]`, add `<app-child>` in template, pass data via inputs |
| 14 | **Component file structure** | `.ts` (class logic), `.html` (template), `.css`/`.scss` (styles), `.spec.ts` (tests) |
| 15 | **Component communication patterns** | `@Input()`/`input()` for parent→child, `@Output()`/`output()` for child→parent, services for sibling/unrelated |
| 16 | **Service characteristics** | Singleton (with `providedIn: 'root'`), injectable, no template, holds business logic/state/HTTP calls |
| 17 | **Observable and subscribe** | Observable is lazy (needs subscribe), can emit multiple values, supports error/complete callbacks |
| 18 | **Route definition properties** | `path`, `component`, `redirectTo`, `pathMatch`, `children`, `canActivate`, `data` |
| 19 | **Router navigation** | Declarative: `routerLink`. Programmatic: `Router.navigate(['/path'])` or `navigateByUrl('/path')` |
| 20 | **ActivatedRoute usage** | Read `snapshot.params`, `snapshot.queryParams`, or subscribe to `paramMap` observable |
| 21 | **signal() usage** | `signal(initialValue)`, read with `()`, set with `.set()`, update with `.update()`, computed with `computed()` |
| 22 | **HttpClient setup** | Add `provideHttpClient()` to `app.config.ts` providers. Inject `HttpClient` in service. |
| 23 | **subscribe error handling** | `.subscribe({ next: ..., error: (err) => console.error(err), complete: () => ... })` |
| 24 | **Route redirects** | `{ path: '', redirectTo: '/home', pathMatch: 'full' }` — redirects empty path |
| 25 | **Wildcard route** | `{ path: '**', component: NotFoundComponent }` — catches all unmatched routes. Must be last. |
| 26 | **@Component imports array** | Add all directives, pipes, modules, and child components used in the template |
| 27 | **Template vs templateUrl** | `template`: inline HTML string. `templateUrl`: path to external `.html` file. Only one used at a time. |
| 28 | **Service injection methods** | Constructor injection: `constructor(private s: MyService)`. Functional: `private s = inject(MyService)`. |
| 29 | **routerLink features** | Works on any element, supports array syntax `[routerLink]="['/path', id]"`, uses history API |
| 30 | **Lifecycle hook order** | `ngOnChanges` → `ngOnInit` → `ngDoCheck` → `ngAfterContentInit` → `ngAfterContentChecked` → `ngAfterViewInit` → `ngAfterViewChecked` → `ngOnDestroy` |

---

## 🟠 ANGULAR — TRUE / FALSE

| # | Statement | Answer | Reason |
|---|-----------|--------|--------|
| 1 | **T/F - Interpolation** (`{{ }}` outputs values to template) | ✅ **TRUE** | `{{ expression }}` renders dynamic values in the template |
| 2 | **T/F - @for requires track** | ✅ **TRUE** | `track` is **required** in Angular 17+ `@for` for efficient list rendering |
| 3 | **T/F - ngOnInit runs multiple times** | ❌ **FALSE** | `ngOnInit` runs **once** after first initialization |
| 4 | **T/F - Services singleton** (with `providedIn: 'root'`) | ✅ **TRUE** | A single instance is shared across the entire app |
| 5 | **T/F - HttpClient returns Observable** | ✅ **TRUE** | `HttpClient` methods return **Observables**, not Promises |
| 6 | **T/F - router-outlet** (is where routed components appear) | ✅ **TRUE** | `<router-outlet>` is the placeholder for routed component rendering |
| 7 | **T/F - output modifies parent directly** | ❌ **FALSE** | `output()` only **emits events**; the parent decides what to do |
| 8 | **T/F - super() in child constructor** | ✅ **TRUE** | `super()` must be called in a child class constructor before `this` |
| 9 | **T/F - Interfaces in JavaScript** | ❌ **FALSE** | Interfaces are a **TypeScript-only** feature; they don't exist in plain JavaScript |
| 10 | **T/F - subscribe executes request** | ✅ **TRUE** | Observables are **lazy** — HTTP requests only execute when `.subscribe()` is called |
| 11 | **T/F - signal() creates reactive state** | ✅ **TRUE** | `signal()` creates a reactive value that Angular tracks for change detection |
| 12 | **T/F - inject() replaces constructor DI** | ✅ **TRUE** | `inject()` is the modern functional alternative to constructor injection |
| 13 | **T/F - routerLink requires RouterModule import** | ✅ **TRUE** | In standalone components, `RouterModule` or `RouterLink` must be imported for `routerLink` to work |
| 14 | **T/F - @for replaces *ngFor** | ✅ **TRUE** | Angular 17+ `@for` is the new built-in control flow replacing `*ngFor` directive |
| 15 | **T/F - HttpClient returns Promise** | ❌ **FALSE** | HttpClient returns **Observable**, not Promise |
| 16 | **T/F - input() creates two-way binding** | ❌ **FALSE** | `input()` is **one-way** (parent → child only). Two-way uses `[(ngModel)]` |
| 17 | **T/F - provideHttpClient in app.config** | ✅ **TRUE** | For standalone apps, `provideHttpClient()` is added to `providers` in `app.config.ts` |
| 18 | **T/F - standalone components need NgModule** | ❌ **FALSE** | Standalone components do **NOT** need NgModule — that's their purpose |
| 19 | **T/F - ActivatedRoute for query params** | ✅ **TRUE** | `ActivatedRoute` is used to access route params, query params, and route data |
| 20 | **T/F - @Component selector is optional** | ❌ **FALSE** | The `selector` is **required** for components embedded as HTML tags (optional only for routed components — but best practice is to always include it) |

---

## 🟢 ANGULAR — Short Answer

| # | Topic | Answer |
|---|-------|--------|
| 1 | **Component decorator** | `@Component` |
| 2 | **Service decorator** | `@Injectable` |
| 3 | **Lifecycle hook - init** | `ngOnInit` |
| 4 | **Lifecycle hook - destroy** | `ngOnDestroy` |
| 5 | **Lifecycle hook - changes** | `ngOnChanges` |
| 6 | **Module for ngModel** | `FormsModule` |
| 7 | **Wildcard route** | `**` (e.g. `{ path: '**', component: NotFoundComponent }`) |
| 8 | **Observable execution** | `subscribe()` |
| 9 | **Signal update method** | `.set()` or `.update()` |
| 10 | **Generate component CLI** | `ng generate component name` or `ng g c name` |
| 11 | **Two-way binding syntax** | `[(ngModel)]` |
| 12 | **Event binding bracket type** | Parentheses `( )` |
| 13 | **Property binding bracket type** | Square brackets `[ ]` |
| 14 | **Interpolation syntax** | `{{ }}` (double curly braces) |
| 15 | **Track keyword in @for** | `track` (e.g. `track item.id`) |
| 16 | **Signal read syntax** | `signalName()` — call it as a function |
| 17 | **Router outlet tag** | `<router-outlet>` |
| 18 | **Navigation directive** | `routerLink` |
| 19 | **HTTP client class** | `HttpClient` |
| 20 | **Input decorator function** | `input()` |
| 21 | **Output decorator function** | `output()` |
| 22 | **Emit event method** | `.emit()` |
| 23 | **Route parameter service** | `ActivatedRoute` |
| 24 | **Dependency injection function** | `inject()` |
| 25 | **Provide router function** | `provideRouter(routes)` |
| 26 | **HTTP provider function** | `provideHttpClient()` |
| 27 | **Component selector prefix** | `app-` (e.g. `app-root`, `app-header`) |
| 28 | **Control flow else syntax** | `@else` |
| 29 | **Empty list template block** | `@empty` |
| 30 | **Standalone imports array** | `imports: []` inside `@Component` |

---

## 🟢 ANGULAR — Fill in the Blank (Code Completions)

### 1. Angular Component Decorator
```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
```

### 2. Angular @for Loop with Track
```html
@for (item of items; track item.id) {
  <li>{{ item.name }}</li>
}
```

### 3. Angular @if / @else Conditional Rendering
```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
} @else {
  <p>Please log in.</p>
}
```

### 4. Two-way Data Binding with ngModel
```html
<input [(ngModel)]="username" placeholder="Enter name" />
<p>Hello, {{ username }}</p>
```
```typescript
// In @Component imports:
imports: [FormsModule]
// In class:
username = '';
```

### 5. Signal-based Input and Output
```typescript
// Child component
import { input, output } from '@angular/core';

export class ChildComponent {
  title = input<string>();
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
```
```html
<!-- Parent template -->
<app-child [title]="'Hello'" (clicked)="onChildClick()" />
```

### 6. Component Lifecycle - ngOnInit
```typescript
import { Component, OnInit } from '@angular/core';

@Component({ ... })
export class MyComponent implements OnInit {
  ngOnInit(): void {
    console.log('Component initialized');
  }
}
```

### 7. Injectable Service with providedIn
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['item1', 'item2'];
  }
}
```

### 8. Angular Route Configuration
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
```

### 9. Signals and inject() for Async Data
```typescript
import { Component, signal, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ ... })
export class MyComponent implements OnInit {
  private http = inject(HttpClient);
  data = signal<string[]>([]);

  ngOnInit() {
    this.http.get<string[]>('/api/data').subscribe(result => {
      this.data.set(result);
    });
  }
}
```

### 10. Router Outlet and Navigation Links
```html
<!-- app.component.html -->
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/about">About</a>
</nav>
<router-outlet />
```
```typescript
// In @Component imports:
imports: [RouterOutlet, RouterLink]
```

### 11. Event binding on button
```html
<button (click)="handleClick()">Click me</button>
```
```typescript
handleClick(): void {
  console.log('Button clicked!');
}
```

### 12. @for with track and @empty
```html
@for (user of users; track user.id) {
  <li>{{ user.name }}</li>
} @empty {
  <li>No users found.</li>
}
```

### 13. Two-way binding import and usage
```typescript
@Component({
  standalone: true,
  imports: [FormsModule],
  template: `<input [(ngModel)]="name"> <p>{{ name }}</p>`
})
export class MyComponent {
  name = '';
}
```

### 14. Interpolation and expression
```html
<p>{{ firstName + ' ' + lastName }}</p>
<p>{{ 2 + 2 }}</p>
<p>{{ isAdmin ? 'Admin' : 'User' }}</p>
```

### 15. @if and @else
```html
@if (score >= 90) {
  <p>Grade: A</p>
} @else if (score >= 70) {
  <p>Grade: B</p>
} @else {
  <p>Grade: C or below</p>
}
```

### 16. Component class with properties
```typescript
@Component({
  selector: 'app-profile',
  standalone: true,
  template: `<h1>{{ name }}</h1><p>Age: {{ age }}</p>`
})
export class ProfileComponent {
  name = 'Alice';
  age = 30;
}
```

### 17. Property binding on element
```html
<img [src]="imageUrl" [alt]="imageAlt" />
<button [disabled]="isLoading">Submit</button>
```
```typescript
imageUrl = 'https://example.com/photo.jpg';
imageAlt = 'Profile photo';
isLoading = false;
```

### 18. Child component with input and output
```typescript
// child.component.ts
@Component({
  selector: 'app-child',
  standalone: true,
  template: `<button (click)="onBtnClick()">{{ label() }}</button>`
})
export class ChildComponent {
  label = input<string>('Click me');
  btnClicked = output<string>();

  onBtnClick() {
    this.btnClicked.emit('Button was clicked!');
  }
}
```

### 19. Parent template using child component
```html
<!-- parent.component.html -->
<app-child 
  [label]="'Press me'" 
  (btnClicked)="handleClick($event)" />
<p>{{ message }}</p>
```
```typescript
// parent.component.ts
message = '';
handleClick(msg: string) {
  this.message = msg;
}
```

### 20. Lifecycle hooks implementation
```typescript
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({ ... })
export class MyComponent implements OnInit, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Input changed:', changes);
  }
  ngOnInit(): void {
    console.log('Initialized');
  }
  ngOnDestroy(): void {
    console.log('Destroyed - clean up subscriptions!');
  }
}
```

### 21. Standalone component imports
```typescript
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent { }
```

### 22. Input signal access in template
```typescript
// child.component.ts
name = input<string>('Guest');
```
```html
<!-- child.component.html -->
<p>Hello, {{ name() }}!</p>
```

### 23. Output event emitter
```typescript
import { output } from '@angular/core';

export class ButtonComponent {
  buttonClicked = output<void>();

  onClick() {
    this.buttonClicked.emit();
  }
}
```
```html
<!-- Usage in parent -->
<app-button (buttonClicked)="onButtonClicked()" />
```

### 24. Service with dependency injection
```typescript
// user.service.ts
@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    return ['Alice', 'Bob', 'Charlie'];
  }
}

// component.ts
export class MyComponent implements OnInit {
  private userService = inject(UserService);
  users: string[] = [];

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
```

### 25. HTTP GET with Observable
```typescript
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://api.example.com/items');
  }
}
```

### 26. Subscribe to Observable
```typescript
export class MyComponent implements OnInit {
  private apiService = inject(ApiService);
  items: Item[] = [];

  ngOnInit() {
    this.apiService.getItems().subscribe({
      next: (data) => this.items = data,
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Done')
    });
  }
}
```

### 27. Route with parameter
```typescript
export const routes: Routes = [
  { path: 'user/:id', component: UserDetailComponent }
];
```

### 28. Reading route parameters
```typescript
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  userId = '';

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    // Or reactively:
    // this.route.paramMap.subscribe(params => this.userId = params.get('id')!);
  }
}
```

### 29. Navigation template
```html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact</a>
</nav>
<router-outlet />
```

### 30. Signal state management
```typescript
export class CounterComponent {
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }
  decrement() {
    this.count.update(v => v - 1);
  }
  reset() {
    this.count.set(0);
  }
}
```
```html
<p>Count: {{ count() }}</p>
<button (click)="increment()">+</button>
<button (click)="decrement()">-</button>
<button (click)="reset()">Reset</button>
```

---

## 💻 TYPESCRIPT — Coding Tasks

### Array of Numbers - Sum
```typescript
function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// Example: sum([1, 2, 3, 4, 5]) → 15
```

### Power Calculator
```typescript
function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}
// Example: power(2, 3) → 8
```

### First and Last Element
```typescript
function firstAndLast(arr: number[]): [number, number] {
  return [arr[0], arr[arr.length - 1]];
}
// Example: firstAndLast([1,2,3,4,5]) → [1, 5]
```

### Sum of Digits
```typescript
function sumOfDigits(n: number): number {
  return Math.abs(n).toString().split('').reduce((acc, d) => acc + Number(d), 0);
}
// Example: sumOfDigits(123) → 6
```

### Count Words
```typescript
function countWords(sentence: string): number {
  return sentence.trim().split(/\s+/).filter(w => w.length > 0).length;
}
// Example: countWords("hello world") → 2
```

### Array Contains Element
```typescript
function contains(arr: number[], target: number): boolean {
  return arr.includes(target);
}
// Example: contains([1,2,3], 2) → true
```

### Absolute Value
```typescript
function absoluteValue(n: number): number {
  return Math.abs(n);
}
// Example: absoluteValue(-7) → 7
```

### Repeat String N Times
```typescript
function repeatString(str: string, n: number): string {
  return str.repeat(n);
}
// Example: repeatString("ab", 3) → "ababab"
```

### Find Minimum in Array
```typescript
function findMin(arr: number[]): number {
  return Math.min(...arr);
}
// Example: findMin([3,1,4,1,5]) → 1
```

### String to Uppercase
```typescript
function toUpperCase(str: string): string {
  return str.toUpperCase();
}
// Example: toUpperCase("hello") → "HELLO"
```

### Multiply Array Elements
```typescript
function multiplyArray(arr: number[]): number {
  return arr.reduce((acc, num) => acc * num, 1);
}
// Example: multiplyArray([1,2,3,4]) → 24
```

### Even Numbers from Array
```typescript
function filterEven(arr: number[]): number[] {
  return arr.filter(n => n % 2 === 0);
}
// Example: filterEven([1,2,3,4,5,6]) → [2,4,6]
```

### Count Characters
```typescript
function countChars(str: string): number {
  return str.length;
}
// Example: countChars("hello") → 5
```

### Reverse a String
```typescript
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
// Example: reverseString("hello") → "olleh"
```

### Max of Three Numbers
```typescript
function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}
// Example: maxOfThree(3, 7, 2) → 7
```

### Type of Value
```typescript
function typeOf(value: any): string {
  return typeof value;
}
// Example: typeOf(42) → "number", typeOf("hi") → "string"
```

### Add Two Numbers (TypeScript)
```typescript
function add(a: number, b: number): number {
  return a + b;
}
// Example: add(3, 5) → 8
```

### String Length
```typescript
function stringLength(str: string): number {
  return str.length;
}
// Example: stringLength("angular") → 7
```

### Boolean Check - Positive Number
```typescript
function isPositive(n: number): boolean {
  return n > 0;
}
// Example: isPositive(5) → true, isPositive(-1) → false
```

### String Array - Join
```typescript
function joinStrings(arr: string[], separator: string = ', '): string {
  return arr.join(separator);
}
// Example: joinStrings(["a","b","c"]) → "a, b, c"
```

---

## 💻 JAVASCRIPT — Coding Tasks

### Sum Two Numbers
```javascript
function sumTwoNumbers(a, b) {
  return a + b;
}
// Example: sumTwoNumbers(3, 4) → 7
```

### Even or Odd
```javascript
function evenOrOdd(n) {
  return n % 2 === 0 ? 'Even' : 'Odd';
}
// Example: evenOrOdd(4) → "Even", evenOrOdd(7) → "Odd"
```

### Reverse an Array
```javascript
function reverseArray(arr) {
  return [...arr].reverse();
}
// Example: reverseArray([1,2,3]) → [3,2,1]
```

### Find Maximum in Array
```javascript
function findMax(arr) {
  return Math.max(...arr);
}
// Example: findMax([3,1,9,2]) → 9
```

### FizzBuzz
```javascript
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(i);
  }
  return result;
}
// Example: fizzBuzz(15) → [1,2,"Fizz",4,"Buzz",...,"FizzBuzz"]
```

### Array Sum using reduce
```javascript
function arraySum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
// Example: arraySum([1,2,3,4]) → 10
```

### Filter Even Numbers
```javascript
function filterEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}
// Example: filterEvens([1,2,3,4,5,6]) → [2,4,6]
```

### Double Array Elements with map
```javascript
function doubleElements(arr) {
  return arr.map(n => n * 2);
}
// Example: doubleElements([1,2,3]) → [2,4,6]
```

### Factorial Calculator
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// Example: factorial(5) → 120
```

### Palindrome Check
```javascript
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
// Example: isPalindrome("racecar") → true
```

### Count Vowels
```javascript
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}
// Example: countVowels("Hello World") → 3
```

### Word Counter
```javascript
function wordCounter(sentence) {
  return sentence.trim().split(/\s+/).filter(w => w).length;
}
// Example: wordCounter("hello world foo") → 3
```

### Capitalize First Letter of Each Word
```javascript
function capitalizeWords(str) {
  return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
// Example: capitalizeWords("hello world") → "Hello World"
```

### Template Literal Greeting
```javascript
function greeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
// Example: greeting("Alice", 25) → "Hello, my name is Alice and I am 25 years old."
```

### Sort Array Ascending
```javascript
function sortAscending(arr) {
  return [...arr].sort((a, b) => a - b);
}
// Example: sortAscending([3,1,4,1,5,9]) → [1,1,3,4,5,9]
```

### Fibonacci Sequence
```javascript
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2]);
  }
  return seq.slice(0, n);
}
// Example: fibonacci(7) → [0,1,1,2,3,5,8]
```

### Remove Duplicates from Array
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// Example: removeDuplicates([1,2,2,3,3,4]) → [1,2,3,4]
```

### Array Intersection
```javascript
function arrayIntersection(a, b) {
  return a.filter(item => b.includes(item));
}
// Example: arrayIntersection([1,2,3,4],[2,4,6]) → [2,4]
```

### Object Key Counter
```javascript
function countKeys(obj) {
  return Object.keys(obj).length;
}
// Example: countKeys({a:1, b:2, c:3}) → 3
```

### Grade Calculator
```javascript
function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}
// Example: getGrade(85) → "B"
```

---
