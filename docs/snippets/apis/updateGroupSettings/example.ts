api
    .updateGroupSettings(
        {
            lockViewMember: true
        },
        "0000000000000000000"
    )
    .then(console.log)
    .catch(console.error);