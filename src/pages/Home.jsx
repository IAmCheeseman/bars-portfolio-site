import Descbox from '../components/Descbox';
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import IconsList from '../components/IconsList';

export default function Home() {
    return (
        <>
            <header>
                <div className='title unselectable'>
                    <h1>Bar Goldenstein</h1>
                    <h2>Game developer + programmer</h2>
                </div>
            </header>

            <br /><br />
            <br /><br />
            <br /><br />

            <AboutMe dir='fromleft'>
                <Descbox>
                    <h1>Hey there, I'm Bar! 👋</h1>
                    I'm a 17-year-old game developer, programmer and beginner guitarist from Israel! 💻🎸
                    <br /><br />
                    I'm a passionate C#, C++, Python, and JavaScript programmer.
                    <br /><br />
                    I'm currently focused on learning JavaScript frameworks and game development using Unity.
                    <br /><br />
                    I work at <a href="https://www.rafael.co.il/" target="_blank">Rafael Advanced Defense Systems</a> as a full-time job.
                </Descbox>
                <img src="https://cdn.discordapp.com/attachments/912581812931416134/1163109334935421059/DoggoPFPcircle.png"></img>
            </AboutMe>

            <br /><br />

            <AboutMe dir='fromright'>
                <div id='featured'>
                    <div className="grid-container">
                        <Project title="Forgescape"
                            url="https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f"
                            img="https://cdn.discordapp.com/attachments/801426473059614730/1131173358474625024/forgescape.png"
                            tags={['C#', 'Unity', 'Primary Project']}
                        >
                            2D TopDown Adventure game where you are able to fight monsters,
                            obtain powerful items and explore biomes in a procedurally generated world.
                        </Project>
                        <Project title="Harvest Hero"
                            url="https://detkewldog.itch.io/harvest-hero"
                            img="https://cdn.discordapp.com/attachments/912581812931416134/1158768708043411648/harvest-hero.png"
                            tags={['C#', 'Unity', 'Game Jam']}
                        >
                            A game where players maintain an ever-shrinking farm.
                            Was created as part of the Ludum Dare 54 game jam.
                        </Project>
                        <Project title="Red Alert Map"
                            url="https://red-alert-map.netlify.app/"
                            img="https://cdn.discordapp.com/attachments/912581812931416134/1163030713642266624/red-alert-map.png"
                            tags={['Website', 'JS', 'React']}
                        >
                            React application that displays real-time rocket alerts in Israel on a map.
                            The app utilizes real-time alert data provided by Pikud HaOref.
                        </Project>
                        <Descbox>
                            <h1>My Featured Projects</h1>
                            I develop projects in my free time to<br />
                            practice my skills and as a personal hobby.
                            <br /><br />
                            Here is a snippet of my latest<br />
                            personal projects!
                            <br /><br />
                            Feel free to check out their respective<br />
                            repositories if you wish to take a more<br />
                            in-depth look into them.
                            <br /><br />
                            A complete list of projects I've<br />
                            developed can be found <a href='' onClick={e => {
                                e.preventDefault();
                                document.querySelector('a[name="Projects"]').click();
                            }}>here</a>.
                            <br /><br />
                        </Descbox>
                    </div>
                </div>
            </AboutMe>

            <AboutMe dir='frombottom'>
                <Descbox>
                    <h1 style={{fontSize: '40px'}}>My Skillset</h1>
                    <div id='skillset'>
                        <div className="grid-container">
                            <Descbox>
                                <h1>3+</h1>
                                Years of Programming Experience
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-book-open'></h1><br />
                                Independent Learner and Hobbyist
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-thumbs-up'></h1><br />
                                Problem Solving Skills
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-bug'></h1><br />
                                High-Level Debugging Skills
                            </Descbox>
                            <Descbox>
                                <h1 className='fas fa-award'></h1><br />
                                Aspiration to Perfectionism
                            </Descbox>
                        </div>
                    </div>
                    <div id='toolset'>
                        <div>
                            <h1>My Toolset</h1>
                            <IconsList
                                list={['cs', 'unity', 'py', 'flask', 'cpp', 'c', 'react', 'nodejs', 'js', 'html', 'css', 'vite', 'linux', 'supabase', 'bash']}
                            />
                            <h1>Things I'd Like to Learn</h1>
                            <IconsList
                                list={['svelte', 'nextjs', 'raspberrypi', 'ts', 'vim', 'lua', 'godot']}
                            />
                        </div>
                        <div>
                            <br />
                            <img src={`https://github-readme-stats-detkewldog.vercel.app/api/top-langs/?username=detkewldog&layout=donut&theme=nord&count_private=true&langs_count=10?${new Date().getTime()}`}
                                alt="My Stats" loading="lazy" style={{width: '350px', height: '375px'}}></img>
                        </div>
                    </div>
                </Descbox>
            </AboutMe>
            <br />
        </>
    );
}