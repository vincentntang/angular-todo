
## Install

- npm install
- ng serve

## Notes of things work

![](https://imgur.com/T3TODcu)

Infrastructure

- About
- Home
  - Header
  - Todos
    - AddToDo
    - Todo-item (Many)

### OnLoad

When the app starts, `ngOnInit` gets called under `todos` which grabs in the service, the top 5 items in `json.typicode`

### Creating a Todo

When you create a todo, the following happens:

1: ADD-TODO_onSubmit -> form gets submitted gets executed, sending up the binded `title` payload upward

2: TODOs_addToDo -> catches it, via the same keyword `addToDo`. It then calls a service, that's been dependency injected into the app

3: SERVICE_addToDo -> nothing right now

### Deleting a Todo

1: TODO-ITEM_onDelete -> this gets called at child level. It emits back up a `TODO` that's been passed to it one levle up in the HTML. It calls the function in the HTML, which emits the event back up.

2: TODOs_deleteToDo -> `deleteToDo` is the same keyword it reference. From here, it finds which `todo` to remove, removes locally using filter. Calls endpoint

3: SERVICE_deleteToDo -> nothing right now

### Checking a Todo

1: TODO-Item_onToggle -> sets the status flag here

2: SERVICE_toggleCompleted -> Nothing as of now