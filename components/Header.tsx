import Link from "next/link";

const navItems = [
    { name: "Features", path: "/#features" },
    { name: "Why Zuto", path: "/#whyZuto" },
    { name: "Reviews", path: "/#reviews" },
    { name: "Team", path: "/#team" },
    { name: "Contact", path: "/#contact" },
];

const Logo = () => (
    <Link
        href="/"
        className={`flex items-center gap-2 font-bold text-2xl sm:text-3xl`}
    >
        <img
            src="/zuto-removebg-preview (1).png"
            alt="Zuto Logo"
            className={`h-12 w-12 animate-spin-slow`}
        />
        <span className="text-logo-gradient text-zinc-600">Zuto</span>
    </Link>
);

const Header = () => {
    return (
        <div className="w-full fixed top-0 left-0 right-0 z-50 pt-2 px-2 md:px-16">
            <header className="  backdrop-blur-md border-[1px]  rounded-full">
                <div className="px-4 sm:px-7 flex h-16 items-center justify-between ">
                    <Logo />
                    <nav className="hidden md:flex items-center md:text-sm lg:text-lg gap-6">
                        {navItems.map(({ name, path }) => (
                            <Link
                                key={name}
                                href={path}
                                className="text-muted-foreground transition-all duration-300 hover:text-amber-500 hover:text-xl hover:-translate-y-0.5"
                            >
                                {name}
                            </Link>
                        ))}
                    </nav>

                    {/* <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button className="p-2" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="w-[300px] flex flex-col p-0"
                            >
                                <div className="p-4 border-b">
                                    <Logo size={8} />
                                </div>
                                <nav className="flex flex-col gap-4 p-4">
                                    {navItems.map(({ name, path }) => (
                                        <SheetClose asChild key={name}>
                                            <Link
                                                href={path}
                                                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                {name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div> */}
                </div>
            </header>
        </div>
    );
};

export default Header;
