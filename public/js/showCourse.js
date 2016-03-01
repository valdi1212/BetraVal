var courseHREF = '../json/courses.json';
var id = window.location.href;
id = id.replace('http://1212.is/courses/', '');
console.log(id);

$.getJSON(courseHREF, function (data) {
    var shownCourse = getCourseByCode(data);
    $('.coursecontainer').append(createHtmlFromCourse(shownCourse));
});

var getCourseByCode = function (data) {
    var course = null;
    for (var i in data.courses) {
        if (data.courses[i].code == id) {
            course = data.courses[i];
        }
    }
    return course;
};

var createHtmlFromCourse = function (course) {
    return "<h2>" + course.name + "</h2><p>" + course.code + " (" + course.credits + ")</p><p>Undanfarar: " + course.prerequisites + "</p>";
};
