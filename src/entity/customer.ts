import { Order } from "./order";

export interface Customer {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    orders: Order[];
}