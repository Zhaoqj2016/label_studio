# Label Studio App

The Label Studio App is the cornerstone of the frontend aspect of Label Studio. This React-based application is where the magic of frontend development for Label Studio occurs. In this app, developers have the freedom and capability to create new pages and determine how libraries are utilized within the Label Studio environment. It's a purely frontend module, dedicated to crafting and refining the user interface and user experience aspects of Label Studio.

### Usage Instructions

_Important Note: These scripts must be executed within the web folder or its subfolders. This is crucial for the scripts to function correctly, as they are designed to work within the context of the web directory's structure and dependencies._

- **`yarn ls:watch`: Build LSF continuously**
    - Automatically builds the Label Studio on every change, providing a real-time development experience.
- **`yarn ls:e2e`: Execute end-to-end (e2e) tests on LS**
    - Executes comprehensive tests simulating user interactions from start to end, ensuring the frontend's overall functionality and integrity.
- **`yarn ls:unit`: Run unit tests on LS**
    - Runs tests on individual components to maintain high quality and reliability, crucial in collaborative development.

### Creating pages

Pages could be either Django templates or React components.

#### Django

Consider Django templates as a fallback if there's no proper React component for a page.

To create a page using Django is simple and straightforward: select an app within `label_studio/` directory, add a url and create a view with a html template. React app will handle it automatically if there's no React page for a particular route.

#### React

**Important notice:** you still have to add url to `urls.py` under one of the Django apps so the backend won't throw a 404. It's up to you where to add it.

All the pages live under `frontend/src/pages` and are self-hosted. It means every page defines it's route, title, breadcrumb item and content.

Pages organized as page sets: every folder under `frontend/src/pages` is a page set that can contain one or more pages.

To add a new page follow these steps:

##### Choose existing page set or create a new one

Let's say we're creating page set from scratch. To do that we need a directory: `frontend/src/pages/MyPageSet`

##### Create a component file under a page set directory

React components are simple functions, so it's enough to write:

```js
export const MyNewPage = () => <div>Page content</div>
```

This would be a legit component and a page

##### Setup title and route

This is done by adding properties to a component:

```js
MyNewPage.title = "Some title"
MyNewPage.path = "/my_page_path"
```

##### Create a page set

If you're creating a new page set there's an additional step: you need to create an `index.js` file in the root of your page set. A path would be `frontend/src/pages/MyPageSet/index.js`

This is necessary to group all the pages under the page set. Content of that file would be:

```js
export { MyNewPage } from './MyNewPage';
```

At this point you can also setup a layout wrapper around the page set. In this case content of the file will be a little bit different:

```js
import { MyNewPage } from './MyNewPage';

export const MyLayout = (props) => {
  return (
    <div className="some-extra-class">
      {props.children}
    </div>
  )
}

MyLayout.title = "My Page Set";
MyLayout.path = "/some_root"
```

Notice the `props` argument and `props.children`. This is the default React way of passing content to the component. It will work for every component you create. In this case `children` would be a content of a single page you create depending on current route.

Layout can also be extended with `title` and `path`.

Keep in mind that if you're setting `path` property on the layout, every page under this layout will become a nested route and will extend layout's path. It meast that the page we defined earlier will have a full path of `/some_root/my_page_path`.

##### Adding page set to a router

Now the last step is to add our page set to the app. This is done inside `frontend/src/pages/index.js`:

```js
// First we need to import the page set we've created
import * as MyPageSet from './MyPageSet'
/* ...other imports might be here... */

export const Pages = {
  /* other pages here */,
  // Next goes our page set
  MyPageSet,
}
```

Now we're done. We can now open the page `/some_root/my_page_path` in the browser and see everything in action.

### Page and Route component properties

* `title` – page title and a breadcrumb. can be string or function
* `routes` – nested list of routes
* `layout` – layout component to wrap around nested paths
* `pages` – set of pages
* `routes` – set of raw routes
* `exact` – if true, lookup exact path rather than a subscring

<img src="https://github.com/HumanSignal/label-studio/blob/develop/images/opossum_looking.png?raw=true" title="Hey everyone!" height="140" width="140" />
