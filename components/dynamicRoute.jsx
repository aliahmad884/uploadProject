"use client"

import { useDataContext } from "@/app/context"
import { useRouter } from "next/navigation"

export default function DynamicRoute({ Id }) {
    const router = useRouter()
    const { setData } = useDataContext()
    const fetchData = () => {
        setData(Id)
        fetch('/api/clipBoard', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'id': '66b89aac7b1ffd2e989657ad', 'blogId': Id })
        }).then(response => response.json()).then(result => {
            if (result) {
                console.log('OK')
                router.push('/blogs/blogReader')
            } else {
                console.log('Not Ok')
            }

        }).catch(err => console.log(err))
    }
    return (
        <>
            <button onClick={fetchData} type="button">Read More</button>
        </>
    )
}