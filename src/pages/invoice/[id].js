import React from "react";

import { useRouter } from 'next/router'
import Invoice from "../invoice";

const TicketId = () => {
    const router = useRouter()
    return (
        <>
        <Invoice id={router.query.id} />
        </>
    );
};

export default TicketId;
