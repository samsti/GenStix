import { useEffect, useState } from 'react';
import { db } from '../db/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function BlogSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const snapshot = await getDocs(collection(db, 'posts'));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <section className="py-20 px-6" id="blog">
            <h2 className="text-4xl font-bold mb-12 text-center">Latest Posts</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts.map(post => (
                    <a key={post.id} href={`/blog/${post.id}`} className="block bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
                        <img src={post.imageUrl} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <p className="text-gray-600 mt-2">{post.excerpt}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
