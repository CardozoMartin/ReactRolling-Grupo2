export function CardPresent({usName,name}){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${usName}`} alt={name} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">Programador</span>
                </div>
                
                
            </header>

            
        </article>
    )
}