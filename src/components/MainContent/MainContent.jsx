export default function MainContent({ children }) {
    return (
        <main class="main">
            <div class="container">
                <div class="main__block">
                    <div class="main__content">
                        {children}
                    </div>
                </div>
            </div>
        </main >
    )
}
