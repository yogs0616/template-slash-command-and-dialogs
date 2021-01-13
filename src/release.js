const payloads = require('./payloads');
const api = require('./api');

const showView = async function showView(req) {
    const { trigger_id } = req.body;

    try {
        let view = payloads.modal({
            trigger_id
        });

        let result = await api.callAPIMethod('views.open', view);
        console.log(result);
    } catch(error) {
        console.log(error)
    }

}

const postMessage = async function postMessage(req) {

    const body = JSON.parse(req.body.payload);

    console.log(`release note by ${body.user.id}`)
    const view = body.view;
    const values = view['state']['values']

    const title = values['title']['title'].value
    const services = values['services']['services'].value
    const branch = values['branch']['branch'].value
    const tickets = values['tickets']['tickets'].value
    const summary = values['summary']['summary'].value || '-'
    const changeset = values['changeset']['changeset'].value
    const developers = values['developers']['developers'].selected_users
    const testers = values['testers']['testers'].selected_users
    const deployers = values['deployers']['deployers'].selected_users
    const comments = values['comments']['comments'].value || '-'
    const status = values['status']['status']['selected_option'].value

    //var channelName = "#test-bot"
    var channelName = "#growth-sales-prod-releases"

    try {

        var releaseNote = " :vedantu: New release coming from <@" + body.user.id + "> :vedantu:\n" +
            "*" + title + "*" +
            "\n*Services*    \n```\n" + services + "\n```" +
            "\n*Branch*         :  `" + branch + "`" +
            "\n*Tickets*    \n```\n" + tickets + "\n```" +
            "\n*Summary*    \n```\n" + summary + "\n```" +
            "\n*Changeset*    \n```\n" + changeset + "\n```" +
            "\n*Developers*    :  " + developers.map(x => "<@" + x + ">").join(", ") +
            "\n*Testers*    :  " + testers.map(x => "<@" + x + ">").join(", ") +
            "\n*Deployers*    :  " + deployers.map(x => "<@" + x + ">").join(", ") +
            "\n*Status*    : `" + status + "`" +
            "\n*Comments*    \n```\n" + comments + "\n```" +
            ""

        console.log(releaseNote)

        let message = payloads.confirmation({
            channel_id: channelName,
            releaseNote: releaseNote
        });

        let result = await api.callAPIMethod('chat.postMessage', message)
        console.log(result)

    } catch(error) {
        console.error(error)
    }
}

module.exports = {
    showView, postMessage
}
