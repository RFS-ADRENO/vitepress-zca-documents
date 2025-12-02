const labels = await api.getLabels();

const updatedLabelData = [...labels.labelData];
updatedLabelData[0].text = "Updated Label";

api.updateLabels({
    labelData: updatedLabelData,
    version: labels.version + 1,
})
    .then(console.log)
    .catch(console.error);