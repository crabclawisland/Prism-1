/**
 * Created by tyler on 2/24/16.
 */
/**
 * Created by tyler on 2/21/16.
 */

//VERY simple way of adding the images to the profile
$(document).ready(function () {
    var comments ="";
    if(thisimage != " "){
        console.log(thisimage.url);
        $("#howmanycomments").html(thisimage.comments.length + " Comments" + "<br>"+ "<br>");
        for(var j =0; j<thisimage.comments.length; j++){
            comments +=
                "<img src=\"" + thisimage.comments[j].propic + "\" width=\"50\" height=\"50\"/>"+
                "<span class=\"comment\"><span> " + thisimage.comments[j].username + ": " + thisimage.comments[j].content + "<\/span><\/span>"+"<br>"+"<br>";
        }
        console.log(comments);
        $("#comments").html(comments);
    }
});
