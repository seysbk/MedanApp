import FeaturedHostelCard from "./featuredHostelCard";
import HostelCard from "../components/hostelCard";

export default function HostelGrid() {
    return(
        <main className="hostel-grid">
            <FeaturedHostelCard
                id={2}
                name="GreenHouse Residence"
                description="Top rated for cleanliness and distance to Engineering Faculty."
                isVerified={true}
            />
            <HostelCard
                id={1}
                name="Sunny Side Dorms"
                coverImage="https://images.unsplash.com/photo-1596276020587-8044fe049813"
                distance={1.2}
                isVerified={true}
                type="Unisex"
                price={950}
            />
            <HostelCard
                id={1}
                name="Sunny Side Dorms"
                coverImage="https://images.unsplash.com/photo-1596276020587-8044fe049813"
                distance={1.2}
                isVerified={true}
                type="Unisex"
                price={950}
            />
            <HostelCard
                id={1}
                name="Sunny Side Dorms"
                coverImage="https://images.unsplash.com/photo-1596276020587-8044fe049813"
                distance={1.2}
                isVerified={true}
                type="Unisex"
                price={950}
            />
            <HostelCard
                id={1}
                name="Sunny Side Dorms"
                coverImage="https://images.unsplash.com/photo-1596276020587-8044fe049813"
                distance={1.2}
                isVerified={true}
                type="Unisex"
                price={950}
            />
            <HostelCard
                id={1}
                name="Sunny Side Dorms"
                coverImage="https://images.unsplash.com/photo-1596276020587-8044fe049813"
                distance={1.2}
                isVerified={true}
                type="Unisex"
                price={950}
            />
        </main>
    )
}