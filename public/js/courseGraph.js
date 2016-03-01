var coursesJSON = 'json/courses.json';

var width = window.innerWidth, height = window.innerHeight;

$.getJSON(coursesJSON, function (d) {
    var i;
    var nodes = [];

    console.log('success?');

    for (i in d.courses) {
        nodes.push(d.courses[i]);
    }

    var links = [];

    nodes.forEach(function (outerNode, i, nodes) {
        if (outerNode.prerequisites.length != 0) {
            nodes.forEach(function (innerNode, j, nodes) {
                outerNode.prerequisites.forEach(function (course, k, prerequisites) {
                    if (outerNode.prerequisites[k] == innerNode.code) {
                        links.push({source: outerNode, target: innerNode})
                    }
                })
            })
        }
    });

    var linkNodes = [];

    links.forEach(function (link) {
        linkNodes.push({
            source: link.source,
            target: link.target
        });
    });

    console.log(linkNodes);

    var svgContainer = d3.select('body').append('svg')
                         .attr('width', width)
                         .attr('height', height);

    var force = d3.layout.force().size([width, height])
                  .nodes(nodes).links(links)
                  .gravity(0.3)
                  .linkStrength(2)
                  .linkDistance(height/15)
                  .charge(-2500);

    svgContainer.append('defs').append('marker')
                .attr('id', 'marker')
                .attr('viewBox', '-5 -5 10 10')
                .attr('refX', 0)
                .attr('refY', 0)
                .attr('markerWidth', 15)
                .attr('markerHeight', 15)
                .attr('orient', 'auto')
                .style('fill', '#777')
                .append('path')
                .attr('d', 'M10,-5L0,0L10,5');

    var link = svgContainer.selectAll('.link')
                           .data(links)
                           .enter()
                           .append('polyline')
                           .attr('marker-mid', 'url(#marker)')
                           .attr('class', 'link');

    var node = svgContainer.selectAll('.node')
                           .data(nodes).enter()
                           .append('g')
                           .attr('class', 'node')
                           .call(force.drag);

    node.append('circle')
        .attr('name', function (d) {
            return d.code;
        })
        .attr('r', width / 175);

    node.append('text')
        .attr('dx', 12)
        .attr('dy', '.35em')
        .text(function (d) {
            return d.code;
        });

    var linkNode = svgContainer.selectAll('.link-node')
                               .data(linkNodes)
                               .enter().append('circle')
                               .attr('class', 'link-node');

    force.on('tick', function () {

        node.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        link.attr("points", function(d) {
            return d.source.x + "," + d.source.y + " " +
                (d.source.x + d.target.x)/2 + "," + (d.source.y + d.target.y)/2 + " " +
                d.target.x + "," + d.target.y; });

        linkNode.attr('cx', function (d) {
                    return d.x = (d.source.x + d.target.x) * 0.5;
                })
                .attr('cy', function (d) {
                    return d.y = (d.source.y + d.target.y) * 0.5;
                });
    });

    force.start();


}).fail(function () {
    console.log('Error!');
});