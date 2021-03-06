# fyn
Neighborhood map web application

Welcome to _ecDusty's_ FYN web app, an open source project.

The purpose


## Folder Layout

As you can see there is just the 1 folder within this repository:

  * _src_: Contains the source code of your website. Basically the easy to read and edit version of the site.

When you have gulp up & running and are testing/ distributing your site, you'll see 2 more folders being created during this process:
  * _test_: This is the folder which will hold the code that is still under testing.
  * _dist_: This is the distribution code of my site. All the code here is just the minified versions of the source code.


## Creating Distribution Ready Code From Your Source Code

Once you've tweeked your source code to your liking, its  time to minify your HTML, CSS and JS. Also lets not forgot about optimizing your images as well! Don't just minify your source code files! This is very important to leave your source code files in form that is easily readable and editable, should they require tweeking in the future.

The best way to produce your distribution ready site is to use a tool like gulp or grunt which automates this process. The amount of time saved compared to the amount time needed to learn gulp or grunt is exponecially huge!

Pick which ever tool you find works best for you, but for this toolkit _Gulp_ is used.

### Getting started up with Gulp.

As I develop on a Windows machine, these instructions are for windows users using Git's Bach command line, but for the most part I believe they should work on Mac's as well, as PowerShell isn't used.

1. Install npm on your machine
  * The simplest way of doing this is installing [Node JS][1], found at the provided link.

2. Install Gulp Globally - _using command line_
  * Make sure to include the '-g' flag. This tells npm to install it globally.
    ```sh
    $ npm install gulp -g
    ```

3. Run npm install program - _using command line_
  * As you have already downloaded my project, you have my **package.json** file, which has a list of all the dependencies and dev-dependencies needed for the project. By running 'npm install', your tell npm to run it's 'install' package on all the dependencies & dev-dependencies located within the package.json file.
  * This is quicker than installing each gulp package required seperately
    * _Make sure your are in the repository folder before you start the npm install process_
    ```sh
    $ npm install
    ```
      * Small side note, gulp-eslint doesn't always install correctly. You may have to install it a second time to make sure.
        ```sh
        $npm install gulp-eslint
        ```

4. Start testing your website
  * Just run gulp. This will create the test version of your site within the created 'dev' folder and start a local server.
    ```sh
    $ gulp
    ```

  a. Run your local server for testing
  * Using 'gulp serve:dev' you can launch the website. **Serve** will watch to see if any changes are made to the source files, create the dev version of those files, than update the browser for you.
    ```sh
    $ gulp serve:dev
    ```
  * Should you like to make any changes to the site and make it your own, just start editing the files within the 'src' folder, **Serve** will handle the rest.

5. Run your Production ready Site
  * You're finished editing the site to your liking, give it one last test and run the 'serve:dist' task. This will export you project to the 'dist' folder while also creating the smallest version of each file.
    ```sh
    $ gulp serve:dist
    ```

6. Export your production ready project
  * This will fill your 'dist' folder with your production ready code, then zip up both the 'src' & 'dist' folders. Giving you one file to send off.
    ```sh
    $ gulp export
    ```

### Credit

1) The work of asynchronysly loading outside scourced scripts originally came from [JavaScript.info][2]'s website. Showing how to combine promises with the act of loading scripts.

2) Loading Animation from [LOADING.IO][3]

### Sources

[1]: https://nodejs.org/en/
[2]: https://javascript.info/callbacks
[3]: https://loading.io/css/

### To Do List

* Add full application description
* Add Timeout for iView class, so active class is removed, then after scroll away content changes and active class added back.