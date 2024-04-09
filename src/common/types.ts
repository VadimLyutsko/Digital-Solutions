export type CardPropsType = {
    id: string
    title: string
    description: string
};

export type ContainerPropsType = {
    children: React.ReactNode;
    left?: true;
};