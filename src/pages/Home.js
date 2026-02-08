function Home() {
    return (
        <div className='home'>
            <div className='playlist'>
                <iframe title='YouTube'
                        src='https://www.youtube.com/embed/videoseries?list=PLpD0fqTBFRaouHuGWR09h7-fX_syp4e8o'
                        frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default Home;
