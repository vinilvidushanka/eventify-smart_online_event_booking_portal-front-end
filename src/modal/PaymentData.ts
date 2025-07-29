
export interface TicketDetails {
    id: number;
    title: string;
    venue: string;
    date: string;
    time: string;
    price: number;
    currency: string;
    image: string;
}

export interface TicketItem {
    tickets: TicketDetails;
    ticketsCount: number;
}

export interface PaymentData {
    totalAmount: string;
    tickets: TicketItem[];
    paidBy: string;
}
