import EpisodeList from "../components/EpisodeList";
import Hero from "../components/Hero";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import { useEpisodesContext } from "../services/episode";

export default function Home() {
    const episodes = useEpisodesContext();
    const trimmedEpisodes = () => episodes().slice(0, 3);

    return (
        <div class="flex flex-col items-center desktop:gap-12 gap-6 text-center">
            <Hero title="כל מה שלא טכני בהייטק">
                <span class="font-bold">פותחים סוגריים</span> הוא פודקאסט שבועי
                על כל מה שלא טכני בהייטק (ואולי גם כן).
                <br />
                <Link variant="inline-link" href="/about">
                    אנחנו
                </Link>{" "}
                נענה על השאלות שלכם, וניתן את התשובות הנכונות (והלא נכונות) -
                כדאי לכם להקשיב לנו, כי ככה.
            </Hero>

            <div
                class="flex flex-wrap items-center justify-center gap-3 laptop:gap-10 tablet:gap-6"
                dir="ltr"
            >
                <PlatformLink platform="spotify" />
                <PlatformLink platform="apple" />
                <PlatformLink platform="youtube" />
            </div>

            <div class="laptop:my-12 my-4 tablet:my-8 w-full">
                <div class="flex flex-col items-center gap-3">
                    <span class="font-bold text-xl">יש לכם שאלה לפודקאסט?</span>
                    <Link variant="button" href="/ask">
                        תשאלו אותנו שאלה
                    </Link>
                </div>
            </div>

            <h2 class="font-900 tablet:text-5xl text-3xl text-primary">
                הפרקים האחרונים שלנו...
            </h2>

            <EpisodeList episodes={trimmedEpisodes} />
        </div>
    );
}
