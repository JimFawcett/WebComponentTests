/////////////////////////////////////////////////////////////////////
// ScriptsMenu.js - Constructs dropdown menu for Top Level Pages   //
//                                                                 //
// Jim Fawcett, Website, 25 June 2018                              //
/////////////////////////////////////////////////////////////////////

//----< called in body.onload to initial menus and footer >----------
/*
 *  This function is specific for the menu on top-level pages 
 */
function initializeMenu() {

  // create top menu

  var topMenu = document.getElementsByTagName("nav");
  topMenu[0].innerHTML = "<div class='navbar'>\
    <a href='../JimFawcett.github.io/index.html' class='menuItem'>Home</a>\
    <a href='../JimFawcett.github.io/Repositories.html' class='menuItem notice'>Repositories</a>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Notes &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../JimFawcett.github.io/DesignProcess.html'>Design Process</a>\
        <a href='../JimFawcett.github.io/ProjectsList.html'>Project suggestions</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Blogs &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../JimFawcett.github.io/Blog.html'>First&nbsp;Things</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Design&nbsp;--------------&nbsp;</div>\
        <a href='../JimFawcett.github.io/BlogDesign.html'>SW&nbsp;Design</a>\
        <a href='../JimFawcett.github.io/BlogPrinciples.html'>Design&nbsp;Principles</a>\
        <a href='../JimFawcett.github.io/BlogOOD.html'>OO&nbsp;Design</a>\
        <a href='../JimFawcett.github.io/BlogObjectModels.html'>Object&nbsp;Models</a>\
        <a href='../JimFawcett.github.io/BlogGlobals.html'>Scopes&nbsp;&amp;&nbsp;Global&nbsp;Data&nbsp;&nbsp;</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Engineering&nbsp;SW&nbsp;---</div>\
        <a href='../JimFawcett.github.io/BlogOCD.html'>Concept&nbsp;Document</a>\
        <a href='../JimFawcett.github.io/BlogTesting.html'>SW&nbsp;Testing</a>\
        <a href='../JimFawcett.github.io/SummerReading.html'>Summer&nbsp;Reading</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Software&nbsp;Sys&nbsp;------</div>\
        <a href='../JimFawcett.github.io/BlogStructure.html'>SW&nbsp;Structure</a>\
        <a href='../JimFawcett.github.io/BlogMessagePassingComm.html'>Msg-Passing&nbsp;Comm</a>\
        <a href='../JimFawcett.github.io/BlogActiveObjects.html'>Active&nbsp;Objects</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>--&nbsp;Reusable&nbsp;Pkgs&nbsp;----</div>\
        <a href='../JimFawcett.github.io/BlogNoSql.html'>noSQL&nbsp;Database</a>\
        <a href='../JimFawcett.github.io/BlogParser.html'>Parsing</a>\
        <a href='../JimFawcett.github.io/BlogCodeAnalyzer.html'>Code&nbsp;Analyzer</a>\
        <a href='../JimFawcett.github.io/BlogMTree.html'>M-ary&nbsp;Trees</a>\
        <a href='../JimFawcett.github.io/BlogGraph.html'>Directed&nbsp;Graphs</a>\
        <a href='../JimFawcett.github.io/BlogFileSystem.html'>C++&nbsp;FileSystem</a>\
        <div style='padding:0px 10px; margin:0px; font-size:small;'>&nbsp;</div>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Resources &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='https://en.cppreference.com/w/'>CppReference.com</a>\
        <a href='https://cs.lmu.edu/~ray/notes/regex/'>Regular Expressions</a>\
        <a href='http://cpprocks.com/files/c++11-regex-cheatsheet.pdf'>C++11 regex</a>\
        <a href='https://github.com/joshnh/Git-Commands'>git commands</a>\
        <a class='disable' href='../JimFawcett.github.io/UMLDiagrams.html'>UML Diagrams</a>\
        <a href='../JimFawcett.github.io/Resources/VisualStudioHelpSlides.pdf'>Visual Studio Help Slides</a>\
        <a href='../JimFawcett.github.io/SummerReading.html'>Summer Reading</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Prog Lang &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../JimFawcett.github.io/LangCpp.html'>C++</a>\
        <a href='../JimFawcett.github.io/LangCSharp.html'>C#</a>\
        <a href='../JimFawcett.github.io/LangPowerShell'>PowerShell</a>\
        <a class='disable' href='#'>HTML</a>\
        <a class='disable' href='#'>CSS</a>\
        <a class='disable' href='#'>JavaScript</a>\
        <a class='disable' href='#'>Java</a>\
        <a class='disable' href='#'>Rust</a>\
        <a class='disable' href='#'>Go</a>\
        <a class='disable' href='#'>Python</a>\
      </div>\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>Platforms &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../JimFawcett.github.io/PlatformWindows.html'>Windows</a>\
        <a href='../JimFawcett.github.io/PlatformLinux.html'>Linux</a>\
      </div >\
    </div>\
    <div class='dropdown menuItem'>\
      <button class='dropbutton'>About &#9662;</button>\
      <div class='dropdown-content'>\
        <a href='../JimFawcett.github.io/JimFawcett.html'>Jim Fawcett</a>\
        <a href='Help.html'>Help</a>\
        <a href='../JimFawcett.github.io/ToDo.html'>ToDo</a>\
        <a href='#' onclick='toggleNavKeys()'>Toggle Nav Keys</a>\
        <a href='../JimFawcett.github.io/SiteDesign.html'>Site Design</a>\
        <a href='../JimFawcett.github.io/BookDesignCourse.html'>Design Course</a>\
        <a class='border' href='../JimFawcett.github.io/index.html'>L1 Site Home</a>\
        <a class='border' href='../JimFawcett.github.io/Repositories.html'>L2 Repository&nbsp;webpage</a>\
        <a class='border' href='../JimFawcett.github.io/LangCpp.html'>L2 C++&nbsp;webpage</a>\
        <a href='https://github.com/JimFawcett'>Repositories&nbsp;code</a>\
        <a href='../JimFawcett.github.io/SiteMap.html'>Site Map</a>\
      </div>\
    </div>\
    <button class='pageScroll' onclick='scrollPageTop()'>Top</button>\
    <button class='pageScroll' onclick='scrollPageBottom()'>Bottom</button>\
    <a id='prevLink' class='nextprev' href='#'>Prev</a>\
    <a id='nextLink' class='nextprev' href='#'>Next</a>\
    <button class='menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
    <button class='menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
  </div >\
  <div style='clear:all;'></div>";

  // hide Next and Prev links if page has no next or previous pages
  // otherwise load href from page link

  var nxt = document.getElementById("Next");
  if (nxt === null) {
    document.getElementById("nextLink").style.display = "none";  // button top right menu
  }
  else {
    document.getElementById("nextLink").href = nxt.href;
  }

  var prv = document.getElementById("Prev");
  if (prv === null) {
    document.getElementById("prevLink").style.display = "none";  // button top right menu
  }
  else {
    document.getElementById("prevLink").href = prv.href;
  }

  // show footer with copyright notice and revision date

  var rvsd = document.getElementsByTagName("info-bar");
  var date = document.lastModified;
  rvsd[0].innerHTML = "copyright &copy; Jim Fawcett, 2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page Revised: " + date;

  // set display mode for navKeys from value in local storage

  setNavKeys();
  setImageSizer();

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js

  document.addEventListener('keydown', (event) => { keyAction(event); }, false);

  // listen for mouse events:
  // - mouse actions are defined below

  document.addEventListener('mousedown', (event) => { mouseAction(event); }, false);

  // bind more-less click event

  var elems = document.getElementsByTagName("more-less");
  for (var i = 0; i < elems.length; ++i) {
    elems[i].addEventListener("click", (event) => { toggleVisibility(event); }, false);
  }
}

