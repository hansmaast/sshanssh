export type Image = {
    src: string;
    altText: string;
};

export type Content = {
    id: number;
    title: string;
    paragraph: string;
}

export const content: Content[] = [
    {
        id: 1,
        title: 'Hi there, I\'m Hans.',
        paragraph: 'Just a dude. Breathing, living and enjoying every aspect of this life.'
    },
    {
        id: 2,
        title: 'Building simple, clean and accessible applications.',
        paragraph: 'Striving for low complexity is an efficient way to make accessible applications, keeping users and maintainers happy. Simplicity scales, complexity fails.'
    },
    {
        id: 3,
        title: 'Precision requires proper equipment.',
        paragraph: 'Sharp minds choose sharp tools. A solid foundation of javascript, html and css makes developing for the web a breeze. Staying on top of the framework fatigue is easy when you master building with the basic blocks.'
    },
    {
        id: 4,
        title: 'Accessibility for all.',
        paragraph: 'Digital spaces should strive for inclusive design and functionality. Making accessible applications is beneficial for everyone, not just those who depend on it.'
    },
    {
        id: 5,
        title: 'Systematized design.',
        paragraph: 'Know when to build and when to reuse. Sturdy foundations creates features for the future. Systematizing your design is essential for scaling up with speed and confidence.'
    },
    {
        id: 6,
        title: 'Structured content, streamlined storytelling.',
        paragraph: 'Well-organized bytes work wonders. Having a system that is customized for your needs is crucial for bringing your content to life. Get your message out the way you want.'
    },
    {
        id: 7,
        title: 'Flow follows good plumbing.',
        paragraph: 'Nobody likes a broken pipe — but a pipeline that fails fast beats a silent bug that breaks your uptime. A workflow that’s brittle by design lets us deploy with diligence, keeping a steady flow of features.'
    }
]