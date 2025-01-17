//Each of these is being called such that using 'this' refers to the profileProcessor.
let fetchAssertions = async function(){
    console.log("Here I am fetching any additional assertions.");
}
let insertResources = async function(){
    console.log("Here I am associating additional resources with each vertex, accessing my learning object repository (or XI)");
}
let processAssertions = async function(){
    console.log("Here I am doing additional processing over assertions and removing any ones I don't like.");
}
let postProcessStart = async function(vertices,topLevelVertices, inEdges){
    console.log("Here I am additionally starting the post process, the stage of computing results.");
}  
let postProcessEachVertex = function(vertex,vertices,topLevelVertices,inEdges){
    console.log("Here I am additionally initializing and computing initial vertex data that will populate my 'metavertex' and creating my state object.");
}   
let postProcessEachEdge = function(edge,vertices,topLevelVertices,inEdges){
    console.log("Here I am additionally iterating over edges initially, initializing any edge properties, modifying the vertices, and constructing hierarchy based on my chosen relation types.");
}
let postProcessEachEdgeRepeating = function(edge,vertices,topLevelVertices,inEdges){
    console.log("Here I am additionally iterating over edges repeatedly until the data stabilizes, computing any edge properties or modifying the vertices.");
}
let postProcessEachVertexRepeating = function(vertex,vertices,topLevelVertices,inEdges){ 
    console.log("Here I am additionally computing any vertex properties that are dependent on my neighbors repeatedly until the data stabilizes. My neighbors are organized by relation in inEdges.");
}
let postProcessProfileBefore = function(profile,vertices,topLevelVertices,inEdges){
    console.log("Here I am additionally initializing any variables on the profile object that will be the result of this object.")
}
let postProcessProfileEachElement = function(obj,inEdges,vertices,visited){
    console.log("Here I am additionally calculating the leading edge changes to the profile elements.");
    // Recur for each child
    for (const child of obj.children) {
        const childResults = postProcessProfileEachElement(
            child, inEdges, vertices, visited
        );
    }
    console.log("Here I am additonally calculating the falling edge changes to the profile elements and saving data to the {obj.state}.");
    return {};
}    
let postProcessProfileAfter = function(o, profile){
    console.log("Here I am additionally putting any finishing touches or annotations on the profile object.");
}

module.exports = {
    enabled: false,
    version: "1.0.0",
    order: 200,
    fetchAssertions,
    insertResources,
    processAssertions,
    postProcessStart,
    postProcessEachVertex,
    postProcessEachEdge,
    postProcessEachEdgeRepeating,
    postProcessEachVertexRepeating,
    postProcessProfileBefore,
    postProcessProfileEachElement,
    postProcessProfileAfter
}