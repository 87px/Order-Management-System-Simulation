import { Costumer } from '../interfaces/Costumer';
import { Product } from '../interfaces/Product';
import { OrderStatus } from '../index';

type Calendary = [number, number, number];

interface Order {
    orderId: number;
    costumer: Costumer;
    products: Product;
    status: OrderStatus;
    orderDate: Calendary;
}