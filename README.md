![IT4PROS LOGO](https://user-images.githubusercontent.com/86312558/177416312-89e38d23-2b34-43f8-abc2-77a5ede346d2.png)

## My first map

**Background**

This project was created as Capstone Project for Holberton Colombia, but watching the possible market, we decided to make it bigger. We will use it as template to build more developments and capabilities.

**Used Framework**
* We used `REACT` Technology, in fact is an JS library that can be used as front-end framework.

* We used `REACT-LEAFLET` dependencies to build the map and different interactions in it.

* As tilelayer we used `openstreetmaps` web resources because is an open source library to get the basic layers of the map.

* We used `LEAFLET JS` ibrary too to get some elements to build the map.

**Process**

1.- Create React app. 

`npx create-react-app [name of app]` Use npm to install it if you have not "npm " installed run `npm install -g npm`.

2.- Go to the newly created directory (the name is the same as you have choose like app name)

`cd [name of app].`

3.- Start the app with `npm start` this command will show you the result of your front end in the screen,is not easy?

**Dependences**

The creation of project will build some Folders and files that you will use to develop your project, let´s start from beggining:

* `public/index.html` is the page template 
* `src/index.js` is the JavaScript entry point

Those files `can not` be deleted or renamed, you can delete or rename the rest.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by webpack. You need to put any JS and CSS files inside src, otherwise webpack won’t see them.

If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level .git directory.

* `package.json` In this file we declare al libraries and dependences used in the project.
* `package-lock.json` backup for json file.

**src directory**

* `app.js` This is the main function file, all the dependences and files are inherited to it.

**src/components directory**

* `MapView.js` File where we build the map with different layers and interactions
* `IconLocation.js` File where we design the different logos which we use at project.
* `LocationMarker.js` File where we design the "you are here" marker and interaction code.
* `Markers.js` File to design `Urgencias` layer markers
* `MarkersCirugia.js` File to design `Cirugía` layer markers
* `MarkersConsultaExterna.js` File to design `Consulta Externa` layer markers
*`MarkersConsultaExternaEspecializada.js` File to design `Consulta Externa Especializada` layer markers
* `MarkersHospitalizacion` File to design `Hospitalización` layer markers
* `MarkersLaboratorio` File to design `Laboratorio` layer markers

**src/components/assets directory**

Folder where we envolved the different `.png` files used in the project.

Credits
-------

[](https://github.com/Imanolasolo/PGIS_project_IT4PROS#authorsblue_book)Author(s)📘
-----------------------------------------------------------------------------------

Work is owned and maintained by:

*   Alex O. Arevalo <([mail](mailto:3915@holbertonschool.com))\>
    
*   Imanol Asolo <[mail](mailto:3848@holbertonschool.com)\> [![M](https://camo.githubusercontent.com/a49886c8bf05b0e0e13e121b55d6ac2c194a971f62b584dc43d8747262bc373b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39312f4f637469636f6e732d6d61726b2d6769746875622e7376672f323570782d4f637469636f6e732d6d61726b2d6769746875622e7376672e706e67)](https://github.com/Imanolasolo) [![M](https://camo.githubusercontent.com/1b05a48d81b8175914b42dd254ed9ed3bc330a1bdcf13b9b274f59c34bfde841/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f66722f7468756d622f632f63382f547769747465725f426972642e7376672f323570782d547769747465725f426972642e7376672e706e67)](https://twitter.com/jjusturi) [![M](https://camo.githubusercontent.com/c7b2103bcfe06de13a8d78f46e8808ec27e4df5f079cc39902b44921b0f7f511/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63612f4c696e6b6564496e5f6c6f676f5f696e697469616c732e706e672f323570782d4c696e6b6564496e5f6c6f676f5f696e697469616c732e706e67)](https://www.linkedin.com/in/imanol-asolo-5ba9b42a/)
