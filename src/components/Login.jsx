// src/components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { auth } from '../db/firebase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const navigate = useNavigate();

    const sanitizeInput = (str) => {
        return str.replace(/[<>'"/;`%]/g, '').trim();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setVerificationSent(false);

        const sanitizedEmail = sanitizeInput(email);
        const sanitizedPassword = sanitizeInput(password);

        if (!sanitizedEmail || !sanitizedPassword) {
            setError('Invalid input');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, sanitizedEmail, sanitizedPassword);
            await userCredential.user.reload();

            const refreshedUser = await auth.currentUser;

            // always enforce re-verification on every login
            if (!refreshedUser.emailVerified) {
                await sendEmailVerification(refreshedUser);
                await signOut(auth);
                setVerificationSent(true);
                setError('Email not verified. Verification email sent.');
                return;
            }

            // optional: sign out and re-login to enforce verification (commented)
            // await signOut(auth);
            // setError('Please login again after verifying your email.');
            // return;

            alert('✅ Login successful! Redirecting to admin...');
            navigate('/admin');
        } catch (err) {
            console.error('Login error:', err);
            if (err.code === 'auth/user-not-found') setError('User not found');
            else if (err.code === 'auth/wrong-password') setError('Incorrect password');
            else setError('Login failed');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
            <div className="w-full max-w-md space-y-6">
                <h2 className="text-center text-3xl font-bold text-gray-900">Admin Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm shadow-sm"
                        required
                    />
                    {verificationSent && (
                        <p className="text-emerald-600 text-xs ml-1 mt-1">Verification email has been sent.</p>
                    )}
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm shadow-sm"
                        required
                    />
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}
