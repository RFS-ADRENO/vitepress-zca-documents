const startTime = new Date();
startTime.setHours(22, 0, 0, 0);

api
    .createReminder({
        title: "Đến hẹn đi ăn tối.",
        startTime: startTime.getTime()
    })
    .then(console.log)
    .catch(console.error);