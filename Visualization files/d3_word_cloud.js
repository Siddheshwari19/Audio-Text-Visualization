let words = {
    "All" : [{word: "gun", size: 117 }, { word: "person", size: 98 }, { word: "think", size: 81 }, { word: "like", size: 63 }, { word: "know", size: 54 }, { word: "right", size: 44 }, { word: "need", size: 43 }, { word: "firearm", size: 36 }, { word: "lot", size: 32 }, { word: "really", size: 32 }, { word: "police", size: 31 }, { word: "thing", size: 26 }, { word: "violence", size: 26 }, { word: "law", size: 25 }, { word: "one", size: 25}],
    "How shooting a gun makes you feel?" : [ { word: "gun", size: 130 }, { word: "like", size: 80 }, { word: "person", size: 70 }, { word: "right", size: 50 }, { word: "think", size: 50 }, { word: "shooting", size: 45 }, { word: "firearm", size: 35 }, { word: "life", size: 35 }, { word: "feel", size: 30 }, { word: "give", size: 30 }, { word: "guy", size: 30 }, { word: "second", size: 30 }, { word: "time", size: 30 }, { word: "would", size: 30 }, { word: "amendment", size: 25}],
    "Mass shootings" : [ { word: "person", size: 75 }, { word: "firearm", size: 70 }, { word: "background", size: 55 }, { word: "need", size: 55 }, { word: "thing", size: 55 }, { word: "think", size: 55 }, { word: "check", size: 50 }, { word: "right", size: 45 }, { word: "way", size: 40 }, { word: "get", size: 35 }, { word: "gun", size: 35 }, { word: "health", size: 35 }, { word: "school", size: 35 }, { word: "go", size: 30 }, { word: "kid", size: 30}],
    "Owning guns for self-defense" : [ { word: "police", size: 115 }, { word: "person", size: 90 }, { word: "gun", size: 75 }, { word: "officer", size: 60 }, { word: "think", size: 60 }, { word: "lot", size: 55 }, { word: "community", size: 50 }, { word: "cop", size: 50 }, { word: "like", size: 50 }, { word: "want", size: 50 }, { word: "school", size: 45 }, { word: "going", size: 40 }, { word: "need", size: 40 }, { word: "know", size: 35 }, { word: "make", size: 35}],
    "Red-flag laws" : [ { word: "think", size: 125 }, { word: "gun", size: 110 }, { word: "person", size: 100 }, { word: "law", size: 70 }, { word: "need", size: 45 }, { word: "right", size: 45 }, { word: "going", size: 40 }, { word: "lot", size: 40 }, { word: "question", size: 35 }, { word: "flag", size: 30 }, { word: "red", size: 30 }, { word: "situation", size: 30 }, { word: "well", size: 30 }, { word: "firearm", size: 25 }, { word: "state", size: 25}],
    "Restriction on specific guns" : [ { word: "ar-15", size: 110 }, { word: "person", size: 80 }, { word: "rifle", size: 70 }, { word: "handgun", size: 45 }, { word: "like", size: 35 }, { word: "two", size: 35 }, { word: "defend", size: 30 }, { word: "life", size: 30 }, { word: "right", size: 30 }, { word: "think", size: 30 }, { word: "would", size: 30 }, { word: "get", size: 25 }, { word: "gun", size: 25 }, { word: "need", size: 25 }, { word: "round", size: 25}],
    "Summary" : [ { word: "gun", size: 150 }, { word: "person", size: 75 }, { word: "think", size: 75 }, { word: "violence", size: 55 }, { word: "fact", size: 45 }, { word: "like", size: 40 }, { word: "really", size: 40 }, { word: "industry", size: 30 }, { word: "solution", size: 30 }, { word: "actually", size: 25 }, { word: "community", size: 25 }, { word: "firearm", size: 25 }, { word: "heard", size: 25 }, { word: "need", size: 25 }, { word: "problem", size: 25}],
    "Moderator" : [ { word: "gun", size: 175 }, { word: "think", size: 110 }, { word: "person", size: 85 }, { word: "like", size: 55 }, { word: "feel", size: 45 }, { word: "know", size: 45 }, { word: "want", size: 45 }, { word: "lot", size: 40 }, { word: "really", size: 40 }, { word: "shooting", size: 40 }, { word: "hand", size: 30 }, { word: "idea", size: 30 }, { word: "keep", size: 30 }, { word: "law", size: 30 }, { word: "country", size: 25}],
    "Speaker 1" : [ { word: "need", size: 45 }, { word: "police", size: 40 }, { word: "time", size: 40 }, { word: "gun", size: 35 }, { word: "like", size: 35 }, { word: "thing", size: 35 }, { word: "guy", size: 30 }, { word: "know", size: 30 }, { word: "school", size: 30 }, { word: "lot", size: 25 }, { word: "make", size: 25 }, { word: "security", size: 25 }, { word: "tell", size: 25 }, { word: "two", size: 25 }, { word: "defend", size: 20}],
    "Speaker 2" : [ { word: "think", size: 90 }, { word: "gun", size: 80 }, { word: "life", size: 60 }, { word: "right", size: 55 }, { word: "violence", size: 55 }, { word: "get", size: 50 }, { word: "would", size: 50 }, { word: "really", size: 45 }, { word: "know", size: 40 }, { word: "like", size: 40 }, { word: "person", size: 40 }, { word: "situation", size: 35 }, { word: "firearm", size: 30 }, { word: "home", size: 30 }, { word: "law", size: 30}],
    "Speaker 3" : [ { word: "person", size: 75 }, { word: "gun", size: 45 }, { word: "know", size: 45 }, { word: "cop", size: 30 }, { word: "right", size: 30 }, { word: "go", size: 25 }, { word: "like", size: 25 }, { word: "one", size: 25 }, { word: "police", size: 25 }, { word: "firearm", size: 20 }, { word: "get", size: 20 }, { word: "going", size: 20 }, { word: "lot", size: 20 }, { word: "need", size: 20 }, { word: "say", size: 20}],
    "Speaker 4" : [ { word: "person", size: 75 }, { word: "like", size: 50 }, { word: "give", size: 45 }, { word: "going", size: 40 }, { word: "police", size: 40 }, { word: "right", size: 40 }, { word: "community", size: 35 }, { word: "firearm", size: 30 }, { word: "gun", size: 30 }, { word: "know", size: 30 }, { word: "need", size: 30 }, { word: "well", size: 30 }, { word: "school", size: 25 }, { word: "go", size: 20 }, { word: "officer", size: 20}],
    "Speaker 5" : [ { word: "person", size: 50 }, { word: "like", size: 35 }, { word: "want", size: 35 }, { word: "community", size: 20 }, { word: "everything", size: 20 }, { word: "gun", size: 20 }, { word: "make", size: 20 }, { word: "need", size: 20 }, { word: "saying", size: 20 }, { word: "think", size: 20 }, { word: "way", size: 20 }, { word: "back", size: 15 }, { word: "else", size: 15 }, { word: "everyone", size: 15 }, { word: "feel", size: 15}],
    "Speaker 6" : [ { word: "firearm", size: 70 }, { word: "person", size: 65 }, { word: "rifle", size: 55 }, { word: "handgun", size: 50 }, { word: "right", size: 45 }, { word: "think", size: 45 }, { word: "ar-15", size: 35 }, { word: "gun", size: 35 }, { word: "defend", size: 30 }, { word: "know", size: 25 }, { word: "life", size: 25 }, { word: "lot", size: 25 }, { word: "ok", size: 25 }, { word: "say", size: 25 }, { word: "well", size: 25}],
    "Speaker 7" : [ { word: "gun", size: 110 }, { word: "think", size: 70 }, { word: "fact", size: 55 }, { word: "know", size: 40 }, { word: "person", size: 40 }, { word: "violence", size: 35 }, { word: "industry", size: 30 }, { word: "need", size: 30 }, { word: "state", size: 30 }, { word: "america", size: 25 }, { word: "question", size: 25 }, { word: "united", size: 25 }, { word: "u", size: 25 }, { word: "introduced", size: 20 }, { word: "self", size: 20}],
    "Speaker 8" : [ { word: "gun", size: 55 }, { word: "like", size: 45 }, { word: "person", size: 40 }, { word: "lot", size: 30 }, { word: "problem", size: 25 }, { word: "america", size: 20 }, { word: "everyone", size: 20 }, { word: "really", size: 20 }, { word: "scarcity", size: 20 }, { word: "american", size: 15 }, { word: "concerned", size: 15 }, { word: "country", size: 15 }, { word: "survival", size: 15 }, { word: "actually", size: 10 }, { word: "care", size: 10}]
};

