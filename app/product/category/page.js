import Link from "next/link";

export default function Category() {
    return (
        <>
            <div>page category</div>
            <Link href="/product/category/modal">open modal</Link>
        </>
    );
}