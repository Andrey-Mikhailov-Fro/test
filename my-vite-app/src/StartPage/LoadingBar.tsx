import { useState } from "react";

export default function LoadingBar() {
    const [order, setOrder] = useState(true);

    const barClasses = () => {
        setTimeout(() => setOrder(!order), 100);
        return order ? 'flex h-5': 'flex h-5 flex-row-reverse'
    };

    return (
        <div className={barClasses()}>
            <div className="w-full h-full bg-gradient-to-r from-transparent from-30% via-blue-500 via-60%" />
            <div className="w-full h-full bg-gradient-to-r from-transparent from-30% via-green-500 via-60%" />
        </div>
    );
}