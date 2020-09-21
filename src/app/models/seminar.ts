export interface ISeminar {
    id: string;
    name: string;
    description: string;
    category: string;
    address: string;
    city: string;
    date: Date;
    availableSeats: number;
}