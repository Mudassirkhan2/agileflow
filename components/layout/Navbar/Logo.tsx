import Link from "next/link";
const Logo = () => {
    return (
        <Link
            href="/"
        >
            <span className="font-serif text-2xl font-bold ">Agile</span><span className="font-mono text-3xl font-extrabold text-red-500">Flow</span>
        </Link>
    )
}

export default Logo
