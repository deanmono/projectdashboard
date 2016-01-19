## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository.

### Clone Repo

Clone the repository using git:

```
https://github.com/deanmono/projectdashboard.git
cd projectdashboard
```

### Install Dependencies

* We get the angular code via `bower`.

We have preconfigured `bower` so we can simply do:

```
bower install
```

You should find that you have a new folder in your project.

* `app/bower_components` - contains the angular framework files


## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.
