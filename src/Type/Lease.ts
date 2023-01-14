export interface InterfaceLease {
    [index: number]: {
        id: string;
        title: string;
        description: string;
        equipments: string[];
        host: {
            name: string;
            picture: string;
        };
        location: string;
        pictures: string[];
        rating: string;
        tags: string[];
        cover: string;
    },
    map: Function,
}
