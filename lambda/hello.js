exports.handler = async function(event) {
    console.log(JSON.stringify(event.path.split("/")[2]))
    var name = JSON.stringify(event.path.split("/")[2])
    console.log(name)
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: "Hello " + name
    }
}