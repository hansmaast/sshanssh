export type Content = {
    id: number;
    title: string;
    paragraph: string;
    // Optional iconify icons, only compatible with iconify icons at the moment
    icons?: string[];
}

export const content: Content[] = [
    {
        id: 1,
        title: 'Hi there, I\'m Hans.',
        paragraph: 'Just a dude. Breathing, living and enjoying every aspect of this life.',
        icons: [
            'ph:sun-horizon-thin',
            'ph:bicycle-thin',
            'ph:tree-thin',
            'ph:beer-stein-thin',
        ]
    },
    {
        id: 2,
        title: 'Building simple, clean and accessible applications.',
        paragraph: 'Striving for low complexity is an efficient way to make accessible applications, keeping users and maintainers happy. Simplicity scales, complexity fails.',
        icons: [
            'ph:globe-thin',
            'ph:gauge-thin',
            'ph:devices-thin',
            'ph:cube-focus-thin',
        ]
    },
    {
        id: 3,
        title: 'Precision requires proper equipment.',
        paragraph: 'Sharp minds choose sharp tools. A solid foundation of javascript, html and css makes developing for the web a breeze. Staying on top of the framework fatigue is easy when you master building with the basic blocks.',
        icons: [
            'ph:brain-thin',
            'ph:brackets-curly-thin',
            'ph:compass-tool-thin',
            'ph:wrench-thin',
        ]
    },
    {
        id: 4,
        title: 'Accessibility for all.',
        paragraph: 'Digital spaces should strive for inclusive design and functionality. Making accessible applications is beneficial for everyone, not just those who depend on it.',
        icons: [
            'ph:person-arms-spread-thin',
            'ph:smiley-thin',
            'ph:users-four-thin',
            'ph:person-simple-tai-chi-thin',
        ]
    },
    {
        id: 5,
        title: 'Systematized design.',
        paragraph: 'Know when to build and when to reuse. Sturdy foundations creates features for the future. Systematizing your design is essential for scaling up with speed and confidence.',
        icons: [
            'ph:lego-thin',
            'ph:tree-structure-thin',
            'ph:codesandbox-logo-thin',
            'ph:polygon-thin',
        ]
    },
    {
        id: 6,
        title: 'Structured content, streamlined storytelling.',
        paragraph: 'Well-organized bytes work wonders. Having a system that is customized for your needs is crucial for bringing your content to life. Get your message out the way you want.',
        icons: [
            'ph:panorama-thin',
            'ph:book-open-thin',
            'ph:film-slate-thin',
            'ph:bookmarks-simple-thin',
        ]
    },
    {
        id: 7,
        title: 'Flow follows good plumbing.',
        paragraph: 'Nobody likes a broken pipe — but a pipeline that fails fast beats a silent bug that breaks your uptime. A workflow that’s brittle by design lets us deploy with diligence, keeping a steady flow of features.',
        icons: [
            'ph:line-segments-thin',
            'ph:infinity-thin',
            'ph:pipe-thin',
            'ph:shuffle-thin',
        ]
    }
]