import "./App.css"
import { CardPresent } from "./ComponenteApp"



export default function App (){
    
    return(
        <section className="App">
        <CardPresent  usName="MartinCardozo" name="Martin Cardozo" />
        <CardPresent  usName="BiancaDeb" name="Bianca Deblinger" />
        <CardPresent  usName="EzeElAmante" name="Ezequiel Amin" />
        <CardPresent  usName="FerchuPonce" name="Fer Ponce"/>
        <CardPresent  usName="Belen" name="Belen Pinto" />
        </section>
       
        
    )
}