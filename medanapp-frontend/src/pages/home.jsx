import HostelGrid from "../sections/hostelGrid";
import FilterSection from "../sections/filterSection";

export default function Home() {
    return (
        <main>
            {/* <FilterSection
                totalCount={12}
                campusName="USU"
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                onReset={() => setActiveFilter("all")}
            /> */}
            <HostelGrid />
        </main>
    )
}