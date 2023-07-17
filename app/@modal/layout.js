'use client'

import { useRouter } from 'next/navigation'

export default function Layout({children}) {
    const router = useRouter();
    return (
        <div className="fixed bg-black bg-opacity-30 left-0 right-0 top-0 bottom-0">
            <div className="absolute top-10 mx-20 p-10 left-0 right-0 bg-white">
                <div className='float-right cursor-pointer' onClick={() => router.back()}>Close Modal</div>
                {children}
            </div>
        </div>
    );
}
