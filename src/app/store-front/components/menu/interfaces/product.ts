
export interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'classic' | 'specialty' | 'vegetarian';
}