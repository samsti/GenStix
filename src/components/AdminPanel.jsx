// src/components/AdminPanel.jsx
import { useState, useEffect } from 'react';
import { db, storage } from '../db/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../db/firebase';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/');
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !excerpt || !content || !imageFile) {
            alert('All fields are required');
            return;
        }
        setLoading(true);

        try {
            const imageRef = ref(storage, `posts/${Date.now()}_${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const imageUrl = await getDownloadURL(imageRef);

            await addDoc(collection(db, 'posts'), {
                title,
                excerpt,
                content,
                imageUrl,
                createdAt: serverTimestamp(),
            });

            setTitle('');
            setExcerpt('');
            setContent('');
            setImageFile(null);
            setImagePreview('');
            alert('Post saved');
        } catch (err) {
            console.error(err);
            alert('Error saving post');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/');
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Admin Panel</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
                >
                    Logout
                </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded px-4 py-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    className="w-full border rounded px-4 py-2"
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full border rounded px-4 py-2"
                    required
                />
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" className="w-full h-auto rounded shadow" />
                )}
                <textarea
                    rows="8"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border rounded px-4 py-2"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-600 text-white py-3 rounded hover:bg-emerald-500 transition"
                >
                    {loading ? 'Saving...' : 'Add Post'}
                </button>
            </form>
        </div>
    );
}
