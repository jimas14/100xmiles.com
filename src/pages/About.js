import shot from '../img/shot.png';

function About() {
    return (
        <div className='about'>
            <img
                id='shot'
                src={shot}
                alt='Headshot of 100 Miles creators Kyle Brennen Lawless and Grace D&#39;Onofrio'
            />
            <p id='blurb'>
                100 Miles is a multi-media based brand focusing specifically on Baltimore culture,
                featuring individuals talented in areas of music, fine art, cuisine, and more.
                Created by Kyle Brennen Lawless and Grace D'Onofrio in 2021, the duo combined
                their strengths in graphic design and video production to create a platform to
                highlight independent artists. The team has cultivated multiple video series
                to highlight individuals and their talents.
            </p>
        </div>
    );
}

export default About;
