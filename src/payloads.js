module.exports = {
    confirmation: context => {
        return {
            channel: context.channel_id,
            text: context.releaseNote,
            mrkdwn: true
        }
    },
    modal: context => {
        return {
            trigger_id: context.trigger_id,
            view: JSON.stringify({
                type: 'modal',
                title: {
                    type: 'plain_text',
                    text: 'Release Notes'
                },
                callback_id: 'submit-ticket',
                submit: {
                    type: 'plain_text',
                    text: 'Submit'
                },
                blocks: [
                    {
                        block_id: 'title',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Title'
                        },
                        element: {
                            action_id: 'title',
                            type: 'plain_text_input'
                        },
                        hint: {
                            type: 'plain_text',
                            text: 'Title of the Release note'
                        }
                    },
                    {
                        block_id: 'services',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Services'
                        },
                        element: {
                            action_id: 'services',
                            type: 'plain_text_input',
                            multiline: true
                        }
                    },
                    {
                        block_id: 'branch',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Branch'
                        },
                        element: {
                            action_id: 'branch',
                            type: 'plain_text_input',
                        }
                    },
                    {
                        block_id: 'tickets',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Tickets'
                        },
                        element: {
                            action_id: 'tickets',
                            type: 'plain_text_input',
                            multiline: true
                        }
                    },
                    {
                        block_id: 'summary',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Summary'
                        },
                        element: {
                            action_id: 'summary',
                            type: 'plain_text_input',
                            multiline: true
                        },
                        optional: true
                    },
                    {
                        block_id: 'changeset',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Changeset'
                        },
                        element: {
                            action_id: 'changeset',
                            type: 'plain_text_input',
                            multiline: true
                        }
                    },
                    {
                        block_id: 'developers',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Developers',
                            emoji: true
                        },
                        element: {
                            action_id: 'developers',
                            type: 'multi_users_select',
                            placeholder: {
                                type: 'plain_text',
                                text: 'Select all users'
                            }
                        }
                    },
                    {
                        block_id: 'testers',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Testers',
                            emoji: true
                        },
                        element: {
                            action_id: 'testers',
                            type: 'multi_users_select',
                            placeholder: {
                                type: 'plain_text',
                                text: 'Select all users'
                            }
                        }
                    },
                    {
                        block_id: 'deployers',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Deployers',
                            emoji: true
                        },
                        element: {
                            action_id: 'deployers',
                            type: 'multi_users_select',
                            placeholder: {
                                type: 'plain_text',
                                text: 'Select all users'
                            }
                        }
                    },
                    {
                        block_id: 'status',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Status'
                        },
                        element: {
                            action_id: 'status',
                            type: 'static_select',
                            options: [
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Deployed"
                                    },
                                    value: "Deployed"
                                },
                                {
                                    text: {
                                        type: "plain_text",
                                        text: "Yet to Deploy"
                                    },
                                    value: "Yet to deploy"
                                }
                            ]
                        }
                    },
                    {
                        block_id: 'comments',
                        type: 'input',
                        label: {
                            type: 'plain_text',
                            text: 'Comments'
                        },
                        element: {
                            action_id: 'comments',
                            type: 'plain_text_input',
                            multiline: true
                        },
                        optional: true
                    }
                ]
            })
        }
    }
}