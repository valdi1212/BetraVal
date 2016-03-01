var courses = 'json/courses.json';

$.getJSON(courses, function (data) {
    var i;
    for (i in data.courses) {
        $('.coursecontainer').append(createhtml(data.courses[i].name, data.courses[i].code, data.courses[i].credits, data.courses[i].prerequisites))
    }
});

var createhtml = function (name, code, credits, prerequisites) {
    return "<div><h2><a href='/courses/" + code + "'>" + code + "</a> &mdash; " + name + "</h2></div>";
};