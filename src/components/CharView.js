import './css/CharView.css'

export default function CharView(){
    return (
        <div className="charInfo">
            <div className="charView">

            </div>
            <div className="charItems">
                <ul className="itemList">
                    <li className="item">Head</li>
                    <li className="item">Torso</li>
                    <li className="item">Hand 1</li>
                    <li className="item">Hand 2</li>
                    <li className="item">Legs</li>
                    <li className="item">Feet</li>
                </ul>
            </div>
        </div>
    )
}