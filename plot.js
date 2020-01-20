d3.json("data/samples.json").then((data) => {
    var ids = [];
    var values = [];
    var text= [];
    for (i =1; i < 10; i ++) {
        ids.push(data.samples[0]["otu_ids"][i])
        values.push(data.samples[0]["sample_values"][i])
        text.push(data.samples[0]["otu_labels"][i])
    }

    var trace1 = {
    x: values,
    y: ids,
    type: "bar",
    orientation: 'h',
    text: text
    // name: data.otu_labels
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    title: "Plot",
    yaxis:
      {
          title: "otu ids",
          tickvals: ids,
          ticktext: ids,
      },
    xaxis: {title: "sample values"}
  };

 Plotly.newPlot("plot", data, layout);
});
