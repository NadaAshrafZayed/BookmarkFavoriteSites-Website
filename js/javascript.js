
var bookmarks=[];

function checkName(name) {
    if (name == null || name == "") {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].sitename === name)
            return false;
    }
    return true;
}

function checkUrl(url) {
    if (url == null || url == "") {
        return false;
    }
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].siteurl === url)
            return false;
    }
    return true;
}

function display(){
    var cartoona="";
    for(var i=0 ; i < bookmarks.length ; i++){
        cartoona += `<tr class="text-center">
            <td class="fw-bold">${bookmarks[i].sitename}</td>
            <td>
                <a href="${bookmarks[i].siteurl}"  target=”_blank”>
                <button class="btn btn-info text-white m-3 p-3">Visit</button>
                </a>
            </td>
            <td>
                <button onclick="DeleteThisBookmark(${i})" class="btn btn-danger text-white m-3 p-2">Delete!</button>
            </td>   
        </tr>`;
        
    }
    document.getElementById('table_body').innerHTML = cartoona;
}

var siteName = document.querySelector("#name");
var siteUrl = document.querySelector("#url");

function submit(){
    if(checkName(siteName.value) && checkUrl(siteUrl.value))
    {
        var bookmark = {
            sitename : siteName.value,
            siteurl : siteUrl.value
        }

        bookmarks.push(bookmark);
        clear();
        display();
    }
    else
    {
        if (!checkName(siteName.value)) {
            showNameError("This Bookmark Name already exists in the bookmarks list.");
        }
        if (!checkUrl(siteUrl.value)) {
            showNameError("This Bookmark Name already exists in the bookmarks list.");
        }
        if (siteName.value == null || siteName.value == "") {
            showNameError("Name is required.");
        }
        if (siteUrl.value == null || siteUrl.value == "") {
            showUrlError("URL is required.");
        }
    }
    
}

function DeleteThisBookmark(bookmark){
    bookmarks.splice(bookmark , 1);
    display();
}

function clear() {
    for (var i = 0 ; i < bookmarks.length ; i++){
        bookmarks[i].value ="";
    }
}

