import './css/NavBar.css';


export default function NavBar(){
    return (
    <nav className="navBar">
        <ul className='buttons'>
            <li className='button'><button className='exit' type='button' title='Exit'>🚪</button></li>
            <li className='button'><button className='back' type='button' title='Back'>&larr;</button></li>
        </ul>
    </nav>
    )
    
}