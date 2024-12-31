interface Project {
    status: 'pending' | 'working' | 'ready';
    title: string;
    description: string;
    stack: string[];
    url: string;
}

export const projects: Project[] = [
    {
        status: "pending",
        title: 'Dash Droid',
        description: 'A Geometry Dash player bot trained through reinforcement learning.',
        stack: ['Python', 'PyTorch'],
        url: 'http://example.com/dash-droid'
    },
];
