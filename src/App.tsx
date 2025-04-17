import logo from "./assets/ptsg_logo.svg";
import Button from "./Button";
import IconLink from "./IconLink";
import Link from "./Link";

// TODO: navigation menu
// TODO: embedded google form
// TODO: match google form colors
// TODO: icon: telegram
// TODO: icon: facebook
// TODO: link: spotify
// TODO: link: apple music
// TODO: about us
// TODO: footer
// TODO: copyright w/ current year
// TODO: rss feed
// TODO: content
// TODO: test light mode
// TODO: test dark mode
// TODO: deploy somewhere
// TODO: desktop
// TODO: laptop
// TODO: mobile
export default function App() {
	return (
		<div class="w-full p-8 flex justify-center">
			<div class="flex flex-col items-center gap-12">
				<div class="w-full flex justify-between items-center gap-8">
					<div class="flex justify-center items-center gap-8">
						<a href="/">
							<img src={logo} width="200" height="200" alt="Logo" />
						</a>
						<Link href="/about">אודות</Link>
						<Link href="/episodes">פרקים</Link>
						<Link href="/episodes">צור קשר</Link>
					</div>
					<div class="flex gap-3">
						<IconLink
							icon="i-fa6-brands-telegram"
							href="https://t.me/ptsgdev"
						/>
						<IconLink
							icon="i-fa6-brands-facebook"
							href="https://www.facebook.com/groups/ptsgdev"
						/>
					</div>
				</div>
				<h1 class="text-7xl font-900 text-center m-0">כל מה שלא טכני בהייטק</h1>
				<p class="text-xl text-center">
					<span class="text-primary font-bold">פותחים סוגריים</span> הוא פודקאסט
					שבועי על כל מה שלא טכני בהייטק (ואולי גם כן).
					<br />
					<Link href="/about" class="underline">
						אנחנו
					</Link>{" "}
					נענה על השאלות שלכם, וניתן את התשובות הנכונות (והלא נכונות) - כדאי לכם
					להקשיב לנו, כי ככה.
				</p>
				<Button
					onClick={() =>
						window.open("https://forms.gle/bRmy3ycbKwPto4dT8", "_blank")
					}
				>
					שאל אותנו שאלה
				</Button>
			</div>
		</div>
	);
}
