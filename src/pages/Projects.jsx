import Project from "../components/Project";

export default function Projects() {
    return (
        <>
            <div className="grid-container">
                <Project title="Forgescape"
                    url="https://www.youtube.com/playlist?list=PLhFxqiJA0WlWNxFYUh4fKYkagRRgUSL_f"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173358474625024/forgescape.png"
                    tags={['C#', 'Unity', 'Primary Project']}
                >
                    2D TopDown Adventure game where you are able to fight monsters,
                    obtain powerful items and explore biomes in a procedurally generated world.
                </Project>
                <Project title="Portfolio Website"
                    url="https://github.com/DetKewlDog/portfolio-site"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173797777649664/portfolio-site.png"
                    tags={['Website', 'JS', 'React']}
                >
                    This portfolio website's repo! Built using ReactJS. Feel free to star it on GitHub!
                </Project>
                <Project title="Harvest Hero"
                    url="https://detkewldog.itch.io/harvest-hero"
                    img="https://cdn.discordapp.com/attachments/912581812931416134/1158768708043411648/harvest-hero.png"
                    tags={['C#', 'Unity', 'Game Jam']}
                >
                    A game where players maintain an ever-shrinking farm.
                    Was created as part of the Ludum Dare 54 game jam.
                </Project>
                <Project title="BeWarehouse"
                    url="https://detkewldog.itch.io/bewarehouse"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131172793531248650/bewarehouse.png"
                    tags={['C#', 'Unity', 'Game Jam']}
                >
                    A game that puts players in charge of a busy warehouse operation.
                    Was created as part of the Ludum Dare 53 game jam.
                </Project>
                <Project title="Color Workshop"
                    url="https://colorworkshop.netlify.app/"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173031859998761/color-workshop.png"
                    tags={['Website', 'JS']}
                >
                    Minimalistic website that allows palette organization and manipulation,
                    color related operations and image manipulation.
                </Project>
                <Project title="Red Alert Map"
                    url="https://red-alert-map.netlify.app/"
                    img="https://cdn.discordapp.com/attachments/912581812931416134/1163030713642266624/red-alert-map.png"
                    tags={['Website', 'JS', 'React']}
                >
                    React application that displays real-time rocket alerts in Israel on a map.
                    The app utilizes real-time alert data provided by Pikud HaOref.
                </Project>
                <Project title="Build Monitor"
                    url="https://github.com/DetKewlDog/build-monitor-v2"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131172893838028932/build-monitor.png"
                    tags={['Website', 'Python', 'React', 'JS', 'Flask']}
                >
                    Monitor for debugging Unity player logs/builds. Can be run on a LAN.
                    Used to be a Python CLI app, but has been rewritten it using Python & React.
                </Project>
                <Project title="Route Reverse Engineer"
                    url="https://route-reverse-engineer.netlify.app"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173853071159397/route-reverse-engineer.png"
                    tags={['Website', 'JS', 'React']}
                >
                    Finds all possible starting points that would result in routes with a given
                    walking distance that would reach the coordinates of a given destination.
                </Project>
                <Project title="Netlify Alerts"
                    url="https://netlify-alerts.detkewldog.repl.co"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173674750328886/netlify-alerts.png"
                    tags={['Node.js', 'JS']}
                >
                    Endpoint for outgoing Netlify deploy webhooks that pushes
                    desktop notifications when Netlify deploys your website.
                </Project>
                <Project title="Songsterr Banner Remover"
                    url="https://github.com/DetKewlDog/songsterr-banner-remover"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173905042788496/songsterr-banner-remover.png"
                    tags={['JS', 'Chrome Extension']}
                >
                    Chrome Extension that automatically removes the Songsterr banner
                    that keeps obstructing tabs, for a less cluttered experience.
                </Project>
                <Project title="ForgieBot"
                    url="https://github.com/DetKewlDog/ForgieBot"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173421527601292/forgiebot.png"
                    tags={['Python', 'Discord Bot']}
                >
                    Discord bot for Forgescape's Discord Server.
                    Includes slash commands for bug reports, releases, suggestions, feedback, etc.
                </Project>
                <Project title="6PM"
                    url="https://github.com/DetKewlDog/6PM"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131172669438558258/6pm.png"
                    tags={['Python', 'Discord Bot']}
                >
                    Discord bot that randomly says random stuff, reacts on messages and does other dumb things.
                    "Trained" on 6AM's messages in the Dot Dev server.
                </Project>
                <Project title="MEE6am"
                    url="https://github.com/DetKewlDog/MEE6AM"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173623214907412/mee6am.png"
                    tags={['Python', 'Discord Bot']}
                >
                    Discord bot that handles message XP and user levels like MEE6 does.
                    Currently discontinued, might rewrite sometime using a proper database.
                </Project>
                <Project title="C# Snake"
                    url="https://github.com/DetKewlDog/ConsoleSnake"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173289537052753/cs-snake.png"
                    tags={['C#']}
                >
                    A simple Snake game written in a C# Console Application for fun.
                </Project>
                <Project title="C# Flappy Bird"
                    url="https://github.com/DetKewlDog/ConsoleFlappyBird"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173232960090112/cs-flappy-bird.png"
                    tags={['C#']}
                >
                    A simple Flappy Bird game written in a C# Console Application for fun.
                </Project>
                <Project title="C# Connect Four"
                    url="https://github.com/DetKewlDog/ConsoleConnectFour"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173116803039283/cs-connect-four.png"
                    tags={['C#']}
                >
                    A simple Connect Four game written in a C# Console Application for fun.
                </Project>
                <Project title="KewlEngine"
                    url="https://github.com/DetKewlDog/KewlEngine"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173543112093767/kewl-engine.png"
                    tags={['C++']}
                >
                    Experimental C++ project. Trying to implement CLI rendering.
                    Drawing is pretty slow. Might use WinAPI to create a custom window in the future.
                </Project>
                <Project title="English to Standard Galactic ABC"
                    url="https://gist.github.com/DetKewlDog/4e8f3366e58739735cdb9c0e6c4e049c"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173485109051493/galactic-abc.png"
                    tags={['Python']}
                >
                    Short program written in Python to convert text to Standard Galactic Alphabet.
                    Uses Unicode characters as the letters.
                </Project>
                <Project title="Color Palette Swapper"
                    url="https://gist.github.com/DetKewlDog/91ad74431f93c671e5600da403f271af"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131172977757655130/color-palette-swapper.png"
                    tags={['Python']}
                >
                    Program that searches a color palette on the internet, and swaps the
                    palette of a given image with the new palette based on color similarity.
                </Project>
                <Project title="Nokia Cellphone FC Font Generator"
                    url="https://gist.github.com/DetKewlDog/0ffb3adaeccec0643a66d6c2e71073e1"
                    img="https://cdn.discordapp.com/attachments/801426473059614730/1131173739518754826/nokia-fc-font-generator.png"
                    tags={['Python']}
                >
                    Python program to convert text to the Nokia Cellphone FC font (in image form).
                </Project>
            </div>
        </>
    );
}