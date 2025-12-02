const pollId = 1;
api.lockPoll(pollId)
    .then(console.log)
    .catch(console.error);