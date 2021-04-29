import { PART1, PART2 } from './navigator-privacy-notice';

/**
 * @class
 * @singleton
 * @extends {Navigator}
 * @version 1.0
 * @description parses device details from browser's navigator object
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Navigator
 */
class ClientNavigatorParser extends Navigator {
    /**
     * @public
     * @property {Boolean} [isDesktop]
     * @description device is a desktop/laptop/full browser
     */
    public isDesktop?: boolean;

    /**
     * @public
     * @property {Boolean} [isPhone]
     * @description device is a mobile phone
     */
    public isPhone?: boolean;

    /**
     * @public
     * @property {Boolean} [isTablet]
     * @description device is a tablet
     */
    public isTablet?: boolean;

    /**
     * @public
     * @property {Boolean} [isAndroid]
     * @description device is running Android
     */
    public isAndroid?: boolean;

    /**
     * @public
     * @property {Boolean} [isIOS]
     * @description device is running iOS
     */
    public isIOS?: boolean;

    /**
     * @public
     * @property {String} [connectionType]
     * @description device is running iOS
     */
    public connectionType?: string;

    /**
     * @constructor
     * @description populates browser information on creation
     */
    // eslint-disable-next-line constructor-super
    constructor() {
        try {
            super();

            // check if navigator is unavailable for current browser
            if (!navigator) {
                return;
            }

            const {
                // @ts-ignore
                userAgent, connection, language, cookieEnabled, doNotTrack
            } = this;

            const agentLower = userAgent.toLowerCase();

            // parse platforms
            this.isDesktop = /windows|mac os|linux/i.test(agentLower);
            this.isPhone = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(agentLower);
            this.isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
                .test(agentLower);

            // parse operating systems
            this.isAndroid = /android/i.test(agentLower);
            this.isIOS = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod']
                .includes(userAgent) || (userAgent.includes('Mac') && 'ontouchend' in document);

            // experimental feature on Android/Windows devices
            if (connection) {
                this.connectionType = connection.type;
                connection.onchange = (type: string) => {
                    this.connectionType = type;
                };
            }

            // print navigator privacy notice
            if (console && console.log) {
                console.log(
                    // eslint-disable-next-line prefer-template
                    `${PART1}\n`
                    + 'Our anayltical data include things like:\n'
                    + `- User Agent Info => ${userAgent}\n`
                    + `- Language => ${language}\n`
                    + `- Cookie Availibility => ${cookieEnabled}\n`
                    + `- Connection Type => ${(connection || {}).type}\n`
                    + `- Do Not Track => ${doNotTrack}\n`
                    + `\n${PART2}`
                );
            }
        } catch (err) {
            if (console && console.error) {
                console.error(`${err.message}`);
            }
        }
    }

    /**
     * @public
     * @property {String} orientation
     * @description dynamically calculates the screen orientation for the current device
     */
    get orientation() {
        const { isDesktop } = this;

        if (isDesktop !== undefined) {
            if (isDesktop === false) {
                return (window.innerWidth > window.innerHeight)
                    ? 'Landscape' : 'Portrait';
            }
            return 'Desktop';
        }
        return undefined;
    }

    /**
     * @public
     * @property {Boolean | Undefined} isOnline
     * @description dynamically checks the network connectivity status
     */
    // eslint-disable-next-line class-methods-use-this
    get isOnline() {
        return (navigator) ? navigator.onLine : undefined;
    }
}

const singleton = new ClientNavigatorParser();
export default singleton;
