// src/components/Stats.jsx

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
];

export default function Highlight() {
    return (
        <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="mx-auto flex max-w-xs flex-col gap-y-4 bg-white/70 p-6 rounded-xl shadow ring-1 ring-emerald-100"
                        >
                            <dt className="text-base font-medium text-emerald-700">{stat.name}</dt>
                            <dd className="order-first text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
