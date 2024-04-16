import NavBar from "../components/NavBar";

export default function DebtorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavBar />
            <div className="mt-5">
                {children}
            </div>
        </div>
    )
}