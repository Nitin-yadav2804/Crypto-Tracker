

function Alerts({message, type}){

    if(type === 'info'){
        return(
            <div role="alert" className="alert alert-info w-full text-xl font-bold text-[var(--black)] bg-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{message}</span>
            </div>
        )
    }
    if(type === 'error'){
        return(
            <div role="alert" className="alert alert-error w-full text-xl font-bold text-[var(--white)] bg-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{message}</span>
            </div>
        )
    }

    
}

export default Alerts