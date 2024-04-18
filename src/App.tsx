import title from '@/img/title.png';

import './App.css';

function App() {
    return (
        <>
            <main className="home">
                <div className="main__txt">
                    <h1 className="txt__title">About me</h1>
                    <p className="txt__paragraph">
                        Hi! My name is Kostiantyn Nosatskyi and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                        Technologies like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className="txt__paragraph">
                        This page was developed during the course&nbsp;
                        <a className="link" href="https://www.mastersacademy.education/frontend-react-it">
                            &lsquo;Intro to React&rsquo;
                        </a>
                        &nbsp;from Masters Academy in 2024.
                    </p>
                    <p className="txt__paragraph">
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className="txt__paragraph">
                        You can contact me via&nbsp;
                        <a className="link" href="https://t.me/kostyaa_n">
                            Telegram
                        </a>
                        &nbsp;and check out my&nbsp;
                        <a className="link" href="https://github.com/NosatskyiK">
                            GitHub
                        </a>
                        &nbsp;.
                    </p>
                </div>
                <img className="main__img" src={title} alt="title img" />
            </main>
        </>
    );
}

export default App;
