'use strict';

(function () {

    var app = angular.module('myApp');

    app.controller('homeController', function ($scope) {
        $scope.pageInfo = {
            title: "Let's have some fun with the Office Fabric UI Framework",
            bodyContent: "The Office Fabric UI Framework is a mobile-first, front-end CSS framework for developers that used web standards such as HTML, CSS, theming, iconography, and patterns. This is a new emrging framework that can be used to compliment or replace bootstrap."
        };
    });

    app.controller('gridSystemController', function ($scope) {

        $scope.pageContent = {
            title: "Living It Up with the Office Fabric UI Grid System",
            paragraphs: [
                "Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.",
                "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.",
                "Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est."
            ],
            sidebarTitle: "Search Options",
            sidebarContent: "Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor. Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue.",
            topic1Title: "Moose Sighting in Dev Lab",
            topic1Content: "Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.",
            topic2Title: "More Developers Angling Towards Angular",
            topic2Content: "lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.",
            topic3Title: "Trump Trumps Trump",
            topic3Content: "Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est. Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus."
        };

    });

    app.controller('iconsController', function ($scope) {
        var iconString = "ms-Icon--alert ms-Icon--alert2 ms-Icon--alertOutline ms-Icon--arrowDown ms-Icon--arrowDown2 ms-Icon--arrowDownLeft ms-Icon--arrowDownRight ms-Icon--arrowLeft ms-Icon--arrowRight ms-Icon--arrowUp ms-Icon--arrowUp2 ms-Icon--arrowUpLeft ms-Icon--arrowUpRight ms-Icon--ascending ms-Icon--at ms-Icon--attachment ms-Icon--bag ms-Icon--balloon ms-Icon--bell ms-Icon--boards ms-Icon--bold ms-Icon--bookmark ms-Icon--books ms-Icon--briefcase ms-Icon--bundle ms-Icon--cake ms-Icon--calendar ms-Icon--calendarDay ms-Icon--calendarPublic ms-Icon--calendarWeek ms-Icon--calendarWorkWeek ms-Icon--camera ms-Icon--car ms-Icon--caretDown ms-Icon--caretDownLeft ms-Icon--caretDownOutline ms-Icon--caretDownRight ms-Icon--caretLeft ms-Icon--caretLeftOutline ms-Icon--caretRight ms-Icon--caretRightOutline ms-Icon--caretUp ms-Icon--caretUpLeft ms-Icon--caretUpOutline ms-Icon--caretUpRight ms-Icon--cart ms-Icon--cat ms-Icon--chart ms-Icon--chat ms-Icon--chatAdd ms-Icon--check ms-Icon--checkbox ms-Icon--checkboxCheck ms-Icon--checkboxEmpty ms-Icon--checkboxMixed ms-Icon--checkPeople ms-Icon--chevronDown ms-Icon--chevronLeft ms-Icon--chevronRight ms-Icon--chevronsDown ms-Icon--chevronsLeft ms-Icon--chevronsRight ms-Icon--chevronsUp ms-Icon--chevronThickDown ms-Icon--chevronThickLeft ms-Icon--chevronThickRight ms-Icon--chevronThickUp ms-Icon--chevronThinDown ms-Icon--chevronThinLeft ms-Icon--chevronThinRight ms-Icon--chevronThinUp ms-Icon--chevronUp ms-Icon--circleBall ms-Icon--circleBalloons ms-Icon--circleCar ms-Icon--circleCat ms-Icon--circleCoffee ms-Icon--circleDog ms-Icon--circleEmpty ms-Icon--circleFill ms-Icon--circleFilled ms-Icon--circleHalfFilled ms-Icon--circleInfo ms-Icon--circleLightning ms-Icon--circlePill ms-Icon--circlePlane ms-Icon--circlePlus ms-Icon--circlePoodle ms-Icon--circleUnfilled ms-Icon--classNotebook ms-Icon--classroom ms-Icon--clock ms-Icon--clutter ms-Icon--coffee ms-Icon--collapse ms-Icon--conflict ms-Icon--contact ms-Icon--contactForm ms-Icon--contactPublic ms-Icon--copy ms-Icon--creditCard ms-Icon--creditCardOutline ms-Icon--dashboard ms-Icon--descending ms-Icon--desktop ms-Icon--deviceWipe ms-Icon--dialpad ms-Icon--directions ms-Icon--document ms-Icon--documentAdd ms-Icon--documentForward ms-Icon--documentLandscape ms-Icon--documentPDF ms-Icon--documentReply ms-Icon--documents ms-Icon--documentSearch ms-Icon--dog ms-Icon--dogAlt ms-Icon--dot ms-Icon--download ms-Icon--drm ms-Icon--drop ms-Icon--dropdown ms-Icon--editBox ms-Icon--ellipsis ms-Icon--embed ms-Icon--event ms-Icon--eventCancel ms-Icon--eventInfo ms-Icon--eventRecurring ms-Icon--eventShare ms-Icon--exclamation ms-Icon--expand ms-Icon--eye ms-Icon--favorites ms-Icon--fax ms-Icon--fieldMail ms-Icon--fieldNumber ms-Icon--fieldText ms-Icon--fieldTextBox ms-Icon--fileDocument ms-Icon--fileImage ms-Icon--filePDF ms-Icon--filter ms-Icon--filterClear ms-Icon--firstAid ms-Icon--flag ms-Icon--folder ms-Icon--folderMove ms-Icon--folderPublic ms-Icon--folderSearch ms-Icon--fontColor ms-Icon--fontDecrease ms-Icon--fontIncrease ms-Icon--frowny ms-Icon--fullscreen ms-Icon--gear ms-Icon--glasses ms-Icon--globe ms-Icon--graph ms-Icon--group ms-Icon--header ms-Icon--heart ms-Icon--heartEmpty ms-Icon--hide ms-Icon--home ms-Icon--inboxCheck ms-Icon--info ms-Icon--infoCircle ms-Icon--italic ms-Icon--key ms-Icon--late ms-Icon--lifesaver ms-Icon--lifesaverLock ms-Icon--lightBulb ms-Icon--lightning ms-Icon--link ms-Icon--linkRemove ms-Icon--listBullets ms-Icon--listCheck ms-Icon--listCheckbox ms-Icon--listGroup ms-Icon--listGroup2 ms-Icon--listNumbered ms-Icon--lock ms-Icon--mail ms-Icon--mailCheck ms-Icon--mailDown ms-Icon--mailEdit ms-Icon--mailEmpty ms-Icon--mailError ms-Icon--mailOpen ms-Icon--mailPause ms-Icon--mailPublic ms-Icon--mailRead ms-Icon--mailSend ms-Icon--mailSync ms-Icon--mailUnread ms-Icon--mapMarker ms-Icon--meal ms-Icon--menu ms-Icon--menu2 ms-Icon--merge ms-Icon--metadata ms-Icon--microphone ms-Icon--miniatures ms-Icon--minus ms-Icon--mobile ms-Icon--money ms-Icon--move ms-Icon--multiChoice ms-Icon--music ms-Icon--navigate ms-Icon--new ms-Icon--newsfeed ms-Icon--note ms-Icon--notebook ms-Icon--noteEdit ms-Icon--noteForward ms-Icon--noteReply ms-Icon--notRecurring ms-Icon--onedrive ms-Icon--onlineAdd ms-Icon--onlineJoin ms-Icon--oofReply ms-Icon--org ms-Icon--page ms-Icon--paint ms-Icon--panel ms-Icon--partner ms-Icon--pause ms-Icon--pencil ms-Icon--people ms-Icon--peopleAdd ms-Icon--peopleCheck ms-Icon--peopleError ms-Icon--peoplePause ms-Icon--peopleRemove ms-Icon--peopleSecurity ms-Icon--peopleSync ms-Icon--person ms-Icon--personAdd ms-Icon--personRemove ms-Icon--phone ms-Icon--phoneAdd ms-Icon--phoneTransfer ms-Icon--picture ms-Icon--pictureAdd ms-Icon--pictureEdit ms-Icon--pictureRemove ms-Icon--pill ms-Icon--pinDown ms-Icon--pinLeft ms-Icon--placeholder ms-Icon--plane ms-Icon--play ms-Icon--plus ms-Icon--plus2 ms-Icon--pointItem ms-Icon--popout ms-Icon--post ms-Icon--print ms-Icon--protectionCenter ms-Icon--question ms-Icon--questionReverse ms-Icon--quote ms-Icon--radioButton ms-Icon--reactivate ms-Icon--receiptCheck ms-Icon--receiptForward ms-Icon--receiptReply ms-Icon--refresh ms-Icon--reload ms-Icon--reply ms-Icon--replyAll ms-Icon--replyAllAlt ms-Icon--replyAlt ms-Icon--ribbon ms-Icon--room ms-Icon--save ms-Icon--scheduling ms-Icon--search ms-Icon--section ms-Icon--sections ms-Icon--settings ms-Icon--share ms-Icon--shield ms-Icon--sites ms-Icon--smiley ms-Icon--soccer ms-Icon--socialListening ms-Icon--sort ms-Icon--sortLines ms-Icon--split ms-Icon--star ms-Icon--starEmpty ms-Icon--stopwatch ms-Icon--story ms-Icon--styleRemove ms-Icon--subscribe ms-Icon--sun ms-Icon--sunAdd ms-Icon--sunQuestion ms-Icon--support ms-Icon--table ms-Icon--tablet ms-Icon--tag ms-Icon--taskRecurring ms-Icon--tasks ms-Icon--teamwork ms-Icon--text ms-Icon--textBox ms-Icon--tile ms-Icon--timeline ms-Icon--today ms-Icon--toggle ms-Icon--toggleMiddle ms-Icon--touch ms-Icon--trash ms-Icon--triangleDown ms-Icon--triangleEmptyDown ms-Icon--triangleEmptyLeft ms-Icon--triangleEmptyRight ms-Icon--triangleEmptyUp ms-Icon--triangleLeft ms-Icon--triangleRight ms-Icon--triangleUp ms-Icon--trophy ms-Icon--underline ms-Icon--unsubscribe ms-Icon--upload ms-Icon--video ms-Icon--voicemail ms-Icon--voicemailForward ms-Icon--voicemailReply ms-Icon--waffle ms-Icon--work ms-Icon--wrench ms-Icon--x ms-Icon--xCircle";
        var icons = iconString.split(" ");
        $scope.pageInfo = { icons: icons };
    });

    app.controller('inputComponentsController', function ($scope) { });

    app.controller('listController', function ($scope) {
        console.log("listController");
        $scope.pageContent = {
            text: "quack quack",
            customers: [
            { name: "Ted Pattison", title: "Office 365 Developer", description: "Yada yada yada yada yada yada yada.", metatext: "old dude" },
            { name: "Matt McDermott", title: "SharePoint Search Guru", description: "Yada yada yada yada yada.", metatext: "dog dude" },
            { name: "Andrew Connell", title: "Node.js Developer", description: "Yada yada yada yada yada yada.", metatext: "young dude" },
            { name: "Scot Hiller", title: "Office 365 Community Leader", description: "Yada yada yada yada yada yada yada yada yada.", metatext: "rad dude" },
            { name: "Paul Scheiflein", title: "Office 365 Developer", description: "Yada yada yada yada yada yada  yada", metatext: "northern dude" }
            ]
        };
       
    });

    app.controller('personaCardController', function ($scope) { });

})();

