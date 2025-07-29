
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";

interface ModifyCartProps {
    data: any;
}

export function ModifyCart({ data }: ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>();

    const ticket = useSelector((state: RootState) => {
        if (!data?.tickets?.id) return undefined;

        return state.cart.tickets.find(cartItem =>
            cartItem?.tickets?.id === data.tickets.id
        );
    });

    const decreaseTicketCount = () => {
        if (!data?.tickets?.id) return;

        if (ticket && ticket.ticketsCount > 1) {
            dispatch(decreaseQuantity(data.tickets.id));
        } else {
            alert("Ticket count cannot be less than 1");
        }
    };

    const increaseTicketCount = () => {
        if (!data?.tickets?.id) return;

        dispatch(increaseQuantity(data.tickets.id));
    };

    return (
        <div className="w-full mt-2 flex items-center justify-center gap-2 text-xs">
            <button
                className="w-6 h-6 flex items-center justify-center bg-white text-blue-00 border border-white rounded-full hover:bg-blue-950 hover:text-white transition"
                onClick={decreaseTicketCount}
            >
                −
            </button>
            <span className="min-w-[24px] text-center font-semibold text-black">
                {ticket?.ticketsCount ?? 1}
            </span>
            <button
                className="w-6 h-6 flex items-center justify-center bg-white text-blue-500 border border-white rounded-full hover:bg-blue-950 hover:text-white transition"
                onClick={increaseTicketCount}
            >
                +
            </button>
        </div>
    );
}
