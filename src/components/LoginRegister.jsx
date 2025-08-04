// src/components/LoginRegister.jsx

import React, { useState } from "react";
import { auth } from "../db/firebase";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification
} from "firebase/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LoginRegister() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const [showReset, setShowReset] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const [resetSent, setResetSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setInfo("");
        setLoading(true);
        try {
            if (register) {
                const cred = await createUserWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(cred.user);
                setInfo("Registrace byla úspěšná! Zkontrolujte svůj e-mail a potvrďte registraci.");
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError("");
        setInfo("");
        setResetSent(false);
        try {
            await sendPasswordResetEmail(auth, resetEmail);
            setResetSent(true);
            setInfo("Na váš e-mail byl odeslán odkaz pro obnovení hesla.");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
            <Navbar />
            {/* BLUR efekt v pozadí */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] rounded-[300px] bg-[#645CFF] opacity-40 blur-[180px] z-0 pointer-events-none" />
            <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-16">
                <div className="w-full max-w-md mx-auto bg-card/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-border/40 flex flex-col items-center">
                    <h2 className="text-3xl font-extrabold mb-6 text-center tracking-tight">
                        {register ? "Registrace" : "Přihlášení"}
                    </h2>
                    {/* Formulář přihlášení/registrace */}
                    {!showReset ? (
                        <form onSubmit={handleSubmit} className="w-full space-y-5">
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 transition bg-input/60 placeholder:text-muted-foreground"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                autoFocus
                            />
                            <input
                                type="password"
                                placeholder="Heslo"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 transition bg-input/60 placeholder:text-muted-foreground"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                            {info && <div className="text-green-600 text-sm text-center">{info}</div>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-2 rounded-lg bg-primary hover:bg-primary/80 transition text-primary-foreground font-bold shadow-sm"
                            >
                                {loading ? "Čekejte..." : register ? "Registrovat se" : "Přihlásit se"}
                            </button>
                        </form>
                    ) : (
                        // Reset hesla
                        <form onSubmit={handleResetPassword} className="w-full space-y-5">
                            <input
                                type="email"
                                placeholder="Váš e-mail"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/70 transition bg-input/60 placeholder:text-muted-foreground"
                                value={resetEmail}
                                onChange={e => setResetEmail(e.target.value)}
                                required
                                autoFocus
                            />
                            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                            {info && <div className="text-green-600 text-sm text-center">{info}</div>}
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-primary hover:bg-primary/80 transition text-primary-foreground font-bold shadow-sm"
                            >
                                {resetSent ? "Odesláno" : "Obnovit heslo"}
                            </button>
                        </form>
                    )}

                    {/* Přepínání režimu / odkazy */}
                    <div className="mt-6 text-center space-y-2 w-full">
                        {!showReset && (
                            <>
                                <button
                                    type="button"
                                    className="text-sm underline text-muted-foreground hover:text-primary"
                                    onClick={() => setRegister(!register)}
                                >
                                    {register ? "Už máte účet? Přihlásit se" : "Nemáte účet? Registrovat se"}
                                </button>
                                <br />
                                {/* "Zapomněli jste heslo?" jen při přihlášení */}
                                {!register && (
                                    <button
                                        type="button"
                                        className="text-xs underline text-muted-foreground hover:text-primary"
                                        onClick={() => {
                                            setShowReset(true);
                                            setError("");
                                            setInfo("");
                                            setResetEmail("");
                                        }}
                                    >
                                        Zapomněli jste heslo?
                                    </button>
                                )}
                            </>
                        )}
                        {showReset && (
                            <button
                                type="button"
                                className="text-xs underline text-muted-foreground hover:text-primary"
                                onClick={() => setShowReset(false)}
                            >
                                Zpět na přihlášení
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
