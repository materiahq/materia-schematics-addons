export default class <%= utils.classify(name) %> {
    public static displayName = '<%= name %>';
    public static logo = 'https://s3.amazonaws.com/kinlane-productions/api-evangelist/noun-project/the-noun-project-clicking-heels.jpg';

    public static installSettings = [
        {
            name: 'name',
            description: 'Enter your name',
            type: 'string',
            required: true
        }
    ];

    constructor(app, config) { }

    start() { }

    uninstall(app) { }
}
