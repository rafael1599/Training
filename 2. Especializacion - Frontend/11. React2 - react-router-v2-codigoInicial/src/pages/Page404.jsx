import "../assets/css/404.css"

const Page404 = () => {
    return (
        <main className="todo">
            <div className="divclass"></div>
                <svg>
                <defs>
                    <filter id="glow">
                        <fegaussianblur class="blur" result="coloredBlur" stddeviation="4"></fegaussianblur>
                        <femerge>
                            <femergenode in="coloredBlur"></femergenode>
                            <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                    </filter>
                </defs>
            </svg>

            <h2 className="title">Esta pagina no existe</h2>
        </main>

    )
}

export default Page404