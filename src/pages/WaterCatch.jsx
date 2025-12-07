import { useState, useEffect } from "react"

const WaterCatch = () => {
    

    // PLAYER

    const [position, setPosition] = useState(50)
    const [speed, setSpeed] = useState(1)
    const [score, setScore] = useState(0)
    
    // RAIN

    const raindrop = document.createElement("img")
    raindrop.src = "./game/raindrop.png"
    raindrop.style.imageRendering = "pixelated"
    raindrop.style.width = "1%"
    raindrop.style.position = "absolute"
    raindrop.style.top = "0%"
    raindrop.style.zIndex = 4
    raindrop.classList.add("raindrop")

    const playtime = 60*1000
    const [time, setTime] = useState(playtime)
    const interval = 200
    const [raindrops, setRaindrops] = useState(document.getElementsByClassName("raindrop"))
    
    useEffect(() => {

        // Spawn rain
        const gamewindow = document.getElementById("game-window");
        const spawnRain = setInterval(() => {
            setTime(time-interval)
            console.log(time)
            if(time > 0) {
                raindrop.style.left = String((Math.random()*90)+5)+"%"
                gamewindow.append(raindrop)
                setRaindrops(document.getElementsByClassName("raindrop"))
            }
        }, interval);

        
        // Cleanup
        return function cleanup() {
            clearInterval(spawnRain)
        }
    }, [time])
    
    const gravity = 0.05

    // const rain_sfx = new Audio('./game/completetask_0.mp3');
    const rain_sfx = [new Audio('./game/splash1.wav'), new Audio('./game/splash2.wav')];
    
    useEffect(() => {

        // =============== Player Movement ===============
        const playerdom = document.getElementById("player")
    
        function handleKeyDown(event) {
            if (event.key == "ArrowRight" && position < 90) {
                setPosition(position+speed)
            }
            if (event.key == "ArrowLeft" && position > 5) {
                setPosition(position-speed)
            }
            setSpeed(speed+0.15);
        };
    
        function handleKeyUp(event) {
            setSpeed(1)
        }
        
        playerdom.style.left = String(position)+"%"
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    
        // =============== Rain Dynamics ===============
        if(document.getElementsByClassName("raindrop").length == 0 && time < 0) {
            console.log("game over")
            document.getElementById("game-over").classList.add("game-over")
        }
        const rainGravity = setInterval(() => {

            for(let i = 0; i < raindrops.length; i++) {
                const raindrop_x = Number(raindrops[i].style.left.substring(0, raindrops[i].style.top.length - 1));
                const raindrop_y = Number(raindrops[i].style.top.substring(0, raindrops[i].style.top.length - 1));
                if(Math.abs(raindrop_x-(position+2.5)) < 5 && raindrop_y > 75 && raindrop_y < 79) {
                    // Raindrop has dropped in between 75% and 85% to the bottom of the screen
                    // Raindrop is within 4.75% of barrel position
                    raindrops[i].remove()
                    rain_sfx[Math.random() < 0.75 ? 0 : 1].play();
                    setScore(score + 1000 + Math.round(Math.abs(raindrop_y-75)*1000) - Math.round(Math.abs(raindrop_x-(position+2.5))*100))
                    if(score > 55000) {
                        playerdom.src = "./game/water_barrel.png"
                    } else {
                        playerdom.src = "./game/empty_barrel.png"
                    }
                } else if(raindrop_y > 90) {
                    raindrops[i].remove() // Raindrop has dropped over 90% to the bottom of the screen
                } else {
                    raindrops[i].style.top = String(raindrop_y+(((raindrop_y/20)*gravity))+gravity)+"%"
                }
            }
            
        }, 1)

        // =============== Cleanup ===============
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
            clearInterval(rainGravity)
        }

    }, [position, speed, time])

    return (
        <div style={{overflow: "hidden", width: "100vw", height: "100vh", position: "relative"}}>
            <div id="game-window" style={{backgroundColor: "#eeeeff", height: "100%"}}>
                <h1 style={{position: "absolute", top: "2.5em", left: "0.75em", zIndex: "10", color: "white"}}>Score: {score}</h1>
                <h1 style={{position: "absolute", top: "4em", left: "0.75em", zIndex: "10", color: "white"}}>Time: {time > 0 ? Math.round(time/1000) : 0}</h1>
                <img id="player" style={{width: "7.5%", position: "absolute", bottom: "5%", imageRendering: "pixelated", zIndex: 3}} className="player" src="./game/empty_barrel.png"></img>
                <img src="./game/country-platform-tiles-example.png" style={{height: "160vh", position: "absolute", bottom: "-15vh", imageRendering: "pixelated", zIndex: 2}} className="ground"></img>
                <img src="./game/country-platform-forest.png" style={{minWidth: "100vw", minHeight: "100vh", position: "absolute", bottom: "-10%", imageRendering: "pixelated", zIndex: 1}}></img>
                <img src="./game/country-platform-back.png" style={{minWidth: "100vw", minHeight: "100vh", position: "absolute", top: "0%", imageRendering: "pixelated"}}></img>
            </div>
            <div id="game-over" style={{backgroundColor: "rgba(0, 0, 0, 0.75)", height: "100%", width:"100%", position: "absolute", top:"100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 100, transitionDuration: "1000ms"}}>
                <h1 style={{color: "white"}}>Game Over</h1>
                <h1 style={{color: "white"}}>Score: {score}</h1>
                <a
                onClick={() => {setTime(playtime); setScore(0); setPosition(50); document.getElementById("game-over").classList.remove("game-over")}}
                style={{ marginTop: "2em" }}
                >
                    <h2 className="a-hover" style={{color: "white"}}>Retry?</h2>
                </a>
            </div>
        </div>
    )
}

export default WaterCatch