function loadDefaultCloud() {
    console.log('loadDefaultCloud here')
    document.getElementById("topics").hidden = true;
    document.getElementById("topic_label").hidden = true;
    document.getElementById("speakers").hidden = true;
    document.getElementById("speaker_label").hidden = true;
    generateCloud(words["All"])
}

function getWords(value) {
    console.log('getWords - ', value)
    var elem = document.getElementById('my_dataviz');
    elem.parentNode.removeChild(elem);
    generateCloud(words[value])
}

function onSelectionChange(value) {
    console.log('onSelectionChange - ', value)
    var elem = document.getElementById('my_dataviz');
    elem.parentNode.removeChild(elem);

    switch(value) {
        case 'Speakers':
            toggleSpeakersDropdownVisibility()
            break;
        case 'Topics':
            toggleTopicsDropdownVisibility()
            break;
        default:
            loadDefaultCloud()
        }
}

function toggleSpeakersDropdownVisibility() {
    document.getElementById("topics").hidden = true;
    document.getElementById("topic_label").hidden = true;
    document.getElementById("speakers").hidden = false;
    document.getElementById("speaker_label").hidden = false;
    console.log('toggleSpeakersDropdownVisibility')
    generateCloud(words["Moderator"])
}

function toggleTopicsDropdownVisibility() {
    document.getElementById("speakers").hidden = true;
    document.getElementById("speaker_label").hidden = true;
    document.getElementById("topics").hidden = false;
    document.getElementById("topic_label").hidden = false;
    console.log('toggleTopicsDropdownVisibility')
    generateCloud(words["How shooting a gun makes you feel?"])
}

function generateCloud(myWords) {
    var div = document.createElement("div");
    div.setAttribute('id', 'my_dataviz');
    document.body.appendChild(div);

    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = 350 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
        .select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = d3.layout
        .cloud()
        .size([width, height])
        .words(
            myWords.map(function (d) {
                return { text: d.word, size: d.size };
            })
        )
        .padding(5) //space between words
        .rotate(function () {
            return ~~(Math.random() * 2) * 90;
        })
        .fontSize(function (d) {
            return d.size;
        }) // font size of words
        .on("end", draw);
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
        svg.append("g")
            .attr(
                "transform",
                "translate(" +
                    layout.size()[0] / 2 +
                    "," +
                    layout.size()[1] / 2 +
                    ")"
            )
            .selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-size", function (d) {
                return d.size;
            })
            .style("fill", "#69b3a2")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) {
                return d.text;
            });
    }
}