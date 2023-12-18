import CompaniesUsingAgileFlow from "./_components/CompaniesUsingAgileFlow";
import Features from "./_components/Features";
import Features2 from "./_components/Features2";
import Features3 from "./_components/Features3";
import Hero from "./_components/Hero";
import TeamsUseAgileFlow from "./_components/TeamsUseAgileFlow";
import LogosSlider from "./_components/logosSlider/LogosSlider";

export default function Home() {
    return (
        <main>
            <Hero />
            <TeamsUseAgileFlow />
            <CompaniesUsingAgileFlow />
            <Features />
            <Features2 />
            <LogosSlider />
            <Features3 />
        </main>
    )
}
