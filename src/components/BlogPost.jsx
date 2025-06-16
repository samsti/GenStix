import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase';

export default function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const ref = doc(db, 'posts', id);
            const snap = await getDoc(ref);
            if (snap.exists()) setPost({ id: snap.id, ...snap.data() });
        };
        fetchPost();
    }, [id]);

    if (!post) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto py-20 px-4">
            <img src={post.imageUrl} className="rounded-xl mb-6 w-full" />
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600">{post.content}</p>
        </div>
    );
}
