$("#imagenpro").hide();
$(document).ready(function(){
    $("#lo-sentimos").mouseenter(function(){
        $("#imagenpro").fadeIn();
    });

    $("#lo-sentimos").mouseleave(function(){
        $("#imagenpro").fadeOut();
    });
});