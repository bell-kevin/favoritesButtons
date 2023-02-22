# Favorites Buttons

Create a new React Native app project that displays 2 buttons, each one for a favorite item, such as favorite car and favorite color, or favorite music group and favorite song, or favorite holiday and favorite number. The topic of the "favorite" can be anything you choose, just need to have 2 favorites. When you click on the button for the first favorite, the text area displays that text; when you click on the button for the second favorite, the text area displays that text. Both buttons can be pressed over and over with visible results, unlike in the previous project, where you could only click on the button once and see results.

This project requires state to manage the data that displays in response to a button event. At launch, the text area displays "Press Button to Show Favorites" -- note that this should display on 2 lines, so include "\n" in that content. Below that, show 2 buttons, one for each of your chosen Favorites. These must display vertically, with space between the buttons. Hint: consider using a <View> component for each button.

Hint: The press of the buttons needs a function to perform. You can create a separate function for that "pressHandler", as the tutorial does, or you can use an inline function. In this case, with 2 functions needed, it might be easier to use an inline function for the onPress property. If the state variable is "outputText", and the function to change it is "setOutputText", then the button code could be:

   <Button title="Favorite School" onPress={() => setOutputText("Davis Tech")} />

There is no separate function to set that outputText variable. When it is simple and short, inline functions may be better than separate functions.

Note that the buttons must be displayed vertically and separate from each other and the text area. You must have background color that is not white. As with the previous project, change the font size of the text area. In the example above, the color of the text is white to be more visible with the red background color. You may choose background color, text color (if appropriate), font size and weight. If the text for one of your favorites is lengthy, make sure it doesn't touch the edges by setting width, as you saw in the previous project.

Take 3 screenshots as shown above.

Submission: Zip together the root folder and the 3 screenshots, and submit the single zipped folder.

![p](https://github.com/bell-kevin/favoritesButtons/blob/main/screenShots/Capture.PNG)

![p](https://github.com/bell-kevin/favoritesButtons/blob/main/screenShots/car.PNG)

![p](https://github.com/bell-kevin/favoritesButtons/blob/main/screenShots/color.PNG)

https://reactnative.dev/docs/environment-setup

### Reading: 

Storing Projects When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
