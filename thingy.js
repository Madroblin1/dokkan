$(".type").hide();
$("#list1").hide();
$("#list2").hide();
$("#list3").hide();
$("#type_list").hide();
$("#link_color_explanation").hide();
$("#ch").click(function(){
    $(".type").fadeToggle();
    $("#link_color_explanation").fadeToggle();
    $("#type_list").hide();
    $("#list1").hide();
    $("#list2").hide();
    $("#list3").hide();
    $("#list4").hide();
    $("#list5").hide();
    $("#list6").hide();
});
$("#LR").click(function(){
    $("#list1").fadeToggle();
});
$("#TUR").click(function(){
    $("#list2").fadeToggle();
});
$("#SSR").click(function(){
    $("#list3").fadeToggle();
});
$("#ch_type").click(function(){
    $("#type_list").fadeToggle();
    $(".type").hide();
    $("#link_color_explanation").hide();
});

    