//----< load page defined in current page's Prev link >--------------

function loadPrev() {
  document.getElementById("Prev").click();
}
//----< load page defined in current page's Next link >--------------

function loadNext() {
  document.getElementById("Next").click();
}
//----< load page defined in current page's Lect link >--------------

function loadLect() {
  document.getElementById("Lect").click();  // Lect link is near top of first lect page
}
//----< load page defined in current page's Cour link >--------------

function loadCour() {
  document.getElementById("Cour").click();  // Cour link is near top of course page
}
//----< hide, progressively, menu items on the left >----------------
/*
*  This let's user see menu items that overflow on the right
*  due to page size.
*/
function scrollMenuLeft() {
  var items = document.getElementsByClassName("menuItem");
  var i;
  for (i = 0; i < items.length; ++i) {
    var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
    if (cpprp !== "none") {
      items[i].style.display = "none";
      break;
    }
  }
}
//----< restore, progressively, menu items on the left >-------------
/*
*  This let's user restore menu items hidden by the previous
*  function.
*/
function scrollMenuRight() {
  var items = document.getElementsByClassName("menuItem");
  var len = items.length;
  var i;
  for (i = 0; i < items.length; ++i) {
    var cpprp = window.getComputedStyle(items[len - i - 1], null).getPropertyValue("display");
    if (cpprp !== "block") {
      items[len-i-1].style.display = "block";
      break;
    }
  }
}
//----< scroll page to top >-----------------------------------------

