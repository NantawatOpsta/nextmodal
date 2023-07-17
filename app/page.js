'use client';

import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1>HOME</h1>
            <div>
                <Link href="/success">link to modal</Link>
            </div>
            <div>
                <Link href="/product">link to product</Link>
            </div>
        </div>
    );
}
