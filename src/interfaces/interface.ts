export interface pokemon {
    name: string;
    types: {
        type: {
            name: string;
        }
    }[];
    weight: number;
    height: number;
    id: number;
    sprites: {
        front_default: string;
        back_default: string;
    };
    stats: {
        base_stat: number;
        stat: {
            name: string;
        }
    }[];
}