function scrollPageTop() {
  window.scrollTo(0, 0);
}
//----< scroll page to bottom >--------------------------------------

function scrollPageBottom() {
  window.scrollTo(0, 100000);
}
//----< toggle nav keys display >------------------------------------
/*
*  NavKeys are TBHNP keys at bottom right of each page
*/
function toggleNavKeys() {
  var nkc = document.getElementsByTagName("navKeysContainer");
  var tog = window.getComputedStyle(nkc[0], null).getPropertyValue("display");
  if (tog === "none") {
    nkc[0].style.display = "inline";
    window.localStorage.setItem("navKeyState", "show");  // persist change across pages
  }
  else {
    nkc[0].style.display = "none";
    window.localStorage.setItem("navKeyState", "hide");  // persist chage across pages
  }
}
//----< setNavKeys display >-----------------------------------------

function setNavKeys() {
  var nkc = document.getElementsByTagName("navKeysContainer");
  var navKeyState = window.localStorage.getItem("navKeyState");
  if (navKeyState === null) {
    nkc[0].style.display = "inline";
    window.localStorage.setItem("navKeyState", "show");
    return;
  }
  if (navKeyState === "show") {
    nkc[0].style.display = "inline";
  }
  else {
    nkc[0].style.display = "none";
  }

}
//----< toggle image sizer display >-----------------------------------
/*
*  Image sizers appear to the right of some images
*/
function toggleImageSizer() {
  var nkc = document.getElementsByTagName("sizer-Container");
  var tog = window.getComputedStyle(nkc[0], null).getPropertyValue("display");
  for (let i = 0; i < nkc.length; ++i) {
    if (tog === "none") {
      nkc[i].style.display = "inline";
      window.localStorage.setItem("imageSizerState", "show");  // persist change across pages
    }
    else {
      nkc[i].style.display = "none";
      window.localStorage.setItem("imageSizerState", "hide");  // persist chage across pages
    }
  }
}
//----< set image sizer display >-----------------------------------------

function setImageSizer() {
  var nkc = document.getElementsByTagName("sizer-Container");
  var imageSizerState = window.localStorage.getItem("imageSizerState");

  for (let i = 0; i < nkc.length; ++i) {
    if (imageSizerState === null) {
      nkc[i].style.display = "inline";
      window.localStorage.setItem("imageSizerState", "show");
      return;
    }
    if (imageSizerState === "hide") {
      nkc[i].style.display = "none";
    }
    if (imageSizerState === "show") {
      nkc[i].style.display = "inline";
    }
    else {
      nkc[i].style.display = "none";
    }
  }
}
//----< toggle nav keys display >------------------------------------
/*
*   On right click, Toggle display of NavKeys TBHNP
*     unless target is anchor, then
*   open link in new tab 
*/
function mouseAction(event) {

  if (event.button === 2) {
    if (event.target.tagName === 'A') {
      window.open(event.target, "_newtab" + Math.floor(Math.random() * 999999));
    }
    else {
      //toggleNavKeys();
      toggleNavKeys();
    }
  }
}
