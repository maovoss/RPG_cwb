import CharView from "./CharView"
import CharStats from "./CharStats"

export default function Content(){
    return (
        <main>
            <div className="contentConteiner">
                <CharView/>
                <CharStats/>
            </div>
        </main>
    )
}