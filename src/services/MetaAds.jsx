// pages/services/MetaAds.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MetaAdsPage() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <div className="py-24 px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-[#645CFF] mb-6">Meta Ads & Social Management</h1>
                <p className="text-lg text-gray-300 mb-4">
                    We help you consistently attract new customers using high-ROI Meta ads and engaging organic content that builds trust and visibility.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                    From creative direction to campaign execution, we handle it all — ensuring your brand grows while you focus on business.
                </p>
            </div>
            <Footer />
        </div>
    );
}